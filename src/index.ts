import express from 'express';
import { validator } from './middleware/validator';

const app = express();
const port = 3000;


app.get('/',express.json,validator, (req,res) => {
  const {name} = req.query
  res.send(`Hola apa kabar, ${name}?`);
});

app.listen(port, ()=>{  
  console.log(`server is listening on ${port}`);
})
