import type { NextApiRequest, NextApiResponse } from 'next'

import { topicPostsQuery } from '../../../utils/queries';
import { client } from '../../../utils/client';
import cors from '../../../lib/cors';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Run the cors middleware
  await cors(req, res);

  if(req.method === 'GET') {
    const { topic }: any = req.query;
    
    const videosQuery = topicPostsQuery(topic);

    const videos = await client.fetch(videosQuery);

    res.status(200).json(videos);
  }
}
