import { JSEncrypt } from "nodejs-jsencrypt";
import Swal from "sweetalert2";
import numeral from "numeral";
import moment from "moment";
import { toast } from "react-toastify";
import { NotifyStatus } from "./interface";

export function formatCurrency(value: string): string {
  const negativeSign = Number(value) < 0 ? "-" : "";
  return (
    negativeSign + "$" + numeral(Math.abs(parseFloat(value))).format("0,0.00")
  );
}

export function formatDateTime(time: number): string {
  return moment.utc(time * 1000).format("DD-MM-YYYY HH:mm:ss");
}

export function showErrorModal(response: XMLHttpRequest) {
  if (!response?.status) return false;

  const data = JSON.parse(response?.response);

  if (Array.isArray(data?.message)) {
    return Swal.fire(data.error, data.message.join("\n"), "warning");
  }

  Swal.fire(data.error, data.message, "warning");
}

export function encryptFunc() {
  const encryptInstance = new JSEncrypt();

  const publicKey = process.env.NEXT_PUBLIC_ENC_KEY?.replace(/\\n/g, "\n");
  encryptInstance.setPublicKey(publicKey);
  return encryptInstance;
}

export function loadAllImage(img: any) {
  return new Promise((resolve, reject) => {
    const loadImg = new Image();
    loadImg.src = img.url;
    // wait 2 seconds to simulate loading time
    loadImg.onload = () => resolve(img.url);
    loadImg.onerror = (err) => reject(err);
  });
}

export function chunkArrary(array: string | any[], size: number) {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
}

export function validateEmail(email: string) {
  const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexp.test(email);
}

export function notify(msg: string, status: NotifyStatus) {
  if (status === NotifyStatus.success) {
    toast.success(msg, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (status === NotifyStatus.error) {
    toast.error(msg, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
}
