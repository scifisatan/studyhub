
import Link from 'next/link'
import { Mic, Youtube, FileText, BookOpen, MessageCircle, ArrowRight, Linkedin, Github } from 'lucide-react'

export default function Home() {
  return (
    <div className={"min-h-screen bg-gray-100"}>
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">StudyHub</span>
          </div>
          <div className="space-x-4">
            <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</Link>
            <Link href="#team" className="text-gray-600 hover:text-blue-600 transition-colors">Developers</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Ultimate Study Companion
          </h1>
          <p className="text-xl text-gray-600 my-16 max-w-2xl mx-auto">
            Record lectures, organize notes, and interact with your study materials like never before. Boost your learning with AI-powered summaries and a smart chatbot assistant.
          </p>
          <Link
            href="/lectures"
            className="inline-block bg-blue-600 text-white px-8 my-4 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Free
          </Link>
        </section>

        <section id="features" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 ">
          <FeatureCard
            icon={<Mic className="h-8 w-8 text-blue-600" />}
            title="Lecture Recording"
            description="Easily record and organize your lectures with our built-in audio recorder."
          />
          <FeatureCard
            icon={<Youtube className="h-8 w-8 text-blue-600" />}
            title="YouTube Integration"
            description="Add and manage YouTube videos related to your studies directly in the app."
          />
          <FeatureCard
            icon={<FileText className="h-8 w-8 text-blue-600" />}
            title="File Management"
            description="Upload and organize lecture notes, PDFs, and other study materials in one place."
          />
          <FeatureCard
            icon={<BookOpen className="h-8 w-8 text-blue-600" />}
            title="AI-Powered Summaries"
            description="Get concise, AI-generated summaries of your lectures and study materials."
          />
          <FeatureCard
            icon={<MessageCircle className="h-8 w-8 text-blue-600" />}
            title="Smart Chatbot"
            description="Interact with a chatbot that understands your study materials and answers your questions."
          />
          <FeatureCard
            icon={<ArrowRight className="h-8 w-8 text-blue-600" />}
            title="Seamless Integration"
            description="All your study resources in one place, accessible across all your devices."
          />
        </section>

        <section id='team' className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Developed by
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FounderCard
              name="Abi Shrestha"
              role="Frontend Developer"
              linkedinUrl="https://www.linkedin.com/in/39abii"
              githubUrl="https://github.com/scifisatan"
            />
            <FounderCard
              name="Safal Adhikari"
              role="Backend Developer"
              linkedinUrl="https://www.linkedin.com/in/saffire"
              githubUrl="https://github.com/saffirex"
            />
            <FounderCard
              name="Arun Shrestha"
              role="AI Expert"
              linkedinUrl="https://www.linkedin.com/in/arun-shrestha-400038219"
              githubUrl="https://github.com/ArunShresthaa"
            />
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 pt-4">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 StudyHub. All rights reserved.</p>
        </div>
      </footer>
    </div >
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900 ml-2">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
function FounderCard({ name, role, linkedinUrl, githubUrl }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{role}</p>
      <div className="flex justify-center space-x-4">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <Linkedin className="h-6 w-6" />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
          <Github className="h-6 w-6" />
        </a>
      </div>
    </div>
  )
}