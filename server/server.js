import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router  from './routes/taskRoutes.js';
import cors from 'cors';


dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/tasks', router);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
}); 