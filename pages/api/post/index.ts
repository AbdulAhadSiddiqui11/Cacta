import type { NextApiRequest, NextApiResponse } from 'next'
import { allPostsQuery } from '../../../utils/queries'
import { client } from '../../../utils/client';
import cors from '../../../lib/cors';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Run the cors middleware
  await cors(req, res);
  
  if(req.method === 'GET') {
    const query = allPostsQuery();

    const data = await client.fetch(query);
    
    res.status(200).json(data);
  } else if(req.method === 'POST') {

    const document = req.body;

    client.create(document)
    .then(() => res.status(201).json('Video posted successfully'))
    .catch((err) => res.status(500).json('Error posting video'));
  }
}
