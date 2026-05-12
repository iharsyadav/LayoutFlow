const Sidebar = () => {
  return (
    <aside className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 h-fit ">
      <h3 className="text-2xl font-bold mb-6">Navigation</h3>

      <ul className="space-y-4 text-zinc-300">
        <li>Dashboard</li>
        <li>Layouts</li>
        <li>Gallery</li>
        <li>Blog Posts</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;