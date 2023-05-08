// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import Cookies from 'cookies';

export const config = {
  api: {
    bodyParser: false,
  },
};
export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'Not supported method' });
  }
  try {
    const cookies = new Cookies(req, res);
    cookies.set('access_token');
    res.status(200).json({ message: 'Logout success' });
  } catch (error) {
    res.status(400).json({ message: 'Logout fail' });
  }
}
