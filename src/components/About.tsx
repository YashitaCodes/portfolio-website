import React from 'react'

const About = () => {
  return (
    <section id="about" className="container mx-auto py-16 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
          <div className="w-48 h-48 mx-auto">
            <img
              src="/profile.png"
              alt="Yashita Mittal"
              className="w-full h-full object-cover"
            />
          </div>
            <h1 className="mt-6 text-4xl font-bold">Yashita Mittal</h1>
            <p className="mt-4 text-muted-foreground">Cybersecurity Engineer</p>
            <div className="mt-8 space-y-4 text-center">
            <p>
              Hey there! I&apos;m Yashita Mittal, a cybersecurity engineer with a knack for protecting digital assets. With my background in computer science, I enjoy diving into the world of security protocols, tackling vulnerability analysis and incident response like a puzzle waiting to be solved. I stay on top of the latest security trends, always ready to outsmart sneaky cyber threats. When I&apos;m not busy securing systems, you can catch me singing my heart out on the side—music is my favorite hobby!
            </p>
            {/* <div className="text-center mx-2 px-2">
            <Link
              href="#"
              className="mr-3 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              View Resume
              <DownloadIcon className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-muted px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              View Resume
              <DownloadIcon className="h-4 w-4" />
            </Link>
            </div> */}
            </div>
          </div>
        </section>
  )
}

export default About