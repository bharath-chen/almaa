import CryptoJS from "crypto-js";

const secretKey = import.meta.env.VITE_SECRET_KEY;

class CryptoService {
  constructor(private secretKey: string) {}

  encryptData(data: any) {
    const cipherText = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      this.secretKey
    ).toString();

    return cipherText;
  }

  decryptData(cipherText: any) {
    const bytes = CryptoJS.AES.decrypt(cipherText, this.secretKey);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return decryptedData;
  }
}

export default new CryptoService(secretKey);
