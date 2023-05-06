import type { NextApiRequest, NextApiResponse } from 'next'
import { uuid } from 'uuidv4';

import { client } from '../../utils/client';
import cors from '../../lib/cors';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Run the cors middleware
    await cors(req, res);

    if(req.method === 'PUT') {
        const { userId, postId, like } = req.body;

        const data = like ? await client
            .patch(postId)
            .setIfMissing({ likes: [] })
            .insert('after', 'likes[-1]', [
                {
                    _key: uuid(),
                    _ref: userId,
                }
            ])
            .commit()
        : await client
            .patch(postId)
            .unset([`likes[_ref=="${userId}"]`])
            .commit();
        
        res.status(200).json(data);
    }
}

