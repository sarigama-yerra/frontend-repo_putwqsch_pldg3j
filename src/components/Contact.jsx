import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // Simulate submit for now
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Thanks — we will reach out shortly!')
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Talk to our team</h2>
          <p className="mt-3 text-slate-700">Tell us about your desk and we will tailor a demo.</p>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Full name" className="rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input required type="email" placeholder="Work email" className="rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input placeholder="Company" className="rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input placeholder="Role" className="rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <textarea placeholder="What are you looking to build?" rows="4" className="sm:col-span-2 rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="sm:col-span-2 rounded-lg bg-slate-900 text-white py-2 font-medium hover:bg-slate-800">Request demo</button>
              {status && <p className="sm:col-span-2 text-sm text-emerald-700">{status}</p>}
            </form>
          </div>

          <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-6 shadow-sm">
            <p className="text-sm text-slate-700">Secure by design</p>
            <ul className="mt-3 text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>Data encrypted at rest and in transit</li>
              <li>Role-based access control</li>
              <li>Granular audit logs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
