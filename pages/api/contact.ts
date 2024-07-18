import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactRequest extends NextApiRequest {
  body: {
    name: string;
    email: string;
    message: string;
  };
}

export default function handler(req: ContactRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'name, email, ve message alanları zorunlu.' });
    }

    setTimeout(() => {
      res.status(200).json({ success: true, message: 'Mesaj gönderildi.' });
    }, 200);
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
