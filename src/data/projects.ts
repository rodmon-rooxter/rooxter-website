export type ProjectSlide = {
  src: string
  alt: string
}

export type Project = {
  title: string
  credit: string
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
    credit: 'Rooxter Films — Direction & VFX',
    slides: slides('selected-work', 'the-searhorse-trainer', 5, 'The Seahorse Trainer'),
    featured: true,
  },
  {
    title: 'Suffer',
    credit: 'Wallop Films — VFX Services',
    slides: slides('selected-work', 'suffer', 5, 'Suffer'),
    featured: true,
  },
  {
    title: 'Like This',
    credit: 'LLOREN — Direction & Post-Production',
    slides: slides('selected-work', 'like-this', 5, 'Like This'),
    featured: true,
  },
  {
    title: 'Ostrich Boy',
    credit: 'Rooxter Films — Feature Development',
    slides: slides('projects', 'ostrich-teaser', 5, 'Ostrich Boy'),
    featured: false,
  },
  {
    title: 'Rust and Dust',
    credit: 'Rooxter Films — Direction & VFX',
    slides: slides('projects', 'rust-and-dust', 5, 'Rust and Dust'),
    featured: false,
  },
  {
    title: 'Unicorn Code',
    credit: 'Wallop Films — VFX Services',
    slides: slides('projects', 'unicorn-code', 5, 'Unicorn Code'),
    featured: false,
  },
  {
    title: 'Revolves Around You',
    credit: 'The Dennis Jones Band — Direction & Post-Production',
    slides: slides('projects', 'revolves-around', 5, 'Revolves Around You'),
    featured: false,
  },
  {
    title: 'Breathe',
    credit: 'LLOREN — Direction & Post-Production',
    slides: slides('projects', 'breathe', 5, 'Breathe'),
    featured: false,
  },
  {
    title: 'If Martin Clune Wore Lipgloss',
    credit: 'Amy McLeish — Cinematography & Post-Production',
    slides: slides('projects', 'martin-clune', 5, 'If Martin Clune Wore Lipgloss'),
    featured: false,
  },
  {
    title: 'Thunderbird',
    credit: 'Nicholas Treeshin — VFX Supervision',
    slides: slides('projects', 'thunderbird', 4, 'Thunderbird'),
    featured: false,
  },
  {
    title: 'Hearts of Stone',
    credit: 'Tom Van Avermaet — VFX Supervision',
    slides: slides('projects', 'hearts-of-stone', 5, 'Hearts of Stone'),
    featured: false,
  },
]
