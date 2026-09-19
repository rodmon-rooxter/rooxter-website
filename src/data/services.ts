export type ServiceGroup = {
  title: string
  services: string[]
}

export const serviceGroups: ServiceGroup[] = [
  {
    title: 'DEVELOPMENT',
    services: ['Concept Art', 'Visual Development', 'Storyboarding', '3D Previsualization'],
  },
  {
    title: 'PRODUCTION',
    services: ['Directing', 'Cinematography', 'VFX Supervision'],
  },
  {
    title: 'POST-PRODUCTION',
    services: ['Editing', 'VFX', 'VFX Consulting', 'Animation', 'Color', 'Sound Design'],
  },
]
