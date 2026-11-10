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
          'relative min-w-0 w-full max-w-full overflow-hidden rounded-2xl ring-1 ring-zinc-900/[.06] dark:ring-white/10',
          className
        )}
      >
        <Image
          src={screenshot}
          alt={`${title} screenshot`}
          className="h-full w-full object-cover"
          sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
    )
  }

  return (
    <div
      className={clsx(
        'flex min-w-0 w-full max-w-full items-center justify-center overflow-hidden bg-[repeating-linear-gradient(135deg,theme(colors.primaryText.100)_0_10px,theme(colors.white)_10px_20px)] font-mono text-primaryText-400 ring-1 ring-zinc-900/[.06] dark:bg-[repeating-linear-gradient(135deg,theme(colors.primaryText.800)_0_10px,theme(colors.primaryText.900)_10px_20px)] dark:text-primaryText-500 dark:ring-white/10',
        className
      )}
      aria-hidden="true"
    >
      <span className={clsx('px-4 text-center break-words', labelClassName)}>
        {title} screenshot
      </span>
    </div>
  )
}

function FeaturedProject({ project }) {
  return (
    <article className="grid min-w-0 grid-cols-1 items-stretch gap-6 rounded-3xl bg-primaryText-50 p-4 ring-1 ring-zinc-900/5 dark:bg-primaryText-800/40 dark:ring-white/10 sm:gap-8 sm:p-6 md:gap-10 lg:grid-cols-[7fr_5fr] lg:items-center lg:gap-12 lg:py-6 lg:pl-6 lg:pr-12">
      <ScreenshotFrame
        title={project.title}
        screenshot={project.screenshot}
        className="aspect-[16/10] rounded-2xl"
      />
      <div className="min-w-0">
        <Card.Eyebrow decorate>Featured project</Card.Eyebrow>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-3xl">
          {project.title}
        </h2>
        <p className="mt-4 text-base text-primaryText-600 [text-wrap:pretty] dark:text-primaryText-400">
          {project.description}
        </p>
        <Button
          variant="primary"
          href={project.href}
          className="mt-6 min-h-11 w-full touch-manipulation sm:mt-8 sm:w-auto"
        >
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
      className="min-w-0 w-full rounded-[20px] p-3 transition hover:bg-primaryText-200/50 dark:hover:bg-primaryText-800/50 sm:-m-4 sm:p-4"
    >
      <Link
        href={project.href}
        className="absolute inset-0 z-20 rounded-[20px] touch-manipulation"
      >
        <span className="sr-only">View {project.title} on GitHub</span>
      </Link>
      <div className="relative w-full min-w-0">
        <ScreenshotFrame
          title={project.title}
          screenshot={project.screenshot}
          className="aspect-[16/10] rounded-xl"
          labelClassName="text-[11px]"
        />
        <div className="absolute left-3 -bottom-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 sm:left-4 sm:-bottom-6 sm:h-12 sm:w-12">
          <Image
            src={project.logo}
            alt=""
            className="h-6 w-6 sm:h-7 sm:w-7"
            unoptimized
            width={28}
            height={28}
          />
        </div>
      </div>
      <h3 className="relative z-10 mt-9 text-base font-semibold text-primaryText-800 dark:text-primaryText-100 sm:mt-10">
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
        <div className="min-w-0 overflow-x-clip">
          <FeaturedProject project={featured} />
          <ul
            role="list"
            className="mt-12 grid min-w-0 grid-cols-1 gap-x-8 gap-y-10 sm:mt-16 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 lg:mt-20 lg:grid-cols-3"
          >
            {gallery.map((project) => (
              <GalleryProject key={project.title} project={project} />
            ))}
          </ul>
        </div>
      </SimpleLayout>
    </>
  )
}
