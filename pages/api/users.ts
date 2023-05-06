import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/client';

import { allUsersQuery } from '../../utils/queries';
import cors from '../../lib/cors';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Run the cors middleware
  await cors(req, res);
  
  if(req.method === 'GET') {
    const data = await client.fetch(allUsersQuery());
    data ? res.status(200).json(data): res.json([]);   
  }
}
