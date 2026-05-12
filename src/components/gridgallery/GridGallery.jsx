const GridGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-3xl border border-zinc-800"
        >
          <img
            src={`${image}?auto=format&fit=crop&w=800&q=80`}
            alt="gallery"
            className="h-72 w-full object-cover hover:scale-110 transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};

export default GridGallery;