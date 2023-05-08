// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import Cookies from 'cookies';
const proxy = httpProxy.createProxyServer();
export const config = {
  api: {
    bodyParser: false,
  },
};
export default function handler(req: NextApiRequest, res: NextApiResponse<{ message: string }>) {
  //   console.log('🚀 ~ file: login.ts:12 ~ handler ~ NextApiRequest:');
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'Not supported method' });
  }
  return new Promise((resolve, reject) => {
    req.headers.cookie = '';
    const handleLoginRespone: ProxyResCallback = (proxyRes, req, res) => {
      let body = '';
      proxyRes.on('data', (chunk) => {
        body += chunk;
      });

      proxyRes.on('end', () => {
        try {
          const { accessToken, expiredAt } = JSON.parse(body);

          if (!accessToken) {
            throw new Error();
          }
          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });
          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          });
          (res as NextApiResponse).status(200).json({ message: 'Login success' });
        } catch (error) {
          console.log('🚀 ~ file: login.ts:29 ~ proxyRes.on ~ error:', error);
          (res as NextApiResponse).status(500).json({ message: 'Có lỗi xảy ra' });
        }
        // resolve(true);
      });
    };
    proxy.once('proxyRes', handleLoginRespone);
    proxy.web(req, res, {
      target: 'https://js-post-api.herokuapp.com',
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
}
