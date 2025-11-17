function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-700">Choose a plan that fits your operation. Scale as you grow.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-700">Starter</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">$0</p>
            <p className="text-sm text-slate-600">for sandbox and evaluation</p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>Sandbox API access</li>
              <li>Basic analytics</li>
              <li>Email support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block w-full text-center rounded-lg bg-slate-900 text-white py-2">Get started</a>
          </div>

          <div className="rounded-2xl border-2 border-indigo-500/50 bg-white/80 backdrop-blur p-6 shadow-lg">
            <p className="text-sm font-medium text-indigo-600">Most Popular</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">$499<span className="text-base font-medium text-slate-600">/mo</span></p>
            <p className="text-sm text-slate-600">for active desks</p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>Production API</li>
              <li>Advanced dashboards</li>
              <li>Priority support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block w-full text-center rounded-lg bg-indigo-600 text-white py-2">Start trial</a>
          </div>

          <div className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-700">Enterprise</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">Custom</p>
            <p className="text-sm text-slate-600">for regulated institutions</p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2 list-disc list-inside">
              <li>SLA & white-glove onboarding</li>
              <li>Custom integrations</li>
              <li>Dedicated support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block w-full text-center rounded-lg bg-slate-900 text-white py-2">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
