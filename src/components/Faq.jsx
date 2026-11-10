import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'What kind of work do you do?',
    answer:
      'I am a full-stack and backend software engineer. I build web apps and backend services in React, Next.js, TypeScript, Python, and Go, and deploy on AWS with Docker and CI/CD.',
  },
  {
    question: 'What are you working on lately?',
    answer:
      'I am an AI Systems Consultant at House of Helix LLC and a contract full-stack developer at Advanced Sequence, where I lead WooCommerce storefront work and a Go affiliate payout service backed by 299 automated tests.',
  },
  {
    question: 'What is your education background?',
    answer:
      'I earned a B.S. in Computer Science from California State University, Fullerton (Jan 2026) and a Full-Stack Web Development Certificate from UCLA Extension (Aug 2022).',
  },
  {
    question: 'How can I reach you?',
    answer:
      'Email erikparrawilliams@tutanota.com, call (323) 559-1224, or use the contact form. You can also find me on GitHub (EPW80) and LinkedIn.',
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
