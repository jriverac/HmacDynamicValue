import { SignatureGenerator } from "../src/SignatureGenerator.js";

test("signs something", () => {
  let secret = "secret";
  let data = "data";
  let generator = new SignatureGenerator(secret, data);

  expect(generator.generate()).toBe(
    "b5d4045c3f466fa91fe2cc6abe79232a1a57cdf104f7a26e716e0a1e2789df78"
  );
});
