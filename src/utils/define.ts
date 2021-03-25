const Define = {
  socket: 'https://socket.fortunext.io:3001',
  domain: 'https://caltechcasino.com/',
  domainApi: 'https://caltechcasino.com/api/trade/',
  domainApp: 'https://caltechcasino.com/',
  // domain: 'http://localhost:3000/',
  // domainApi: 'http://caltechcasino.local:81/trade/',
  // domainApp: 'http://localost:3000/',
  token:
    '0bf3bcfbd790653df5dbdd162112bfc397dd1911d85d29c945e5176bcbbac53ed26b8190bfd42405b3312326ecff6f5e',
  authKey: 'STORAGE_KEY',
  publicKey:
    '-----BEGIN PUBLIC KEY-----\r\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmsQr0RfpFhzjh12X85oi\r\n' +
    '+44Aud2YE5q676Od0vtPJMPpTP15NSIvKb4AamioOuORT3sfFW3toYVQ8cmk9aGy\r\n' +
    'tqukAyRs/eNaOagQKi4EzylJ4F4+jOUKSBez1VdvGJyAA4Y8tH4PcJiH8gCUEl6v\r\n' +
    'UiwRm+8EEdHQgLCnv86+uAEsTAdUIR+0hKPkNBkX4KMloy6STbB26QiAnB4qQRZd\r\n' +
    'qywVycI1SQsrg11DWuvRkwQVYEtGgyM1q0aAU27MdHpovO+TIQ/oJoB57DFDjBCz\r\n' +
    '2uvwdgzMNAm7H9VvG2clTHTL9pZEQjtnC8qF3Qhyqc0dthBxpL3atyc4cqStq8rU\r\n' +
    'xwIDAQAB\r\n' +
    '-----END PUBLIC KEY-----',
  baseUrl: '/',
  pairs: {
    BTCUSDT: {
      symbol: 'BTCUSDT',
      key: 'crypto_btc_usdt',
      str: '0~CRYPTO~BTC~USDT',
    },
    ETHUSDT: {
      symbol: 'ETHUSDT',
      key: 'crypto_eth_usdt',
      str: '0~CRYPTO~ETH~USDT',
    },
  },
  vndPrice :23500
};

export default Define;
