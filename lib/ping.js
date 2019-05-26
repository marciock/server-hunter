const child=require('child_process');

const execPing=(args,socket)=>{
  const ping=child.spawn('ping',[args]);
  const io=socket;
  let client=[];
  ping.stdout.on('data',(data)=>{
    console.log(data.toString()[1])
     io.emit('output',data.toString());
  })
  ping.stderr.on('data',(data)=>{
    io.emit('output',data.toString());
  })
  ping.on('error',(err)=>{
    io.emit('output',err.message);
  })
  
  
}

module.exports=execPing;