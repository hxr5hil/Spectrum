import type { NextApiRequest, NextApiResponse } from 'next';
import articles from '../../data/articles.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const critical = articles.filter((a) => a.Severity === 'Critical');
  res.status(200).json({
    status: 'success',
    total_critical: critical.length,
    alerts: critical.slice(0, 30),
  });
}
