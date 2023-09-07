
const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key'; // Replace with your actual secret key

function generateToken(user) {
  const payload = {
    userId: user.id, // Include user-specific data here if needed
  };

  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Adjust the expiration time as needed

  return token;
}

module.exports = { generateToken };