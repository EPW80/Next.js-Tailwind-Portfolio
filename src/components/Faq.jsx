import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'Why is it important to clean solar panels?',
    answer:
      'Cleaning solar panels is crucial to maintain their efficiency. Dirt, dust, bird droppings, and other debris can accumulate on the panels and block sunlight, which reduces the amount of electricity they generate. Regular cleaning ensures they continue to function at peak performance.',
  },
  {
    question: 'Can I use any cleaning agent to clean my solar panels?',
    answer:
      "While it might be tempting to use strong cleaning agents, it's recommended to use mild, eco-friendly soap and water. Harsh chemicals could damage the panel's surface or even void the warranty. Additionally, the use of abrasive tools can scratch the panels, reducing their efficiency.",
  },
  {
    question: 'How often should I clean my solar panels?',
    answer:
      'The frequency of cleaning depends on several factors such as your location, climate, angle of installation, and amount of dust or debris in your area. However, as a general rule of thumb, checking your panels every few months and cleaning them as needed is a good practice.',
  },
  {
    question: 'Can I clean the solar panels myself, or should I hire a professional?',
    answer:
      'While it is possible to clean solar panels yourself, it often involves climbing on the roof which can be risky. Professional cleaners are trained to do this safely and have the right equipment. They are also experienced in identifying potential issues that might not be apparent to the untrained eye. However, if you do decide to do it yourself, always prioritize safety.',
  },
]


const Faq = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-primaryText-800 dark:text-primaryText-100">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-primaryText-600 dark:text-primaryText-400">
            Can’t find the answer you’re looking for? Reach out to{' '}
            <a
              href={`mailto:${siteMetadata.email}`}
              className="font-medium text-accent-600 hover:text-accent-500"
            >
              me
            </a>
            .
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-12">
            {faqs.map((faq) => (
              <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transitions={{ duration: 3, type: 'tween' }}
                key={faq.question}
              >
                <div>
                  <dt className="text-lg font-medium leading-6 text-primaryText-800 dark:text-primaryText-100">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-primaryText-600 dark:text-primaryText-400 ">
                    {faq.answer}
                  </dd>
                </div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Faq
