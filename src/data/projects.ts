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

const imagePath = (folder: 'selected-work' | 'projects', filename: string) =>
  `${import.meta.env.BASE_URL}images/${folder}/${filename}`

const slides = (
  folder: 'selected-work' | 'projects',
  filename: string,
  count: number,
  title: string,
): ProjectSlide[] =>
  Array.from({ length: count }, (_, index) => ({
    src: imagePath(folder, `${filename}-${String(index + 1).padStart(2, '0')}.webp`),
    alt: `Still ${index + 1} from ${title}`,
  }))

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
    category: 'Rooxter Films',
    slides: slides('selected-work', 'the-searhorse-trainer', 5, 'The Seahorse Trainer'),
    featured: true,
  },
  {
    title: 'Suffer',
    category: 'Wallop Films',
    slides: slides('selected-work', 'suffer', 5, 'Suffer'),
    featured: true,
  },
  {
    title: 'Like This',
    category: 'Lloren',
    slides: slides('selected-work', 'like-this', 5, 'Like This'),
    featured: true,
  },
  {
    title: 'Ostrich Boy',
    category: 'Rooxter Films',
    slides: slides('projects', 'ostrich-teaser', 5, 'Ostrich Boy'),
    featured: false,
  },
  {
    title: 'Rust and Dust',
    category: 'Rooxter Films',
    slides: slides('projects', 'rust-and-dust', 5, 'Rust and Dust'),
    featured: false,
  },
  {
    title: 'Unicorn Code',
    category: 'Wallop Films',
    slides: slides('projects', 'unicorn-code', 5, 'Unicorn Code'),
    featured: false,
  },
  {
    title: 'Revolves Around You',
    category: 'The Dennis Jones Band',
    slides: slides('projects', 'revolves-around', 5, 'Revolves Around You'),
    featured: false,
  },
  {
    title: 'Breathe',
    category: 'Lloren',
    slides: slides('projects', 'breathe', 5, 'Breathe'),
    featured: false,
  },
  {
    title: 'If Martin Clune Wore Lipgloss',
    category: 'Amy Mcleish',
    slides: slides('projects', 'martin-clune', 5, 'If Martin Clune Wore Lipgloss'),
    featured: false,
  },
  {
    title: 'Thunderbird',
    category: 'Nicholas Treeshin',
    slides: slides('projects', 'thunderbird', 4, 'Thunderbird'),
    featured: false,
  },
  {
    title: 'Hearts of Stone',
    category: 'Tom Van Avermaet',
    slides: slides('projects', 'hearts-of-stone', 5, 'Hearts of Stone'),
    featured: false,
  },
]
