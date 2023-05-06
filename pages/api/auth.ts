import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../utils/client';
import cors from '../../lib/cors';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Run the cors middleware
  await cors(req, res);
  
  if(req.method === 'POST') {

    const user = req.body;

    client.createIfNotExists(user)
        .then(() => { res.status(200).json("Login success") })
    
  }
}
