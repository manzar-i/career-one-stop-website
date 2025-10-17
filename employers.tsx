import Section from 'components/Section'
import Layout from 'components/Layout'
import Link from 'next/link'
export default function Employers(){
  return (
    <Layout>
      <Section>
        <h1 className="text-4xl md:text-5xl font-extrabold">For Employers</h1>
        <p className="mt-3 text-slate-600 max-w-prose">We deliver curated, interview-ready candidates across roles and locations worldwide (base in India). Pricing depends on your role and requirements.</p>
        <div className="mt-6 flex gap-3">
          <a className="btn btn-primary rounded-2xl" href="https://calendly.com/" target="_blank">Book a Discovery Call</a>
          <Link className="btn btn-outline rounded-2xl" href="/features">Explore Features</Link>
        </div>
      </div></div></Section>

      <Section><div className="bg-slate-50 py-12 md:py-16"><div className="container">
        <h2 className="text-2xl font-bold mb-4">What you get</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
          {["AI-backed shortlists","Skill screens / hiring challenges","Interview scheduling","Custom pricing & SLAs","90-day replacement (when applicable)"].map((t,i)=>(
            <li key={i} className="card p-4">{t}</li>
          ))}
        </ul>
      </Section>
    </Layout>
  )
}