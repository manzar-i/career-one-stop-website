import Section from 'components/Section'
import Layout from 'components/Layout'
import { useState } from 'react'
export default function Register(){
  const [ok, setOk] = useState(false)
  async function submit(e:React.FormEvent){
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const body = Object.fromEntries(new FormData(form).entries())
    const r = await fetch('/api/register', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) })
    setOk(r.ok)
  }
  return (
    <Layout>
      <Section>
        <h1 className="text-4xl md:text-5xl font-extrabold">Create Your Candidate Profile</h1>
        <p className="mt-3 text-slate-600 max-w-prose">We’ll match you with the best-fit roles. Client names are hidden until interview stages.</p>
      </Section>
      <Section className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-6">
          <form onSubmit={submit} className="card p-5 space-y-3">
            <input name="name" required className="w-full rounded-2xl border border-slate-300 px-3 py-2" placeholder="Full name" />
            <input name="email" required type="email" className="w-full rounded-2xl border border-slate-300 px-3 py-2" placeholder="Email" />
            <input name="phone" className="w-full rounded-2xl border border-slate-300 px-3 py-2" placeholder="Phone (optional)" />
            <input name="role" className="w-full rounded-2xl border border-slate-300 px-3 py-2" placeholder="Target role (e.g., SDR, Designer)" />
            <input name="location" className="w-full rounded-2xl border border-slate-300 px-3 py-2" placeholder="Location / Remote" />
            <textarea name="skills" className="w-full rounded-2xl border border-slate-300 px-3 py-2 min-h-24" placeholder="Key skills & experience" />
            <input name="linkedin" className="w-full rounded-2xl border border-slate-300 px-3 py-2" placeholder="LinkedIn URL" />
            <input name="resume" className="w-full rounded-2xl border border-slate-300 px-3 py-2" placeholder="Resume link (Drive, etc.)" />
            <button className="btn btn-primary rounded-2xl" type="submit">Submit Profile</button>
            {ok && <p className="text-sm text-slate-600">Thanks! We’ll review and reach out.</p>}
          </form>
          <div className="card p-5">
            <h3 className="text-xl font-semibold mb-2">How matching works</h3>
            <p className="text-slate-600">We use an internal pipeline to match you to active roles based on skills, outcomes and availability. We keep client names confidential until interview scheduling.</p>
          </div>
        </div>
      </Section>
    </Layout>
  )
}