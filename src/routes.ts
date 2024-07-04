import express from 'express';
import db from './database/connections';
import StudentsController from './controllers/StudentsController';
import TeachersController from './controllers/TeachersController';

const routes = express.Router();
const studentsController = new StudentsController();
const teachersController = new TeachersController();

interface GradeData{
  value: string,
  description: string
};

routes.get('/teachers', teachersController.index)
routes.post('/teachers', teachersController.create)

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