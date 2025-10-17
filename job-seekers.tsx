import Section from 'components/Section'
import Layout from 'components/Layout'
import Link from 'next/link'
export default function JobSeekers(){
  return (
    <Layout>
      <Section>
        <h1 className="text-4xl md:text-5xl font-extrabold">For Job Seekers</h1>
        <p className="mt-3 text-slate-600 max-w-prose">Interview preparation, LinkedIn optimization, resume building, and mock interviews — designed to help you get hired faster.</p>
        <div className="mt-6 flex gap-3">
          <Link className="btn btn-primary rounded-2xl" href="/register">Create Profile</Link>
          <a className="btn btn-outline rounded-2xl" href="https://calendly.com/" target="_blank">Free Discovery Call</a>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <h2 className="text-2xl font-bold mb-4">How we help</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
          {["1:1 resume critique + rewrite","LinkedIn profile optimization","Interview prep & mock interviews","Targeted role matching via AI recommendations"].map((t,i)=>(
            <li key={i} className="card p-4">{t}</li>
          ))}
        </ul>
      </Section>
    </Layout>
  )
}