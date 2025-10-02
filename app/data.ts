type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
  coverImage?: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Khoa Vũ',
    title: 'Nhân viên bán hàng',
    start: '2023',
    end: 'Present',
    link: 'https://www.facebook.com/romeo1810',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'DỰ ĐOÁN NĂM 2026 (phần 2)',
    description: 'Sau dự đoán đầu tiên cho năm 2026 của chúng ta về việc biến động về tài chính và tài sản.',
    link: '/blog/du-doan-nam-2026-phan-2',
    uid: 'blog-6',
    coverImage: 'https://ik.imagekit.io/romeovu181011/Hoc%20lap%20trinh%20voi%20Ai/pdpd1.jpg?updatedAt=1759410283541',
  },
  {
    title: 'DỰ ĐOÁN TÌNH HÌNH NĂM 2026',
    description: 'Hôm nay, mình trải một quẻ bài dự đoán tình hình đời sống và kinh tế của chúng ta trong giai đoạn tới.',
    link: '/blog/du-doan-tinh-hinh-nam-2026',
    uid: 'blog-5',
    coverImage: 'https://ik.imagekit.io/romeovu181011/Hoc%20lap%20trinh%20voi%20Ai/post4.jpg?updatedAt=1759410237443',
  },
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Facebook',
    link: 'https.www.facebook.com/romeo1810',
  },
]

export const EMAIL = 'romeovu181011@gmail.com'
