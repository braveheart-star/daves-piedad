import React from 'react'
import { NextResponse } from 'next/server'
import { pdf } from '@react-pdf/renderer'
import { PortfolioPDFDocument } from '@/lib/portfolio-pdf-document'
import fs from 'fs'
import path from 'path'

const PROJECT_IMAGES = [
  'limesurvey.png',
  'trackapp.png',
  'alphaswap.png',
]

const ICON_URLS = {
  github: 'https://img.icons8.com/ios-filled/50/000000/github.png',
  linkedin: 'https://img.icons8.com/ios-filled/50/000000/linkedin.png',
  email: 'https://img.icons8.com/ios-filled/50/000000/new-post.png',
}

async function loadImageData(): Promise<Record<string, string>> {
  const imageData: Record<string, string> = {}
  const cwd = process.cwd()
  const projectFiles = [
    ...PROJECT_IMAGES.map((f) => ({ path: path.join(cwd, 'public', 'images', 'projects', f), key: f })),
    { path: path.join(cwd, 'public', 'images', 'photo', 'daves-photo.jpg'), key: 'profile' },
  ]
  for (const { path: filePath, key } of projectFiles) {
    try {
      if (fs.existsSync(filePath)) {
        const buffer = fs.readFileSync(filePath)
        const base64 = buffer.toString('base64')
        const ext = path.extname(filePath).toLowerCase()
        const mime = ext === '.png' ? 'image/png' : ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'image/png'
        imageData[key] = `data:${mime};base64,${base64}`
      }
    } catch {
      // skip missing or unreadable images
    }
  }
  return imageData
}

async function loadIconData(): Promise<Record<string, string>> {
  const iconData: Record<string, string> = {}
  const iconsDir = path.join(process.cwd(), 'public', 'icons')
  const localIcons = ['github.png', 'linkedin.png', 'email.png'] as const
  try {
    for (const filename of localIcons) {
      const key = path.basename(filename, '.png') as keyof typeof ICON_URLS
      const filePath = path.join(iconsDir, filename)
      if (fs.existsSync(filePath)) {
        const buffer = fs.readFileSync(filePath)
        iconData[key] = `data:image/png;base64,${buffer.toString('base64')}`
      }
    }
    if (Object.keys(iconData).length === 0) {
      for (const [key, url] of Object.entries(ICON_URLS)) {
        const res = await fetch(url)
        if (res.ok) {
          const arrayBuffer = await res.arrayBuffer()
          const base64 = Buffer.from(arrayBuffer).toString('base64')
          iconData[key] = `data:image/png;base64,${base64}`
        }
      }
    }
  } catch {
    // skip if load fails
  }
  return iconData
}

export async function GET() {
  try {
    const [imageData, iconData] = await Promise.all([loadImageData(), loadIconData()])
    const doc = React.createElement(PortfolioPDFDocument, { imageData, iconData })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buffer = await pdf(doc as any).toBuffer()
    const body = buffer instanceof Buffer ? new Uint8Array(buffer) : buffer
    return new NextResponse(body as BodyInit, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Daves-Piedad-Portfolio.pdf"',
        // Prevent browsers from reusing an older cached PDF after branding updates.
        'Cache-Control': 'no-store, max-age=0, must-revalidate',
        'Pragma': 'no-cache',
      },
    })
  } catch (error) {
    console.error('Portfolio PDF generation failed:', error)
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    )
  }
}
