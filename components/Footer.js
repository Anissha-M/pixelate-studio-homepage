export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      © {new Date().getFullYear()} Pixelate Studio. All rights reserved.
    </footer>
  );
}