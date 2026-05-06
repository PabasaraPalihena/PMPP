"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-gray-400 text-sm">
          © {currentYear} Pabasara Palihena. Built with purpose.
        </p>
      </div>
    </footer>
  );
}
