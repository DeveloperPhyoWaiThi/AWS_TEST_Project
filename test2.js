export default function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="bg-blue-600 text-white p-4 fixed w-full top-0 shadow-md">
        <nav className="flex justify-between max-w-4xl mx-auto">
          <h1 className="font-bold text-xl">My Portfolio</h1>
          <ul className="flex gap-6">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm John Doe 👋</h2>
        <p className="text-lg text-gray-600 max-w-xl">
          I'm a frontend developer who loves building modern web applications with React.
        </p>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a passionate web developer with experience in building responsive and 
            interactive websites using React, Node.js, and Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-600">A cool React app with great UI.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-600">Another amazing project built with React.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-600 mb-6">
            Feel free to reach out via email or connect on social media!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            📧 Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        © {new Date().getFullYear()} John Doe. All rights reserved.
      </footer>
    </div>
  );
}
