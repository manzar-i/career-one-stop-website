import Section from 'components/Section'
import Layout from 'components/Layout'
import { useState } from 'react'
export default function Partner(){
  const [msg, setMsg] = useState('')
  async function submit(e:React.FormEvent){
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const body = Object.fromEntries(new FormData(form).entries())
    const r = await fetch('/api/partner', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) })
    if(r.ok){ setMsg('Thanks! We will reach out soon.')} else { setMsg('Something went wrong. Try again.') }
  }
  return (
    <Layout>
      <Section>
        <h1 className="text-4xl md:text-5xl font-extrabold">Partner Program</h1>
        <p className="mt-3 text-slate-600 max-w-prose">Small recruitment agencies and freelancers can earn referral bonuses for each successful placement (talent) and each client onboarded via your referral.</p>
      </Section>
      <Section className="bg-slate-50">
        <h2 className="text-2xl font-bold mb-4">How it works</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
          <li className="card p-4">Register as a partner to get a unique referral ID.</li>
          <li className="card p-4">Refer candidates and companies; we track outcomes.</li>
          <li className="card p-4">Earn referral bonus on candidate hires.</li>
          <li className="card p-4">Earn bonus when a client signs and posts roles.</li>
        </ul>
      </Section>
      <Section>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-5">
            <h3 className="text-xl font-semibold mb-2">Apply to the program</h3>
            <form onSubmit={submit} className="space-y-3">
              <input required name="name" className="w-full rounded-2xl border border-slate-300 px-3 py-2" placeholder="Your name" />
              <input required name="email" type="email" className="w-full rounded-2xl border border-slate-300 px-3 py-2" placeholder="Work email" />
              <input name="company" className="w-full rounded-2xl border border-slate-300 px-3 py-2" placeholder="Agency / Freelancer" />
              <button className="btn btn-primary rounded-2xl" type="submit">Submit</button>
            </form>
            {msg && <p className="mt-3 text-sm text-slate-600">{msg}</p>}
          </div>
          <div className="card p-5">
            <h3 className="text-xl font-semibold mb-2">Payouts & terms</h3>
            <p className="text-slate-600">Bonuses are issued upon successful placement (talent) and upon client onboarding and role posting. Final amounts depend on role, geography, and agreement. Misrepresentation or spam violates terms.</p>
          </div>
        </div>
      </Section>
    </Layout>
  )
}