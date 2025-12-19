export interface AboutPreview {
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface AboutFull {
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
}

/**
 * About section preview for homepage
 * Brief introduction with link to full about page
 */
export const aboutPreview: AboutPreview = {
  title: 'About Our Practice',
  description:
    "Rebecca Currie is a dedicated chiropractor committed to helping people achieve a pain-free life through non-invasive healthcare. With a Master's degree in Chiropractic from the University of Johannesburg earned with distinction, she provides holistic, patient-centered care to individuals of all ages.",
  image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop',
  imageAlt: 'Rebecca Currie professional portrait',
}

/**
 * Full about content for dedicated about page
 * Comprehensive information about the practice
 */
export const aboutFull: AboutFull = {
  title: 'About Rebecca Currie',
  paragraphs: [
    "Rebecca Currie is a dedicated chiropractor committed to helping people achieve a pain-free life through non-invasive healthcare. With a Master's degree in Chiropractic from the University of Johannesburg earned with distinction, she provides holistic, patient-centered care to individuals of all ages.",
    'Specializing in sports and family chiropractic care, Rebecca combines advanced techniques with a compassionate approach to address a wide range of conditions, from sports injuries to chronic pain management.',
    'At Sticks and Stones Wellness Hub, every patient receives personalized attention and a customized treatment plan designed to support their unique healing journey and long-term wellness goals.',
  ],
  image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1200&auto=format&fit=crop',
  imageAlt: 'Rebecca Currie professional portrait',
}
