import React from 'react'
import Link from 'next/link'

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto py-16 px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Projects</h2>
            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold">Cybersecurity Ticketing System</h3>
                {/* <p className="text-muted-foreground">
                  subtext for technologies
                </p> */}
                <div className="mt-4 space-y-2">
                <p>
                • Developed Ticket Genie, a comprehensive cybersecurity ticketing system using Next.js, Tailwind CSS, and MongoDB.
                </p>
                <p>
                • Implemented full CRUD functionality for efficient support ticket management.
                </p>
                <p>
                • Designed an intuitive, user-friendly interface for seamless ticket creation, submission, and tracking.
                </p>
                <p>
                • Optimized MongoDB for enhanced performance and efficient data storage, ensuring smooth handling of ticket data at scale.
                </p>
                </div>
                <div className="mt-4 flex gap-4">
                  <Link
                    href="https://github.com/YashitaCodes/ticket-genie"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    <EyeIcon className="h-4 w-4" />
                    View Project
                  </Link>
                  <Link
                    href="https://github.com/YashitaCodes/ticket-genie"
                    className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    <GithubIcon className="h-4 w-4" />
                    GitHub
                  </Link>
                </div>
              </div>
              <div>
                  <h3 className="text-2xl font-semibold">Text-Encoding Desktop Application</h3>
                  {/* <p className="text-muted-foreground">
                    subtext for technologies
                  </p> */}
                  <div className="mt-4 space-y-2">
                  <p>
                  • Developed Encode Me, a Python-based application using Tkinter for encoding plain text into various cryptographic algorithms.
                  </p>
                  <p>
                  • Implemented support for multiple algorithms such as SHA-256, MD5, and more, allowing users to easily convert plain text into secure hashed formats.
                  </p>
                  <p>
                  • Designed an intuitive Tkinter GUI for smooth user interaction, simplifying the encoding process.
                  </p>
                  <p>
                  • Ensured flexible functionality, enabling users to select desired algorithms and instantly view the encoded output.
                  </p>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <Link
                      href="https://github.com/YashitaCodes/encode-me"
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      prefetch={false}
                    >
                      <EyeIcon className="h-4 w-4" />
                      View Project
                    </Link>
                    <Link
                      href="https://github.com/YashitaCodes/encode-me"
                      className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      prefetch={false}
                    >
                      <GithubIcon className="h-4 w-4" />
                      GitHub
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        </section>
  )
}

export default Projects

function EyeIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  
  
  function GithubIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    )
  }
  