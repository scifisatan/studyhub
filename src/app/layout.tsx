'use client'
import "@/styles/globals.css"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UserCircle, Menu, ChevronLeft, BookOpen, Youtube, FileText } from 'lucide-react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)
  const pathname = usePathname()

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded)
  }

  const routes = [
    { path: '/lectures', name: 'Lectures', icon: BookOpen },
    { path: '/youtube', name: 'YouTube', icon: Youtube },
    { path: '/files', name: 'Files', icon: FileText },
  ]

  const currentRoute = routes.find(route => pathname.startsWith(route.path))
  const isRootPage = pathname === '/'
  return (
    <html lang="en" className=" scroll-smooth">
      <body>
        <div className="flex h-screen">
          {/* Sidebar */}
          {!isRootPage && <aside className={`bg-gray-800 text-white fixed top-0 left-0 h-full transition-all duration-300 ${isSidebarExpanded ? 'w-64' : 'w-14'}`}>
            <div className="flex justify-between items-center p-4">
              {isSidebarExpanded && <h2 className="text-xl font-bold">Menu</h2>}
              <button onClick={toggleSidebar} className="py-0.5 rounded-full hover:bg-gray-700">
                {isSidebarExpanded ? <ChevronLeft size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <nav>
              <ul className="space-y-2 transition-all duration-300">
                {routes.map((route) => (
                  <li key={route.path}>
                    <Link href={route.path} className={`flex items-center py-2 px-4 hover:bg-gray-700 rounded ${pathname.startsWith(route.path) ? 'bg-gray-700' : ''}`}>
                      <route.icon size={24} />
                      {isSidebarExpanded && <span className="ml-3 ">{route.name}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>}

          {/* Main content */}
          <div className="flex-1 flex flex-col">
            {/* Top bar */}
            {!isRootPage && <header className="bg-white shadow-md p-4 flex justify-between items-center">
              <h1 className={`text-xl font-semibold transition-all duration-300 ${isSidebarExpanded ? 'ml-64' : 'ml-14'}`}>{currentRoute ? currentRoute.name : 'Dashboard'}</h1>
              <div className="flex items-center">
                <UserCircle className="h-8 w-8 text-gray-500" />
              </div>
            </header>}

            {/* Page content */}
            <main className={`flex-1 p-6 bg-gray-100 transition-all duration-300  ${isRootPage ? 'ml-0' : isSidebarExpanded ? 'ml-64' : 'ml-14'} `}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html >
  )
}