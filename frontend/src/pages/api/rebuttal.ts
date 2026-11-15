import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { title = 'Media Notice', ministry = 'General Media Affairs' } = req.body || {};

  const draft = (
    `OFFICIAL MEDIA CLARIFICATION - ${ministry.toUpperCase()}\n` +
    `Subject: Clarification on media reports regarding "${title}"\n\n` +
    `The organization has taken formal cognizance of recent reporting regarding the matter cited above. ` +
    `The claims presented are factually unverified and omit operational interventions currently deployed.\n\n` +
    `Key Facts:\n` +
    `1. Quality audits and standard operating oversight have been actively escalated.\n` +
    `2. Verification teams are monitoring technical compliance in real time.\n` +
    `3. Complete transparency and prompt resolution remain our foremost commitment.\n\n` +
    `For verified media bulletins and verified communications, please consult the official press desk.`
  );

  res.status(200).json({
    status: 'success',
    title: `Clarification: ${title}`,
    ministry,
    rebuttal_draft: draft,
    issued_by: 'Spectrum Communications Desk',
  });
}
