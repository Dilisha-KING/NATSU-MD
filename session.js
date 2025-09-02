const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~ZUAwWajA#ZrNeG7ImuBjDoMRKgc7-T2h2wKe7nGVBQVCTEiMjEsQ",
PORT: process.env.PORT || "8000"
};

