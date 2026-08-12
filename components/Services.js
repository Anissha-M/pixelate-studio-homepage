
const services = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "We design clean and easy to use interfaces for web and mobile apps.",
  },
  {
    icon: "💻",
    title: "Web Development",
    desc: "We build fast, responsive websites using modern tools like Next.js.",
  },
  {
    icon: "🏷️",
    title: "Branding",
    desc: "Logos, color palettes and brand guidelines that make you stand out.",
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    desc: "SEO, social media and content strategy to help you grow online.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-dark dark:text-white">What We Do</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            A few things we are really good at
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h4 className="font-semibold text-lg text-dark dark:text-white mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
