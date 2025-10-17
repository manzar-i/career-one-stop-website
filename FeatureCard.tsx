
export default function FeatureCard({ title, desc }:{title:string, desc:string}){
  return (
    <div className="card p-5">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </div>
  )
}
