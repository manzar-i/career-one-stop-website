import Section from 'components/Section'
import Layout from 'components/Layout'
export default function AIRecommendations(){
  return (
    <Layout>
      <Section>
        <h1 className="text-4xl md:text-5xl font-extrabold">AI Recommendations</h1>
        <p className="mt-3 text-slate-600 max-w-prose">We use structured signals (skills, tenure, outcomes, portfolio strength, interview feedback) to recommend the best matches. Recruiters can override and annotate recommendations.</p>
      </Section>
    </Layout>
  )
}