const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// auto-create session directory
const SESSION_DIR = process.env.SESSION_DIR || './session';
if (!fs.existsSync(SESSION_DIR)) {
    fs.mkdirSync(SESSION_DIR, { recursive: true });
}

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~ZUAwWajA#ZrNeG7ImuBjDoMRKgc7-T2h2wKe7nGVBQVCTEiMjEsQ",
  PORT: process.env.PORT || "8000",
  SESSION_DIR
};
