import type { NextApiRequest, NextApiResponse } from 'next';

const VIDEOS = [
  {
    id: "vid-1",
    title: "Rail Infrastructure Safety Audit: Track Signal Modernization Committee Review",
    channel: "National Broadcast",
    duration: "08:42",
    videoUrl: "https://www.youtube.com/watch?v=9No-FiEInLA",
    category: "Technology",
    ministry: "Technology & Infrastructure",
    sentiment: "positive",
    sentiment_score: "0.78 0.12 0.10",
    summary: "Audits reveal 92% compliance to digital automatic signaling systems across key commercial corridors.",
    keyMoments: [
      { time: "01:15", topic: "Automatic signaling deployment status", sentiment: "positive" },
      { time: "04:30", topic: "Speed enhancement test runs", sentiment: "positive" },
      { time: "07:10", topic: "Track maintenance manpower checks", sentiment: "neutral" }
    ]
  },
  {
    id: "vid-2",
    title: "Rural Primary Healthcare Facility Audit: Supply Deficit Reality Check",
    channel: "Investigative Media",
    duration: "12:15",
    videoUrl: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
    category: "Politics",
    ministry: "Public Health & Welfare",
    sentiment: "negative",
    sentiment_score: "0.15 0.74 0.11",
    summary: "Field report highlighting essential medicine stockouts and infrastructure deficits in regional clinics.",
    keyMoments: [
      { time: "02:00", topic: "Regional health center inspection", sentiment: "negative" },
      { time: "06:45", topic: "Beneficiary interview on delays", sentiment: "negative" },
      { time: "10:30", topic: "Chief medical director clarification", sentiment: "neutral" }
    ]
  },
  {
    id: "vid-3",
    title: "National Semiconductor Expansion: New Microchip Fab Facility Commissioned",
    channel: "Tech Wire",
    duration: "05:20",
    videoUrl: "https://www.youtube.com/watch?v=y881t8ilMyc",
    category: "Business",
    ministry: "Finance & Industry",
    sentiment: "positive",
    sentiment_score: "0.89 0.04 0.07",
    summary: "Consortium clears capital incentives for advanced microchip fabrication plants.",
    keyMoments: [
      { time: "00:45", topic: "Capital incentive allocation", sentiment: "positive" },
      { time: "02:30", topic: "Job creation estimates (40,000+)", sentiment: "positive" }
    ]
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    status: 'success',
    videos: VIDEOS,
  });
}
