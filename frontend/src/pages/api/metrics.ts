import type { NextApiRequest, NextApiResponse } from 'next';
import articles from '../../data/articles.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const total = articles.length;
  const positive = articles.filter((a) => a.Sentiment === 'positive').length;
  const negative = articles.filter((a) => a.Sentiment === 'negative').length;
  const neutral = articles.filter((a) => a.Sentiment === 'neutral').length;
  const critical = articles.filter((a) => a.Severity === 'Critical').length;

  const breakdown: Record<string, any> = {};

  articles.forEach((a) => {
    const key = a.Ministry || a.Category;
    if (!breakdown[key]) {
      breakdown[key] = {
        code: a.MinistryCode || a.Category.slice(0, 3).toUpperCase(),
        category: a.Category,
        total: 0,
        positive: 0,
        negative: 0,
        neutral: 0,
        negative_ratio: 0,
      };
    }
    breakdown[key].total += 1;
    if (a.Sentiment === 'positive') breakdown[key].positive += 1;
    if (a.Sentiment === 'negative') breakdown[key].negative += 1;
    if (a.Sentiment === 'neutral') breakdown[key].neutral += 1;
  });

  Object.values(breakdown).forEach((b: any) => {
    b.negative_ratio = b.total > 0 ? Math.round((b.negative / b.total) * 100) : 0;
  });

  res.status(200).json({
    status: 'success',
    total_articles: total,
    sentiment_distribution: {
      positive,
      positive_pct: Math.round((positive / total) * 100),
      negative,
      negative_pct: Math.round((negative / total) * 100),
      neutral,
      neutral_pct: Math.round((neutral / total) * 100),
    },
    critical_alerts_count: critical,
    ministries_monitored: Object.keys(breakdown).length,
    ministry_breakdown: breakdown,
  });
}
