import type { NextApiRequest, NextApiResponse } from 'next'

import { searchPostsQuery } from '../../../utils/queries';
import { client } from '../../../utils/client';
import cors from '../../../lib/cors';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Run the cors middleware
  await cors(req, res);
  
  if(req.method === 'GET') {
    const { searchTerm }: any = req.query;
    
    const videosQuery = searchPostsQuery(searchTerm);

    const videos = await client.fetch(videosQuery);

    res.status(200).json(videos);
  }
}
