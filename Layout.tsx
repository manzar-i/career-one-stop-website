
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="container">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">C1</div>
            <div className="font-semibold">Career One Stop</div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/job-seekers" className="hover:text-slate-700">Job Seekers</Link>
            <Link href="/employers" className="hover:text-slate-700">Employers</Link>
            <Link href="/features" className="hover:text-slate-700">Features</Link>
            <Link href="/partner" className="hover:text-slate-700">Partner</Link>
            <Link href="/register" className="hover:text-slate-700">Register</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://calendly.com/" target="_blank" rel="noreferrer" className="btn btn-outline rounded-2xl">Book a Call</a>
            <Link href="/register" className="btn btn-primary rounded-2xl">Create Profile</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-white mt-16">
      <div className="container">
        <div className="py-8 grid md:grid-cols-3 gap-6 items-center">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Career One Stop. All rights reserved.</div>
          <div className="flex justify-center gap-4 text-sm">
            <Link href="/privacy" className="hover:text-slate-900">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-900">Terms</Link>
            <a href="https://www.linkedin.com/company/careeronestopp/" target="_blank" className="hover:text-slate-900">LinkedIn</a>
          </div>
          <div className="flex justify-end">
            <a href="mailto:manzar@careeronestop.in" className="text-sm underline">manzar@careeronestop.in</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
