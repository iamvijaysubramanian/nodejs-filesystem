const express=require("express");
const fs=require("fs")
const app=express()

app.get("/folderList",(req,res)=>{
    res.json({message:"List of Folder"}) 
})

app.get("/fileContent",(req,res)=>{
    res.json({message:"Content of the File"})
})

app.get("/createfile",(req,res)=>{
    res.json({message:"File Created"})
})

app.get("/createfolder",(req,res)=>{
    res.json({message:"folder created"})
})

app.get("/dashboard",(req,res)=>{
    res.json({message:"Welcome to Dashboard"})
});

app.get("/service",(req,res)=>{
    res.json({message:"We provide IT solutions to your business productivities"})
});


fs.mkdir("./my_folder",function(){
    console.log("folder created")
});
fs.writeFile("./my_folder/current_date_time.txt",`The content is ${new Date()}+ Time Stamp ${Date.now()}`,function(){
    console.log("file created inside the folder")
})
fs.readFile("./my_folder/current_date_time.txt","utf-8",function(err,data){
    if(err)throw err;
    console.log(data);
})
fs.readdir("./",function(err,files){
    if(err) throw err;
    files.forEach(file => {
        console.log(file);
    });
    
})






app.listen(3001)