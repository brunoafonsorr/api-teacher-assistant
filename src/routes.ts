import express from 'express';
import db from './database/connections';
import StudentsController from './controllers/StudentsController';
import TeachersController from './controllers/TeachersController';
import AdministrativeController from './controllers/AdministrativeController';

const routes = express.Router();
const studentsController = new StudentsController();
const teachersController = new TeachersController();
const administrativeController = new AdministrativeController();

routes.get('/teachers', teachersController.index)
routes.post('/teachers', teachersController.create)
routes.post('/classes', teachersController.createClasses)
routes.post('/classes-students', teachersController.createClassesStudents)

routes.get('/students', studentsController.index)
routes.post('/students', studentsController.create)

routes.post('/grades', administrativeController.createGrades)
routes.post('/subjects', administrativeController.createSubject)
routes.post('/courses', administrativeController.createCourses)
routes.post('/courses-subjects', administrativeController.createCoursesSubjects)
routes.post('/studies', administrativeController.createStudies)

export default routes