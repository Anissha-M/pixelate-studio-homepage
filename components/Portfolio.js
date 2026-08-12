import Image from "next/image";

const projects = [
  {
    title: "Nova Finance App",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "Bloom Skincare Brand",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80",
  },
  {
    title: "Orbit Travel Website",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80",
  },
  {
    title: "Fresh Cafe Branding",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  },
  {
    title: "Vertex Portfolio Site",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
  },
  {
    title: "Loop Fitness App",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-dark dark:text-white">Our Work</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Some of the projects we are proud of
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative group overflow-hidden rounded-xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
              />
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end">
                <p className="text-white font-medium p-4 opacity-0 group-hover:opacity-100 transition">
                  {project.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
