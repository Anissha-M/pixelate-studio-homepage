import "./globals.css";

export const metadata = {
  title: "Pixelate Studio | Design Agency",
  description:
    "Pixelate Studio is a design agency that helps startups and brands with UI/UX design, web development, branding and digital marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem("theme");
                if (saved === "dark") {
                  document.documentElement.classList.add("dark");
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-gray-900 transition-colors">
        {children}
      </body>
    </html>
  );
}