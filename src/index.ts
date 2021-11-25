import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_,res) => {
  res.send('Hola semuanya!');
});

app.listen(port, ()=>{  
  console.log(`server is listening on ${port}`);
})
