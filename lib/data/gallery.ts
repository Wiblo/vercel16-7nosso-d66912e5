export interface GalleryItem {
  id: string
  image: string
  alt: string
}

export interface GalleryContent {
  title: string
  subtitle?: string
  items: GalleryItem[]
}

/**
 * Gallery section content
 * Update this to modify the gallery shown on the site
 */
export const galleryContent: GalleryContent = {
  title: 'Experience Our Healing Sanctuary',
  subtitle:
    'Take a look at our professional treatment space designed for your comfort and wellness',
  items: [
    {
      id: 'gallery-1',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
      alt: 'Modern chiropractic treatment room',
    },
    {
      id: 'gallery-2',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
      alt: 'Professional chiropractic adjustment space',
    },
    {
      id: 'gallery-3',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop',
      alt: 'Welcoming reception area',
    },
    {
      id: 'gallery-4',
      image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800&auto=format&fit=crop',
      alt: 'State-of-the-art chiropractic equipment',
    },
    {
      id: 'gallery-5',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
      alt: 'Comfortable waiting area',
    },
  ],
}

/**
 * Get all gallery items
 */
export function getGalleryItems(): GalleryItem[] {
  return galleryContent.items
}
