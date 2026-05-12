const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-[#004643]/90 border-[#003330] backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-amber-300">
          Layout<span className="text-white">Flow</span>
        </h1>

        <ul className="hidden md:flex gap-8">
          <li>Home</li>
          <li>Gallery</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        <button className="hidden md:block bg-amber-300 text-black px-5 py-2 rounded-xl">
          Get Started
        </button>

        <button className="md:hidden text-2xl">☰</button>
      </nav>
    </header>
  );
};

export default Navbar;