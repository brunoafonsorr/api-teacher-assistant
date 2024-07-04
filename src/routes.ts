import express from 'express';
import db from './database/connections';
import StudentsController from './controllers/StudentsController';

const routes = express.Router();
const studentsController = new StudentsController();

interface GradeData{
  value: string,
  description: string
};

routes.get('/prof', (req, res) => {
  
})
routes.post('/prof', (req, res) => {
  
})

routes.get('/students', studentsController.index)
routes.post('/students', studentsController.create)

// routes.post('/grades', async (req, res) => {
//   const {
//     value,
//     description
//   } = req.body;

//   await db('grades').insert({
//     value,
//     description
//   })

//   return res.status(200).json({ message: 'success' })
// })

export default routes