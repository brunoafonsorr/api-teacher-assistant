import { Request, Response } from 'express';

import db from '../database/connections';

export default class StudentsController {
  async index(req: Request, res: Response) {
    
    return res.json({ message: 'Students' })
  }

  async create(req: Request, res: Response) {
    const {
      name,
      avatar,
      password
    } = req.body;

    const trx = await db.transaction();

    try {
      await trx('students').insert({
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
        error: 'Unexpected error while creating new student'
      })
    }
  }
}