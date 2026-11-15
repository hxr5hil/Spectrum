import type { NextApiRequest, NextApiResponse } from 'next';

const VIDEOS = [
  {
    id: "vid-1",
    title: "Rail Infrastructure Safety Audit: Automatic Train Protection (Kavach) Review",
    channel: "Indian Railways Official",
    duration: "08:42",
    videoUrl: "https://www.youtube.com/watch?v=RUorVI0aWSg",
    category: "Technology",
    ministry: "Technology & Infrastructure",
    sentiment: "positive",
    sentiment_score: "0.78 0.12 0.10",
    summary: "Comprehensive technical audit of Kavach Automatic Train Protection: RFID track equipment, station radio systems, and cab signaling telemetry.",
    keyMoments: [
      { time: "01:15", topic: "Automatic signaling deployment status", sentiment: "positive" },
      { time: "04:30", topic: "Speed enhancement test runs", sentiment: "positive" },
      { time: "07:10", topic: "Track maintenance telemetry checks", sentiment: "neutral" }
    ]
  },
  {
    id: "vid-2",
    title: "National Space Exploration: Moon Mission Soft Landing Telecast",
    channel: "ISRO Strategic Science Broadcast",
    duration: "12:15",
    videoUrl: "https://www.youtube.com/watch?v=DLA_64yz8Ss",
    category: "Science",
    ministry: "Science & Technology",
    sentiment: "positive",
    sentiment_score: "0.95 0.02 0.03",
    summary: "Live telemetry and mission operations monitoring lunar descent phase, thruster burns, and precision landing verification.",
    keyMoments: [
      { time: "02:00", topic: "Rough braking phase initiation", sentiment: "positive" },
      { time: "06:45", topic: "Attitude hold and optical hazard detection", sentiment: "positive" },
      { time: "10:30", topic: "Final vertical descent and touchdown", sentiment: "positive" }
    ]
  },
  {
    id: "vid-3",
    title: "Vande Bharat Express Speed Trials & High-Speed Network Expansion",
    channel: "National Infrastructure Review",
    duration: "05:20",
    videoUrl: "https://www.youtube.com/watch?v=RUorVI0aWSg",
    category: "Business",
    ministry: "Finance & Industry",
    sentiment: "positive",
    sentiment_score: "0.89 0.04 0.07",
    summary: "Evaluation of commercial operations, rolling stock reliability, and track upgrade investments across golden quadrilateral trunk lines.",
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
