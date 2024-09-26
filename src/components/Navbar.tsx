'use client';

import React from 'react';
import Link from 'next/link';
import { animate } from 'framer-motion';

const Navbar = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;

      animate(startPosition, targetPosition, {
        type: 'spring',
        stiffness: 100,
        damping: 30,
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl font-bold hidden lg:flex" prefetch={false}>
          Yashita Mittal
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <a
            href="/#experience"
            className="hover:underline px-4 py-2"
            onClick={(e) => handleSmoothScroll(e, 'experience')}
          >
            Experience
          </a>
          <a
            href="/#projects"
            className="hover:underline px-4 py-2"
            onClick={(e) => handleSmoothScroll(e, 'projects')}
          >
            Projects
          </a>
          <a
            href="/#research"
            className="hover:underline px-4 py-2"
            onClick={(e) => handleSmoothScroll(e, 'research')}
          >
            Research
          </a>
          <a
            href="/#volunteering"
            className="hover:underline px-4 py-2"
            onClick={(e) => handleSmoothScroll(e, 'volunteering')}
          >
            Volunteering
          </a>
          <Link
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            prefetch={false}
          >
            View Resume
            <DownloadIcon className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

function DownloadIcon(props: any) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}
