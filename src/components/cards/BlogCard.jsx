const BlogCard = ({ post }) => {
  return (
    <article className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
      <div className="h-52 bg-[#004643] flex items-center justify-center text-amber-300 text-xl font-bold">
        {post.category}
      </div>

      <div className="p-6">
        <p className="text-amber-300 text-sm mb-3">
          {post.category}
        </p>

        <h3 className="text-2xl font-bold">
          {post.title}
        </h3>

        <p className="text-zinc-400 mt-4">
          {post.description}
        </p>
      </div>
    </article>
  );
};

export default BlogCard;