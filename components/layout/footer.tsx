export function Footer() {
  return (
    <footer className="relative z-10 py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">© {new Date().getFullYear()} Muhammed Amri. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-1">Built with Next.js, TypeScript, and Tailwind CSS</p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
