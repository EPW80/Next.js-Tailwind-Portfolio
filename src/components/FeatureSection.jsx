import {
  RiCloudLine,
  RiCodeSSlashLine,
  RiDatabase2Line,
  RiFlashlightLine,
} from 'react-icons/ri'
import siteMetadata from '@/data/siteMetadata'

const features = [
  {
    name: 'Languages & frontend',
    description:
      'Python, Go, TypeScript, JavaScript, PHP, and SQL, with React, Next.js, Tailwind CSS, WordPress/WooCommerce, and Payload CMS.',
    icon: RiCodeSSlashLine,
  },
  {
    name: 'Backend & APIs',
    description:
      'FastAPI, Django, Node.js, Express, REST APIs, WebSockets, and GraphQL for services that integrate with product UIs and third-party systems.',
    icon: RiFlashlightLine,
  },
  {
    name: 'Cloud & DevOps',
    description:
      'AWS (Lambda, API Gateway, DynamoDB, S3, Step Functions, Bedrock), Docker, Terraform, Git, GitHub Actions, and CI/CD from design through production.',
    icon: RiCloudLine,
  },
  {
    name: 'Data, testing & AI',
    description:
      'PostgreSQL, MySQL, DynamoDB, Redis, and MongoDB, plus Pytest, Jest, Vitest, Go testing, and AI tooling with Anthropic Claude, AWS Bedrock, and ElevenLabs.',
    icon: RiDatabase2Line,
  },
]

const FeatureSection = () => {
  return (
    <div className="pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-accent-600"></h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100 sm:text-4xl">
            {siteMetadata.featureSection.title}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-primaryText-600 dark:text-primaryText-400">
            {siteMetadata.featureSection.description}
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-primaryText-800 dark:text-primaryText-100">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-primaryText-600 dark:text-primaryText-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
