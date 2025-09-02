const os = require('os')
const {runtime} = require("..utils/functions")
module.exports = [
  {
    name:"alive",
    description:"alive command",
    react:"👋",
    ownerOnly: false,
    groupOnly: false,
    adminOnly: false,
    botAdmin: false,
    async execute(conn,mek,args,context){
      const {from,pushname,reply,quoted} = context;
      try{
        let desc = `
  Hey ${pushname} I am alive
  Uptime:${runtime(process.uptime())}
  `
  await conn.sendMessage(from,
             {
               image:{url:"https://files.catbox.moe/9mil0t.jpg"},
               caption:desc
             },{
               quoted:mek
    }

  )


      }catch(e){
        console.log(e)
      }

    }
    
  }
  
]
