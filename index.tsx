import Section from 'components/Section'
import Layout from 'components/Layout'
import Link from 'next/link'
export default function Features(){
  return (
    <Layout>
      <Section>
        <h1 className="text-4xl md:text-5xl font-extrabold">Features</h1>
        <p className="mt-3 text-slate-600 max-w-prose">Deep dives into our capabilities. The ATS & pipeline are internal-only (not exposed here).</p>
        <ul className="grid md:grid-cols-3 gap-4 mt-6">
          <li className="card p-4"><h3 className="font-semibold mb-2">AI Recommendations</h3><p className="text-slate-600 mb-3">Match talent to roles based on skills, outcomes and context.</p><Link href="/features/ai-recommendations" className="text-brand-700 underline">Learn more →</Link></li>
          <li className="card p-4"><h3 className="font-semibold mb-2">Hiring Challenges</h3><p className="text-slate-600 mb-3">Short, role-specific tasks to validate ability and reduce interviews.</p><Link href="/features/hiring-challenges" className="text-brand-700 underline">Learn more →</Link></li>
          <li className="card p-4"><h3 className="font-semibold mb-2">JD Writer (Free)</h3><p className="text-slate-600 mb-3">Generate structured, bias-aware job descriptions quickly.</p><Link href="/features/jd-writer" className="text-brand-700 underline">Try it →</Link></li>
        </ul>
      </Section>
    </Layout>
  )
}