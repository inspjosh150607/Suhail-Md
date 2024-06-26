const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '2349023371564') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '2349023371564') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349023371564";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_57_05_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDgyLFxuICAgICAgICA0MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MyxcbiAgICAgICAgNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5LFxuICAgICAgICA4MCxcbiAgICAgICAgMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDI1LFxuICAgICAgICA5MSxcbiAgICAgICAgODgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDYxLFxuICAgICAgICA3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgODgsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTExLFxuICAgICAgICA1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4LFxuICAgICAgICA4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgODYsXG4gICAgICAgIDM5LFxuICAgICAgICA4NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMixcbiAgICAgICAgMTY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDc1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDczLFxuICAgICAgICA0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDk5LFxuICAgICAgICA3NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUmNEMS9hTS9wYU1GTUpnNkVkNWUzeW4yOGRnTG91VVczVENxUFVoV0xndz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTM3OTc2NTYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEMDE2OEE1NUY2NTdFNjNEMzJFQTk0OTg5NEY0QUY5NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTQ5MjgyNTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTM3OTc2NTYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NEI1ODg5OTFGQTNEOEQzN0FGNzE2MzVBMkEzREU2OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTQ5MjgyNTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTM3OTc2NTYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NkIyQUFGQ0ZENDkxMEU4RDAxNzMxQ0VEM0U3NkI4QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTQ5MjgyNTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTM3OTc2NTYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzNzUyOERGQURDMDk3MkFFODQyMDlBODA4NzY4OEE5NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTQ5MjgyNTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUjlJLXpmUW1RdEczYUp0RXNMb0tUQVwiLFxuICBcInBob25lSWRcIjogXCIyZjQwMmE4Ny01YTgxLTQxMjQtODQ2OC04YjAwOTQyYWMyNzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzUsXG4gICAgICAyNTAsXG4gICAgICAzNCxcbiAgICAgIDg3LFxuICAgICAgMjU1LFxuICAgICAgMjQ1LFxuICAgICAgNSxcbiAgICAgIDI0MCxcbiAgICAgIDIzOSxcbiAgICAgIDc3LFxuICAgICAgMTUyLFxuICAgICAgMTU5LFxuICAgICAgMjE5LFxuICAgICAgMTIxLFxuICAgICAgMTIyLFxuICAgICAgNjcsXG4gICAgICAyMjgsXG4gICAgICAzNSxcbiAgICAgIDY0LFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDM1LFxuICAgICAgMTIsXG4gICAgICAxOTcsXG4gICAgICAxODksXG4gICAgICAyNDMsXG4gICAgICAxOSxcbiAgICAgIDQxLFxuICAgICAgMTM4LFxuICAgICAgNjgsXG4gICAgICA2NixcbiAgICAgIDIyNSxcbiAgICAgIDE5LFxuICAgICAgMTA4LFxuICAgICAgMTU1LFxuICAgICAgMjQzLFxuICAgICAgODcsXG4gICAgICAyMCxcbiAgICAgIDEyMCxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzWEpaMkdHNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzNzk3NjU2MDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjQ5ODM3NDE2Mjg1Mjk6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJSZW1pZGVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQcnlsc0FGRVBYMDNyRUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlF1TjlFOGF2R1hMOHBURDZGUVIzVXpGR0VZYnJrTEcreXFaSXJTOXpVMUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYjkreFFCMHA3WVJPR2RaWVprdnNDQk1VT3pjcmxvU25uYmNBVmtRdWhxK3JCNVNxTmxrdU5WY0tEdTZFYkdLcnBhOGxkeEFrWEZMSFJISnNaV2hZRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMVVETjRYMUkrdkVSR0NNMHhSN2VXOHBpbEViNkpTazlJQTZFV3VzTThPbnQ4dzQyeUY1YkpkNnJtYnlTWHp4ZFE1Nmh5blZyMWh2emdLcnArT2F0Z2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNzk3NjU2MDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0OTI4MjQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmhTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGaFMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyRUlad2ZxM2VLNXNlZ1ZyOUc3ck1mZVBxUVRIeUEvbDU4YVgwZFdXMjdNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NzY3NzAxNzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDkyODI1NDY5MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
