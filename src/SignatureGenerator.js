import CryptoJS from "crypto-js";

export class SignatureGenerator {
  constructor(secret, data) {
    this.secret = secret;
    this.data = data;
    console.log("This is the secret\n" + this.secret);
    console.log("This is the payload\n" + this.data);
  }

  generate() {
    return CryptoJS.HmacSHA256(this.data, this.secret).toString(
      CryptoJS.enc.Hex
    );
  }
}
