const crypto = require("crypto");
const fs = require("fs");

const file = fs.readFileSync("C:/Users/hp/OneDrive/shreshth1/shreshth-portfolio/public/models/character.enc");
const iv = file.slice(0, 16);
const encryptedData = file.slice(16);

const key = crypto.createHash("sha256").update("Character3D#@").digest();
const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);

let decrypted = decipher.update(encryptedData);
decrypted = Buffer.concat([decrypted, decipher.final()]);

fs.writeFileSync("C:/Users/hp/OneDrive/shreshth1/shreshth-portfolio/public/models/character.glb", decrypted);
