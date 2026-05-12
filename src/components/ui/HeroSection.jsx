const HeroSection = () => {
  return (
    <section className="grid lg:grid-cols-2 gap-10 items-center py-16">
      <div>
        <p className="text-amber-300 mb-4">
          Frontend Layout Practice App
        </p>

        <h1 className="text-5xl font-bold leading-tight">
          Build Modern
          <span className="block text-amber-300">
            Responsive Layouts
          </span>
        </h1>

        <p className="text-zinc-400 mt-6">
          Master navigation systems and responsive layouts.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-zinc-900 rounded-3xl p-6 h-40 flex items-center justify-center">
          Navbar
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 h-56 flex items-center justify-center">
          Sidebar
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 h-56 flex items-center justify-center">
          Gallery
        </div>

        <div className="bg-amber-300 text-black rounded-3xl p-6 h-40 flex items-center justify-center font-bold">
          Blog
        </div>
      </div>
    </section>
  );
};

export default HeroSection;