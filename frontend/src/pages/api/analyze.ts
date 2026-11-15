import type { NextApiRequest, NextApiResponse } from 'next';

const SECTORS = [
  { name: 'Technology & Infrastructure', cat: 'Technology', code: 'TECH', email: 'tech.lead@spectrum.ai' },
  { name: 'Finance & Enterprise', cat: 'Business', code: 'FIN', email: 'finance.lead@spectrum.ai' },
  { name: 'Governance & Public Policy', cat: 'Politics', code: 'GOV', email: 'policy.lead@spectrum.ai' },
  { name: 'Legal & Constitutional Affairs', cat: 'Judiciary', code: 'LAW', email: 'legal.lead@spectrum.ai' },
  { name: 'Science & Advanced Research', cat: 'Science', code: 'SCI', email: 'science.lead@spectrum.ai' },
  { name: 'Internal Security & Oversight', cat: 'Crime', code: 'SEC', email: 'security.lead@spectrum.ai' },
  { name: 'Global Affairs & Diplomacy', cat: 'International', code: 'GLOBAL', email: 'global.lead@spectrum.ai' },
  { name: 'Sports & Athletics', cat: 'Sports', code: 'MYAS', email: 'sports.lead@spectrum.ai' },
  { name: 'Media & Communications', cat: 'Entertainment', code: 'MEDIA', email: 'media.lead@spectrum.ai' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { title = '', body = '' } = req.body || {};
  const full = `${title} ${body}`.toLowerCase();

  let sector = SECTORS[0];
  if (full.includes('court') || full.includes('law') || full.includes('judge') || full.includes('bail') || full.includes('petition')) {
    sector = SECTORS[3];
  } else if (full.includes('bank') || full.includes('market') || full.includes('gdp') || full.includes('economy') || full.includes('rupee')) {
    sector = SECTORS[1];
  } else if (full.includes('police') || full.includes('arrest') || full.includes('crime') || full.includes('murder') || full.includes('fraud')) {
    sector = SECTORS[5];
  } else if (full.includes('election') || full.includes('party') || full.includes('minister') || full.includes('cabinet') || full.includes('bjp') || full.includes('congress')) {
    sector = SECTORS[2];
  } else if (full.includes('ai') || full.includes('tech') || full.includes('software') || full.includes('digital') || full.includes('chip') || full.includes('semiconductor')) {
    sector = SECTORS[0];
  } else if (full.includes('space') || full.includes('isro') || full.includes('nasa') || full.includes('research') || full.includes('scientist')) {
    sector = SECTORS[4];
  } else if (full.includes('match') || full.includes('cricket') || full.includes('cup') || full.includes('player') || full.includes('olympic')) {
    sector = SECTORS[7];
  }

  const negWords = ['crisis', 'corruption', 'scam', 'failure', 'death', 'accident', 'protest', 'delay', 'shortage', 'negligence', 'derail', 'loss'];
  const posWords = ['success', 'record', 'growth', 'boost', 'inaugurate', 'award', 'praise', 'launch', 'approved', 'advance', 'win'];

  const nHits = negWords.filter((w) => full.includes(w)).length;
  const pHits = posWords.filter((w) => full.includes(w)).length;

  let pos = 0.5, neg = 0.2, neu = 0.3, sentiment = 'positive';
  if (nHits > pHits) {
    neg = Math.min(0.92, 0.52 + nHits * 0.1);
    pos = parseFloat(((1.0 - neg) * 0.5).toFixed(2));
    neu = parseFloat((1.0 - neg - pos).toFixed(2));
    sentiment = 'negative';
  } else if (pHits > nHits) {
    pos = Math.min(0.94, 0.55 + pHits * 0.08);
    neg = parseFloat(((1.0 - pos) * 0.4).toFixed(2));
    neu = parseFloat((1.0 - pos - neg).toFixed(2));
    sentiment = 'positive';
  } else {
    neu = 0.65; pos = 0.20; neg = 0.15;
    sentiment = 'neutral';
  }

  const severity = neg >= 0.50 ? 'Critical' : 'Normal';

  res.status(200).json({
    status: 'success',
    predicted_category: sector.cat,
    predicted_ministry: sector.name,
    ministry_code: sector.code,
    nodal_officer: sector.email,
    sentiment,
    sentiment_score: `${pos.toFixed(2)} ${neg.toFixed(2)} ${neu.toFixed(2)}`,
    scores: { positive: pos, negative: neg, neutral: neu },
    severity,
    ai_summary: `Coverage highlights developments in ${sector.name}. Sentiment evaluated as ${sentiment.toUpperCase()} (${Math.round(Math.max(pos, neg, neu) * 100)}% confidence).`,
    recommended_action: severity === 'Critical' ? 'Immediate Public Clarification Recommended' : 'Routine Media Monitoring',
  });
}
