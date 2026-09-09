export type ProjectSlide = {
  src: string
  alt: string
}

export type Project = {
  title: string
  category: string
  year?: string
  image?: string
  imageAlt?: string
  slides?: ProjectSlide[]
  featured: boolean
}

// Add 3–5 approved stills to a featured project like this:
// slides: [
//   { src: '/images/selected-work/project-name-01.webp', alt: 'Description of still' },
//   { src: '/images/selected-work/project-name-02.webp', alt: 'Description of still' },
//   { src: '/images/selected-work/project-name-03.webp', alt: 'Description of still' },
// ]
// Use `image` for the static Projects grid image.
export const projects: Project[] = [
  {
    title: 'The Seahorse Trainer',
    category: 'Short Film',
    slides: [
      { src: '/images/selected-work/the-searhorse-trainer-01.webp', alt: 'Still 1 from The Seahorse Trainer' },
      { src: '/images/selected-work/the-searhorse-trainer-02.webp', alt: 'Still 2 from The Seahorse Trainer' },
      { src: '/images/selected-work/the-searhorse-trainer-03.webp', alt: 'Still 3 from The Seahorse Trainer' },
      { src: '/images/selected-work/the-searhorse-trainer-04.webp', alt: 'Still 4 from The Seahorse Trainer' },
      { src: '/images/selected-work/the-searhorse-trainer-05.webp', alt: 'Still 5 from The Seahorse Trainer' },
    ],
    featured: true,
  },
  {
    title: 'Suffer',
    category: 'Music Video',
    slides: [
      { src: '/images/selected-work/suffer-01.webp', alt: 'Still 1 from Suffer' },
      { src: '/images/selected-work/suffer-02.webp', alt: 'Still 2 from Suffer' },
      { src: '/images/selected-work/suffer-03.webp', alt: 'Still 3 from Suffer' },
      { src: '/images/selected-work/suffer-04.webp', alt: 'Still 4 from Suffer' },
      { src: '/images/selected-work/suffer-05.webp', alt: 'Still 5 from Suffer' },
    ],
    featured: true,
  },
  {
    title: 'Like This',
    category: 'Music Video',
    slides: [
      { src: '/images/selected-work/like-this-01.webp', alt: 'Still 1 from Like This' },
      { src: '/images/selected-work/like-this-02.webp', alt: 'Still 2 from Like This' },
      { src: '/images/selected-work/like-this-03.webp', alt: 'Still 3 from Like This' },
      { src: '/images/selected-work/like-this-04.webp', alt: 'Still 4 from Like This' },
      { src: '/images/selected-work/like-this-05.webp', alt: 'Still 5 from Like This' },
    ],
    featured: true,
  },
  {
    title: 'Project Four',
    category: 'Visual Effects',
    featured: false,
  },
]
