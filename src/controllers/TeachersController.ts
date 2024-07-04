import { Request, Response } from "express";

import db from "../database/connections";

export default class TeachersController {
  async index(req: Request, res: Response) {

    return res.json({ message: 'Teacher' });
  }

  async create(req: Request, res: Response) {
    const {
      name,
      avatar,
      password
    } = req.body;

    const trx = await db.transaction();

    try {
      await trx('teachers').insert({
        name,
        avatar,
        password
      })

      await trx.commit();

      return res.status(201).send();
    } catch (error) {
      console.log(error);
      await trx.rollback();

      return res.status(400).json({
        error: 'Unexpected error while creating new teacher'
      })
    }
  }

  async createClasses(req: Request, res: Response) {
    const {
      description,
      content,
      teacher_id,
      curse_subject_id
    } = req.body;

    const trx = await db.transaction();

    try {
      await trx('teachers').insert({
        description,
        content,
        teacher_id,
        curse_subject_id
      })

      await trx.commit();

      return res.status(201).send();
    } catch (error) {
      console.log(error);
      await trx.rollback();

      return res.status(400).json({
        error: 'Unexpected error while creating new class'
      })
    }
  }
}