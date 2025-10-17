
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ ok:false, error:'Method not allowed' })
  try {
    const payload = req.body || {}
    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.TO_EMAIL
    if (apiKey && to) {
      const resp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
        body: JSON.stringify({
          from: 'Career One Stop <noreply@careeronestop.in>',
          to: [to],
          subject: 'New Partner Application',
          html: `<pre>${JSON.stringify(payload, null, 2)}</pre>`
        })
      })
      if (!resp.ok) console.warn('Resend failed', await resp.text())
    } else {
      console.log('Partner application:', payload)
    }
    return res.status(200).json({ ok: true })
  } catch (e:any) {
    console.error(e)
    return res.status(500).json({ ok:false, error: e?.message || 'error' })
  }
}
