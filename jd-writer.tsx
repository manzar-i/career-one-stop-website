import Section from 'components/Section'
import Layout from 'components/Layout'
import { useState } from 'react'
export default function JDWriter(){
  const [title, setTitle] = useState('')
  const [reqs, setReqs] = useState('')
  const [resp, setResp] = useState('')
  const [out, setOut] = useState('')

  function generate(){
    const jd = `Job Title: ${title || 'Role'}\n\nResponsibilities:\n- ${resp.replace(/\n/g,'\n- ') || 'Define responsibilities'}\n\nRequirements:\n- ${reqs.replace(/\n/g,'\n- ') || 'List required skills'}\n\nBenefits:\n- Competitive compensation\n- Growth opportunities\n- Supportive culture`
    setOut(jd)
  }

  return (
    <Layout>
      <Section>
        <h1 className="text-4xl md:text-5xl font-extrabold">JD Writer (Free)</h1>
        <p className="mt-3 text-slate-600 max-w-prose">Generate a clean, structured job description you can paste into your ATS or share with us.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="card p-5">
            <label className="block text-sm font-medium mb-1">Role Title</label>
            <input className="w-full rounded-2xl border border-slate-300 px-3 py-2 mb-3" value={title} onChange={e=>setTitle(e.target.value)} placeholder="e.g., Sales Development Representative" />
            <label className="block text-sm font-medium mb-1">Responsibilities</label>
            <textarea className="w-full rounded-2xl border border-slate-300 px-3 py-2 min-h-24 mb-3" value={resp} onChange={e=>setResp(e.target.value)} placeholder="Bullet points..." />
            <label className="block text-sm font-medium mb-1">Requirements</label>
            <textarea className="w-full rounded-2xl border border-slate-300 px-3 py-2 min-h-24" value={reqs} onChange={e=>setReqs(e.target.value)} placeholder="Bullet points..." />
            <button onClick={generate} className="btn btn-primary rounded-2xl mt-4">Generate</button>
          </div>
          <div className="card p-5">
            <label className="block text-sm font-medium mb-1">Output</label>
            <textarea readOnly className="w-full rounded-2xl border border-slate-300 px-3 py-2 min-h-64">{out}</textarea>
          </div>
        </div>
      </Section>
    </Layout>
  )
}