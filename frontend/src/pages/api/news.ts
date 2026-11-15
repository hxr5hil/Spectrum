import type { NextApiRequest, NextApiResponse } from 'next';
import articles from '../../data/articles.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const page = parseInt(req.query.page as string || '1');
  const limit = parseInt(req.query.limit as string || '15');
  const category = (req.query.category as string || '').toLowerCase();
  const sentiment = (req.query.sentiment as string || '').toLowerCase();
  const search = (req.query.search as string || '').toLowerCase().trim();

  let filtered = [...articles];

  if (category && category !== 'all') {
    filtered = filtered.filter(
      (a) => a.Category.toLowerCase() === category || a.MinistryCode.toLowerCase() === category
    );
  }

  if (sentiment && sentiment !== 'all') {
    filtered = filtered.filter((a) => a.Sentiment.toLowerCase() === sentiment);
  }

  if (search) {
    filtered = filtered.filter(
      (a) =>
        a.Title.toLowerCase().includes(search) ||
        a.Body.toLowerCase().includes(search) ||
        a.Category.toLowerCase().includes(search)
    );
  }

  const total = filtered.length;
  const start = (page - 1) * limit;
  const end = start + limit;
  const paged = filtered.slice(start, end);

  res.status(200).json({
    status: 'success',
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit) || 1,
    News: paged,
  });
}
