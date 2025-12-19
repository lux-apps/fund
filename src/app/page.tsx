import React from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          LUX Fund
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl">
          Invest in the Future
        </p>
        <p className="text-lg text-gray-400 max-w-2xl">
          Diversified investment vehicles providing exposure to the Lux ecosystem.
        </p>
      </section>

      {/* Feature Sections */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Index Funds</h2>
          <p className="text-lg text-gray-400">Get diversified exposure to the best projects in the Lux ecosystem.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Managed Strategies</h2>
          <p className="text-lg text-gray-400">Professional management of your crypto portfolio by experienced traders.</p>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent Performance</h2>
          <p className="text-lg text-gray-400">All fund performance is verifiable on-chain. No hidden fees or surprises.</p>
        </div>
      </section>

    </main>
  )
}
