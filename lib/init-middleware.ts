/* 
Lib and all its contents/middleware are not utilzed for cors anymore
We will be using the cors headers from nwxt.config.js instead
*/

import { NextApiRequest, NextApiResponse } from 'next';

type Middleware = (req: NextApiRequest, res: NextApiResponse, callback: (result: any) => void) => void;

const initMiddleware = (middleware: Middleware) => {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
};

export default initMiddleware;
