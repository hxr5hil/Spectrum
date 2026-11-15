import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Fetch live RSS feed from Indian Express
    const rssRes = await fetch('https://indianexpress.com/feed/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (!rssRes.ok) {
      throw new Error(`Failed to fetch RSS: ${rssRes.statusText}`);
    }

    const xmlText = await rssRes.text();

    // Parse RSS items using Regex (zero-dependency for Vercel edge/serverless)
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const items: Array<{ title: string; link: string; description: string; pubDate: string }> = [];

    let match;
    while ((match = itemRegex.exec(xmlText)) !== null && items.length < 15) {
      const itemContent = match[1];
      const titleMatch = itemContent.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) || itemContent.match(/<title>([\s\S]*?)<\/title>/);
      const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/);
      const descMatch = itemContent.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || itemContent.match(/<description>([\s\S]*?)<\/description>/);
      const pubDateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/);

      const title = titleMatch ? titleMatch[1].trim() : '';
      const link = linkMatch ? linkMatch[1].trim() : '';
      let desc = descMatch ? descMatch[1].replace(/<[^>]+>/g, '').trim() : '';
      const pubDate = pubDateMatch ? pubDateMatch[1].trim() : new Date().toLocaleDateString();

      if (title && link) {
        items.push({ title, link, description: desc || title, pubDate });
      }
    }

    // Classify category and sentiment for each live item
    const categories = ['Politics', 'Technology', 'Business', 'Judiciary', 'Science', 'Sports', 'International'];

    const newArticles = items.map((item, idx) => {
      const lower = (item.title + ' ' + item.description).toLowerCase();
      let category = 'Technology';

      if (lower.includes('court') || lower.includes('judge') || lower.includes('law') || lower.includes('verdict')) {
        category = 'Judiciary';
      } else if (lower.includes('bjp') || lower.includes('congress') || lower.includes('minister') || lower.includes('election') || lower.includes('modi')) {
        category = 'Politics';
      } else if (lower.includes('stock') || lower.includes('market') || lower.includes('economy') || lower.includes('bank') || lower.includes('gdp')) {
        category = 'Business';
      } else if (lower.includes('cricket') || lower.includes('match') || lower.includes('cup') || lower.includes('tournament')) {
        category = 'Sports';
      } else if (lower.includes('isro') || lower.includes('nasa') || lower.includes('space') || lower.includes('ai') || lower.includes('chip')) {
        category = 'Science';
      } else if (lower.includes('us') || lower.includes('china') || lower.includes('russia') || lower.includes('war') || lower.includes('global')) {
        category = 'International';
      }

      // Basic sentiment polarity
      let sentiment = 'neutral';
      let scoreStr = '0.40 0.30 0.30';
      if (lower.includes('death') || lower.includes('crash') || lower.includes('scam') || lower.includes('derail') || lower.includes('killed') || lower.includes('loss') || lower.includes('crisis')) {
        sentiment = 'negative';
        scoreStr = '0.05 0.85 0.10';
      } else if (lower.includes('win') || lower.includes('success') || lower.includes('launch') || lower.includes('growth') || lower.includes('boost') || lower.includes('cleared')) {
        sentiment = 'positive';
        scoreStr = '0.85 0.05 0.10';
      }

      return {
        id: Date.now() + idx,
        Title: item.title,
        Heading: item.title,
        Body: item.description,
        Category: category,
        Ministry: `${category} Oversight`,
        MinistryCode: category.substring(0, 3).toUpperCase(),
        NodalOfficer: `${category.toLowerCase()}.lead@spectrum.ai`,
        URL: item.link,
        Sentiment: sentiment,
        Sentiment_Score: scoreStr,
        Severity: sentiment === 'negative' ? 'Critical' : 'Normal',
        Source: 'Indian Express Live',
        Language: 'English',
        PublishedAt: new Date(item.pubDate).toISOString().split('T')[0] || 'Today',
        ReadTime: '2 min',
      };
    });

    return res.status(200).json({
      status: 'success',
      count: newArticles.length,
      articles: newArticles,
    });
  } catch (error: any) {
    console.error('Error fetching live RSS:', error);
    return res.status(500).json({ status: 'error', message: error.message || 'Failed to fetch live RSS' });
  }
}
