import app from "./app.js"

app.listen(process.env.PORT,()=>{
  console.log("Connected to server "+process.env.PORT);
});
