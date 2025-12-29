export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="max-w-5xl mx-auto px-4 py-20">
        <p className="text-xs tracking-[0.35em] text-yellow-400 uppercase mb-4">
          Swift Designs Studio, LLC
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Building modern digital experiences for growing brands.
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mb-10">
          We design and develop secure, scalable websites, SaaS platforms,
          and digital systems that help businesses stand out and grow with
          confidence.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-yellow-400 text-black font-semibold"
          >
            Request a Project Quote
          </a>

          <a
            href="#services"
            className="px-6 py-3 rounded-full border border-gray-600"
          >
            View Services
          </a>
        </div>
      </section>
    </main>
  );
}
