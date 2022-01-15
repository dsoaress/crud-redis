import { NextApiRequest, NextApiResponse } from 'next'

import { createUser, getUsers, searchUsers } from '../../database/redis'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const q = req.query.q as string | undefined
      let users = []

      if (q) users = await searchUsers(q)
      else users = await getUsers()

      res.status(200).json(users)
      break
    case 'POST':
      const user = await createUser(req.body)
      res.status(201).json(user)
      break
    default:
      res.status(405).end()
  }
}
