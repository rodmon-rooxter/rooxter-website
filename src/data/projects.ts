export type Project = {
  title: string
  category: string
  year?: string
  image?: string
  imageAlt?: string
  featured: boolean
}

// Add image paths as media is approved, for example:
// image: '/images/selected-work/project-name.webp'
export const projects: Project[] = [
  {
    title: 'Project One',
    category: 'Short Film',
    year: '2025',
    featured: true,
  },
  {
    title: 'Project Two',
    category: 'Original Series',
    featured: true,
  },
  {
    title: 'Project Three',
    category: 'Animation',
    featured: true,
  },
  {
    title: 'Project Four',
    category: 'Visual Effects',
    featured: false,
  },
]
