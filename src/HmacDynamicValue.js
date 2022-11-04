import { SignatureGenerator } from "./SignatureGenerator.js";

class HmacDynamicValue {
  static identifier = "com.strongerfastermonkey.HmacDynamicValue";
  static title = "HMAC Signed Payload Dynamic Value";
  static help = "https://github.com/jriverac/HmacDynamicValue/blob/main/README.md";
  static inputs = [
    DynamicValueInput("secret", "Secret", "SecureValue", {
      placeholder: "Your secret?",
      persisted: true,
    }),
  ];

  evaluate(context) {
    let request = context.getCurrentRequest();

    let generator = new SignatureGenerator(this.secret, request.body);
    return generator.generate();
  }
}

registerDynamicValueClass(HmacDynamicValue);
