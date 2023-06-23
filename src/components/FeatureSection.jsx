import { RiRunLine, RiSignalWifi3Line } from 'react-icons/ri'
import siteMetadata from '@/data/siteMetadata'

// TODO: Add your own features here. Make sure to add the icon from Remix-Design's repo:
const features = [
  {
    name: 'Solar Panel Cleaning Basics',
    description:
      'In this module, I will guide you through the proper methods of cleaning solar panels, ensuring that your panels remain efficient and your power generation remains high. Most new solar panel owners need to learn these essential cleaning techniques to realize their panels full potential and longevity.',
    icon: RiRunLine,
  },
  {
    name: 'Panel Maintenance',
    description:
      'I will provide you with the opportunity to master your panel cleaning routine, prepare your panels for optimal power generation, and have a well-maintained, high-performing solar power system.',
    icon: RiSignalWifi3Line,
  },
]

const FeatureSection = () => {
  return (
    <div className="pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-accent-600">
            
          </h2>
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
