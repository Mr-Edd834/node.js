// password-generator.js
// Generate random passwords using npm package

const generator = require("generate-password");

function generatePassword() {
  const password = generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
  });

  console.log("Generated Password:", password);
}

// Call function
generatePassword();
