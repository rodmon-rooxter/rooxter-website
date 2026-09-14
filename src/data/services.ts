export type ServiceGroup = {
  title: string
  services: string[]
}

export const serviceGroups: ServiceGroup[] = [
  {
    title: 'DEVELOPMENT',
    services: ['Concept Art', 'Visual Development', 'Storyboarding'],
  },
  {
    title: 'PRODUCTION',
    services: ['Directing', 'Cinematography', 'VFX Supervision'],
  },
  {
    title: 'POST-PRODUCTION',
    services: ['Editing', 'VFX', 'VFX Consultation', 'Animation', 'Color', 'Sound Design'],
  },
]
