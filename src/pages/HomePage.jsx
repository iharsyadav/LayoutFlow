import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";

import HeroSection from "../components/ui/HeroSection";

import SectionTitle from "../components/common/SectionTitle";

import GridGallery from "../components/GridGallery/GridGallery";

import BlogCard from "../components/cards/BlogCard";

import { galleryImages } from "../data/galleryData";
import { blogPosts } from "../data/blogData";

const HomePage = () => {
  return (
    <div className="bg-[#F0EDE5] min-h-screen text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-10">
        <HeroSection />

        <section className="mt-24">
          <SectionTitle
            title="Responsive Gallery"
            subtitle="Practice modern grid systems"
          />

          <GridGallery images={galleryImages} />
        </section>

        <section className="mt-24 grid lg:grid-cols-[250px_1fr] gap-8">
          <Sidebar />

          <div>
            <SectionTitle
              title="Latest Blog Layout"
              subtitle="Responsive content structure"
            />

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;