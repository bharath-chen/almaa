import CryptoJS from "crypto-js";

const secretKey = import.meta.env.VITE_SECRET_KEY;

class CryptoService {
  private secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  encryptData(data: unknown): string {
    try {
      const cipherText = CryptoJS.AES.encrypt(
        JSON.stringify(data),
        this.secretKey
      ).toString();

      return cipherText;
    } catch (error) {
      console.error("Encryption failed:", error);
      throw new Error("Data encryption failed.");
    }
  }

  decryptData(cipherText: string): any {
    try {
      const bytes = CryptoJS.AES.decrypt(cipherText, this.secretKey);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      return decryptedData;
    } catch (error) {
      console.error("Decryption failed:", error);
      throw new Error("Data decryption failed.");
    }
  }
}

export default new CryptoService(secretKey);
