import { Request, Response } from "express";

import db from "../database/connections";

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
      await trx('subject').insert({
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
}