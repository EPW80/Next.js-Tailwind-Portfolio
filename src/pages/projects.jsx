import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import siteMetadata from '@/data/siteMetadata'

import ecomLogo from '@/images/projects/ecom.svg'
import bananaLogo from '@/images/projects/bananaApp.svg'
import supaSnacksLogo from '@/images/projects/supaSnacks.svg'
import payByFonieLogo from '@/images/projects/payByFonie.svg'

// TODO: Add your own projects here. Logo images from https://heroicons.com/
// Optional `screenshot` (static import) can replace the tasteful placeholder frames.
const projectsData = [
  {
    title: 'Shop-shop',
    description: `Shop Shop is an e-commerce application that allows users to shop for various items, add these products to the shopping cart, manage the shopping cart by increasing and decreasing quantities, check out their purchases and see their order history.`,
    logo: ecomLogo,
    href: 'https://github.com/EPW80/Shop-shop',
  },
  {
    title: 'Deep Thoughts',
    description: `A social media app where users can create thoughts, add reactions to other users' thoughts, and add other users to their friend list. Users can also view their own profile with their thoughts listed out, or view other users' profiles with all of their thoughts listed.`,
    logo: bananaLogo,
    href: 'https://github.com/EPW80/Deep-Thoughts',
  },
  {
    title: 'Pizza Hunt',
    description: `Pizza Hunt is a progressive web application where users can post pizza recipes and participate in discussion. Pizzas are added through a form input with topping options to choose from or the option to create your own. If the user loses internet connection and hits submit the input will be cached until internet access is available.`,
    logo: supaSnacksLogo,
    href: 'https://github.com/EPW80/Pizza-Hunt',
  },
  {
    title: 'MERN-Book-Search',
    description: `This app converts a fully functioning Google Books API search engine built with a RESTful API into a GraphQL API built with Apollo Server. Uses the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API.`,
    logo: payByFonieLogo,
    href: 'https://github.com/EPW80/MERN-Book-Search',
  },
]

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
      />
    </svg>
  )
}

function ScreenshotFrame({
  title,
  screenshot,
  className,
  labelClassName = 'text-xs',
}) {
  if (screenshot) {
    return (
      <div
        className={clsx(
          'relative w-full overflow-hidden rounded-2xl ring-1 ring-zinc-900/[.06] dark:ring-white/10',
          className
        )}
      >
        <Image
          src={screenshot}
          alt={`${title} screenshot`}
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 40vw, 100vw"
        />
      </div>
    )
  }

  return (
    <div
      className={clsx(
        'flex w-full items-center justify-center bg-[repeating-linear-gradient(135deg,theme(colors.primaryText.100)_0_10px,theme(colors.white)_10px_20px)] font-mono text-primaryText-400 ring-1 ring-zinc-900/[.06] dark:bg-[repeating-linear-gradient(135deg,theme(colors.primaryText.800)_0_10px,theme(colors.primaryText.900)_10px_20px)] dark:text-primaryText-500 dark:ring-white/10',
        className
      )}
      aria-hidden="true"
    >
      <span className={clsx('px-4 text-center', labelClassName)}>
        {title} screenshot
      </span>
    </div>
  )
}

function FeaturedProject({ project }) {
  return (
    <article className="grid grid-cols-1 items-center gap-12 rounded-3xl bg-primaryText-50 py-6 pl-6 pr-6 ring-1 ring-zinc-900/5 dark:bg-primaryText-800/40 dark:ring-white/10 lg:grid-cols-[7fr_5fr] lg:pr-12">
      <ScreenshotFrame
        title={project.title}
        screenshot={project.screenshot}
        className="aspect-[16/10] rounded-2xl"
      />
      <div>
        <Card.Eyebrow decorate>Featured project</Card.Eyebrow>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100">
          {project.title}
        </h2>
        <p className="mt-4 text-base text-primaryText-600 [text-wrap:pretty] dark:text-primaryText-400">
          {project.description}
        </p>
        <Button variant="primary" href={project.href} className="mt-8">
          View on GitHub
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </article>
  )
}

function GalleryProject({ project }) {
  return (
    <Card
      as="li"
      className="-m-4 rounded-[20px] p-4 transition hover:bg-primaryText-200/50 dark:hover:bg-primaryText-800/50"
    >
      <Link href={project.href}>
        <span className="absolute inset-0 z-20 rounded-[20px]" />
        <span className="sr-only">View {project.title} on GitHub</span>
      </Link>
      <div className="relative w-full">
        <ScreenshotFrame
          title={project.title}
          screenshot={project.screenshot}
          className="aspect-[16/10] rounded-xl"
          labelClassName="text-[11px]"
        />
        <div className="absolute left-4 -bottom-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <Image
            src={project.logo}
            alt=""
            className="h-7 w-7"
            unoptimized
            width={28}
            height={28}
          />
        </div>
      </div>
      <h3 className="relative z-10 mt-10 text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
        {project.title}
      </h3>
      <p className="relative z-10 mt-2 line-clamp-3 text-sm text-primaryText-600 dark:text-primaryText-400">
        {project.description}
      </p>
      <Card.Cta>View repo</Card.Cta>
    </Card>
  )
}

export default function Projects() {
  const [featured, ...gallery] = projectsData

  return (
    <>
      <Head>
        <title>Projects - {siteMetadata.author}</title>
        <meta name="description" content="Past Projects by Erik Williams" />
      </Head>
      <SimpleLayout
        title="Past Projects"
        intro="These are some of the projects that I'm most proud of. I've built them to learn new technologies, or to solve a problem that I've encountered."
      >
        <FeaturedProject project={featured} />
        <ul
          role="list"
          className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {gallery.map((project) => (
            <GalleryProject key={project.title} project={project} />
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
