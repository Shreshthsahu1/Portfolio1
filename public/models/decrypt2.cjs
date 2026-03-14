const crypto = require("crypto");
const fs = require("fs");

const inputFile = "C:/Users/hp/OneDrive/shreshth1/shreshth-portfolio/public/models/character.enc";
const outputFile = "C:/Users/hp/OneDrive/shreshth1/shreshth-portfolio/public/models/character.glb";
const password = "Character3D#@";

const key = crypto.createHash("sha256").update(password).digest();

const input = fs.readFileSync(inputFile);
const iv = input.subarray(0, 16);
const encryptedData = input.subarray(16);

try {
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  const decrypted = Buffer.concat([
    decipher.update(encryptedData),
    decipher.final()
  ]);
  fs.writeFileSync(outputFile, decrypted);
  console.log("Decryption successful!");
} catch (e) {
  console.error("Decryption failed:", e);
}
