export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-white to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-900" >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-6xl font-bold text-dark dark:text-white leading-tight max-w-3xl">  We design brands people{" "}
          <span className="text-primary">remember</span>
        </h2>

       <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-xl text-lg">
          Pixelate Studio is a small design agency helping startups build
          clean websites, strong brand identity and products people enjoy
          using.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Get Started
          </a>
          <a
            href="#portfolio"
            className="border border-gray-300 dark:border-gray-600 text-dark dark:text-white px-6 py-3 rounded-full font-medium hover:border-primary hover:text-primary transition" >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
