const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-10">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-zinc-400 mt-3">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;