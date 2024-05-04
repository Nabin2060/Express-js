
    //  fist day and second day
// require("dotenv").config();
// const express=require("express");

// const app = express();
// const PORT=Number(process.env.PORT)

// app.use(express.json());

// app.get("/",(req,res)=>{
    
//     res.json({ msg:"get js one"});
// });


// app.post("/:id",(req,res)=>{
//     //client send the data
//     console.log({query:req.query,params:req.params,body:req.body});
//     res.json({ msg:"post hello nabin k"});
// });

// app.put("/:id",(req,res)=>{
//     //client send the data
//     res.json({ msg:"put hello nabin"});
// });

// app.patch("/:id",(req,res)=>{
//     //client send the data
//     res.json({ msg:"patch hello nabin"});
// });

// app.delete("/:id",(req,res)=>{
//     //client send the data
//     res.json({ msg:"delete hello nabin"});
// });

// // app.listen(PORT,()=>{
// //     console.log(`applition is running on port ${PORT} `);
// // });

// app.listen(PORT,()=>{
//     console.log(`application is running... ${PORT}`);
// })

      
            //   Day-3
    
require("dotenv").config();
const express=require("express");

const indexRouter=require("/day_3_router")

const app=express();
const PORT=Number(process.env.PORT);

app.use(express.json());

app.listen(PORT,()=>{
    console.log(`application running...${PORT}`);
})
