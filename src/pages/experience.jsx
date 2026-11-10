import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { RiLinksLine } from 'react-icons/ri'
import BriefcaseIcon from '@/images/icons/BriefcaseIcon'
import siteMetadata from '@/data/siteMetadata'

const experiences = [
  {
    title: 'AI Systems Consultant',
    company: 'House of Helix LLC',
    date: 'Aug 2026 – Present',
    description: [
      'Design and build AI systems for the company, including LLM-backed agents, prompt and workflow engineering, and internal AI tools that plug into existing business software.',
      'Build API, database, and CRM integrations that automate lead management, communications, and reporting, owning server configuration, deployment, testing, and documentation.',
      'Building a server-rendered Next.js wholesale storefront for Smoke Show Labs where licensed cannabis operators price white-label vape products, with volume discounts computed server-side so pricing never reaches the browser.',
      'Wrote a Zod-validated domain layer over typed fixture repositories so the UI can ship ahead of the backend, with CI lint, type, test, and security checks and a staged release workflow with health checks and rollback.',
    ],
    location: 'Los Angeles, CA',
    link: { url: 'https://github.com/EPW80', label: 'House of Helix LLC' },
  },
  {
    title: 'Full-Stack Developer (Contract)',
    company: 'Advanced Sequence',
    date: 'Aug 2026 – Present',
    description: [
      'Lead developer for a WooCommerce e-commerce store (WordPress, PHP, JavaScript), owning theme development, checkout and caching fixes, and site-wide SEO and structured data.',
      'Built a Go affiliate attribution and payout service backed by 299 automated tests, with a paginated third-party API client, reversal and ledger logic, Postmark transactional email, and a durable nightly payout queue.',
      'Integrated affiliate tracking, AI support chat, and email marketing services, documenting the caching and redirect edge cases that silently break data flow.',
      'Improved Core Web Vitals by rewriting theme JS and CSS; built a custom mu-plugin for QR redirects with server-side scan counting.',
    ],
    location: 'Los Angeles, CA',
    link: { url: 'https://github.com/EPW80', label: 'Advanced Sequence' },
  },
  {
    title: 'Full-Stack Development Intern',
    company: 'Cabana Joes Hospitality Products',
    date: 'Apr 2022 – Aug 2022',
    description: [
      'Built an e-commerce platform with 20+ reusable React components and full test coverage, and improved database query speed through indexing and caching.',
    ],
    location: 'South Gate, CA',
    link: {
      url: 'https://github.com/EPW80',
      label: 'Cabana Joes Hospitality Products',
    },
  },
]

export default function Resume() {
  return (
    <>
      <Head>
        <title>Experience - {siteMetadata.author}</title>
        <meta
          name="description"
          content={`Work experience of ${siteMetadata.author}`}
        />
      </Head>
      <SimpleLayout
        title={siteMetadata.experience.title}
        intro={siteMetadata.experience.intro}
      >
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
          Work Experience
        </h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {experiences.map((experience, index) => (
            <Card key={index}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-primaryText-800/5 ring-1 ring-primaryText-900/5 dark:border dark:border-primaryText-700/50 dark:bg-primaryText-800 dark:ring-0">
                <BriefcaseIcon className="h-6 w-6" />
              </div>
              <h2 className="mt-6 text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                <Card.Link href={experience.link.url}>
                  {experience.title} at {experience.company}
                </Card.Link>
              </h2>
              <p className="relative z-10 mt-2 text-sm text-primaryText-500 dark:text-primaryText-400">
                {experience.date}
                {experience.location ? ` · ${experience.location}` : ''}
              </p>
              <ul className="relative z-10 mt-2 space-y-2 text-sm text-primaryText-600 dark:text-primaryText-400">
                {experience.description.map((item, descriptionIndex) => (
                  <li
                    className="ml-4 list-disc"
                    key={`description-${descriptionIndex}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-primaryText-400 transition group-hover:text-accent-500 dark:text-primaryText-200">
                <RiLinksLine className="h-6 w-6 flex-none" />
                <span className="ml-2">{experience.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>

        <div className="relative mx-auto mt-24 max-w-lg lg:max-w-7xl">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
              Education
            </h2>
          </div>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {siteMetadata.experience.education.map((item, index) => (
              <Card key={`education-${index}`}>
                <p className="text-sm text-primaryText-600 dark:text-primaryText-400">
                  {item.startDate
                    ? `${item.startDate} – ${item.endDate}`
                    : item.endDate}
                </p>
                <div className="mt-2 block">
                  <p className="text-xl font-semibold text-primaryText-800 dark:text-primaryText-100">
                    {item.degree}
                  </p>
                  <p className="text-base font-semibold text-primaryText-800 dark:text-primaryText-100">
                    {item.schoolName}
                  </p>
                  <p className="mt-3 text-base text-primaryText-600 dark:text-primaryText-400">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}
