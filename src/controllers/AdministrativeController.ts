import { Request, Response } from "express";

import db from "../database/connections";

interface ModuleItem {
  currentModule: number,
  totalModule: number
}

export default class AdministrativeController {
  async index(req: Request, res: Response) {

    res.json({ message: "Administrative Controller" })
  }

  async createGrades(req: Request, res: Response) {
    const {
      value,
      description
    } = req.body;

    const trx = await db.transaction();

    try {
      await trx('grades').insert({
        value,
        description
      })

      await trx.commit();

      return res.status(201).send()
    } catch (error) {
      console.log(error);
      await trx.rollback();

      return res.status(400).json({
        error: 'Unexpected error while creating new grade'
      })
    }
  }

  async createSubject(req: Request, res: Response) {
    const {
      name
    } = req.body;

    const trx = await db.transaction();

    try {
      await trx('subjects').insert({
        name
      })

      await trx.commit();

      return res.status(201).send()
    } catch (error) {
      console.log(error);
      await trx.rollback();

      return res.status(400).json({
        error: 'Unexpected error while creating new subject'
      })
    }
  }

  async createCourses(req: Request, res: Response) {
    const {
      name
    } = req.body;

    const trx = await db.transaction();

    try {
      await trx('courses').insert({
        name
      })

      await trx.commit();

      return res.status(201).send()
    } catch (error) {
      console.log(error);
      await trx.rollback();

      return res.status(400).json({
        error: 'Unexpected error while creating new course'
      })
    }
  }

  async createCoursesSubjects(req: Request, res: Response) {
    const {
      name,
      course_id,
      subject_id
    } = req.body;

    const trx = await db.transaction();

    try {
      await trx('courses_subjects').insert({
        name,
        course_id,
        subject_id
      })

      await trx.commit();

      return res.status(201).send()
    } catch (error) {
      console.log(error);
      await trx.rollback();

      return res.status(400).json({
        error: 'Unexpected error while creating new course_subject'
      })
    }
  }

  async createStudies(req: Request, res: Response) {
    const {
      student_id,
      course_id,
      periods
    } = req.body;

    const trx = await db.transaction();

    try {
      const studies = (moduleItem: ModuleItem) => {
        return {
          student_id,
          course_id,
          currentModule: moduleItem.currentModule,
          totalModule: moduleItem.totalModule
        }
      }

      await trx('studies').insert(studies(periods))

      await trx.commit();

      return res.status(201).send()
    } catch (error) {
      console.log(error);
      await trx.rollback();

      return res.status(400).json({
        error: 'Unexpected error while creating new studies'
      })
    }
  }
}
