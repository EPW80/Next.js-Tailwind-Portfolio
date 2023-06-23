import { GiBanana } from 'react-icons/gi'
import { RiShoppingBagLine, RiCarLine } from 'react-icons/ri'
import { IoFastFoodOutline } from 'react-icons/io5'

const siteMetadata = {
  title: 'Nextjs Tailwind Portfolio',
  description:
    'This is where you can learn about me and my work. I am a full stack developer and student at California State University Fullerton.',
  author: 'Erik Williams',
  authorHeadline: 'Full Stack Developer, solar panel cleaner.',
  authorAbout: 'Hello, I am Erik Williams, a full stack developer. I also like cleaning solar panels.',
  authorAboutExtended:
    "Erik is an American-born, living in South East Los Angeles. \n \n In his personal life, Erik is an avid martial arts and programmer nut. He enjoys cleaning solar panels in his sparetime as well as practice martial arts. When he's not coding or exercising, Erik can be found playing PC videogames. I also like being a dad.",
  socials: {
    github: 'https://github.com/EPW80',
    linkedin: 'https://www.linkedin.com/in/erik-parra-williams/',
  },
  email: 'erikparrawilliams@tutanota.com',
  phoneNumber: '123-456-7890',
  contactTitle: 'Get in touch',
  contactSubtitle:
    'I am currently making amazing websites. If you want to get in touch, please use the form below.',
  analytics: {
    plausibleDataDomain: 'https://epw80.github.io/react-portfolio-master/', // e.g. tailwind-nextjs-starter-blog.vercel.app
    googleAnalyticsId: 'G-XXXXXXX', // e.g. UA-000000-2 or G-XXXXXXX
  },
  // TODO: Add the name of the navbar items and the corresponding page. Used in the Header and Footer components.
  siteNavLinks: [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Experience',
      href: '/experience',
    },
    // {
    //   name: 'Offerings',
    //   href: '/offerings',
    // },
    {
      name: 'Contact',
      href: '/contact',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
  ],
  siteRepo: 'https://github.com/EPW80',
  offerings: [
    {
      title: 'Audio Production',
      description:
        'I will instruct you on how to properly produce audio, ensuring that your listeners are satisfied and your reputation soars. Many audio engineers are not educated on the nuanced techniques of audio production, so their output may not reach the highest possible quality. Have you ever listened to a muddled track, overly quiet or lacked depth? Engage my services to teach you the finer points of audio production; you will never have to worry about such issues again.',
      testimonial:
        '“Erik is renowned for his outstanding skills in maintaining the cleanliness and efficiency of solar panels.”',
      testimonialAuthor: 'Paul McCartney',
      testimonialAuthorTitle: 'CEO at Deatles, Inc.',
      imgUrl:
        'https://images.unsplash.com/photo-1594392175511-30eca83d51c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
      // imageAttribution: 'Photo by @dan__burton on Unsplash',
    },
    {
      title: 'Audio Engineering',
      description:
        'This audio engineering workshop will allow our participants to create their sound mix, prepare their tracks, and produce a high-quality piece of audio to enjoy at the end of the session. Participants will take home additional audio resources, exclusive mixing techniques, and a tool list, empowering them to recreate these sounds in their studio independently.',
      testimonial: '',
      testimonialAuthor: '',
      testimonialAuthorTitle: '',
      imgUrl:
        'https://images.unsplash.com/photo-1532460734809-e7f8475ca917?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3237&q=80',
      // imageAttribution: 'Photo by @juanmanunez on Unsplash',
    },
  ],
  testimonial: {
    comment:
      '“Erik is renowned for his outstanding skills in maintaining the cleanliness and efficiency of solar panels.”',
    author: 'Elon Musk',
    authorTitle: 'CEO at Dumpster, Inc.',
    imgUrl:
      'https://images.unsplash.com/photo-1579047917338-a6a69144fe63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
    // imageAttribution: 'Photo by @johanemanuel on Unsplash',
  },
  featureSection: {
    title: 'Why Choose Me?',
    description:
      'I am a full stack developer and I love to build things. I can also clean your solar panels.',
    //TODO also need to update the features array in the FeatureSection component
  },
  experience: {
    // title: 'Education',
    // intro:
    //   "I've been coding for a long time, and I am a current student at California State University Fullerton studying Computer Science.",
    //TODO also need to update the experience array in the ExperienceSection component. This is because of the icons used.
    education: [
      {
        schoolName: 'California State University Fullerton',
        degree: 'Bachelor of Science in computer Science',
        description:
          'Computer Science is the study of computational systems and computers. It is a multidisciplinary field that draws on mathematics, logic, and design knowledge to understand how computer systems work and function. Computer Science is a broad field that studies algorithms, data structures, software design, and network design. It is a multidisciplinary field that draws on mathematics, logic, and design knowledge to understand how computer systems work and function.',
        startDate: '2022',
        endDate: 'Current',
        typeofDegree: 'Bachelor Degree',
      },
      {
        schoolName: 'University of California Los Angeles, Coding Bootcamp',
        degree: 'Full Stack Web Development',
        description:
          'The Coding Boot Camp at UCLA Extension is a 24-week full-time web development bootcamp.  The program is designed to teach students the skills needed to become a junior web developer.',
        startDate: '2022',
        endDate: '2022',
        typeofDegree: 'Certificate of Completion',
      },
    ],
  },
}

export default siteMetadata
