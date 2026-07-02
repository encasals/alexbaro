import type { ImageMetadata } from 'astro';

// Import cover images for Astro optimization
import fallingOut from '../assets/images/covers/01-falling-out.png';
import tbc from '../assets/images/covers/02-tbc.jpg';
import humanResources from '../assets/images/covers/03-human-resources.jpg';
import boringPromo from '../assets/images/covers/04-boring-promo.jpg';
import matchroomRebrand from '../assets/images/covers/05-matchroom-rebrand.png';
import toeWrestlingPromo from '../assets/images/covers/06-toe-wrestling-promo.jpg';
import keith from '../assets/images/covers/07-keith.jpg';
import milkCookies from '../assets/images/covers/08-milk-cookies.jpg';
import thePush from '../assets/images/covers/09-the-push.png';
import comedyThings from '../assets/images/covers/10-comedy-things.jpg';

export interface Project {
  slug: string;
  title: string;
  year: string;
  coverImage: ImageMetadata;
  description?: string;
  videoFile?: string; // Local video file path
  youtubeId?: string; // YouTube video ID for embedding
  vimeoId?: string; // Vimeo video ID for embedding
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export const projects: Project[] = [
  {
    slug: "the-vessel",
    title: "The Vessel",
    year: "2026",
    coverImage: fallingOut,
    description: "Comedy short film project.",
    videoFile: "/videos/falling-out.mp4",
    aspectRatio: "landscape"
  },
  {
    slug: "falling-out",
    title: "Falling Out",
    year: "2023",
    coverImage: fallingOut,
    description: "Comedy short film project.",
    videoFile: "/videos/falling-out.mp4",
    aspectRatio: "landscape"
  },
  {
    slug: "tbc",
    title: "TBC",
    year: "2023",
    coverImage: tbc,
    description: "Project coming soon.",
    aspectRatio: "landscape"
  },
  {
    slug: "human-resources",
    title: "Human Resources",
    year: "2023",
    coverImage: humanResources,
    description: "Documentary project about workplace dynamics.",
    videoFile: "/videos/human-resources.mp4",
    aspectRatio: "landscape"
  },
  {
    slug: "boring-promo",
    title: "Boring Promo",
    year: "2022",
    coverImage: boringPromo,
    description: "Promotional video project.",
    videoFile: "/videos/boring-promo.mp4",
    aspectRatio: "landscape"
  },
  {
    slug: "matchroom-rebrand",
    title: "Matchroom Rebrand",
    year: "2022",
    coverImage: matchroomRebrand,
    description: "Rebranding campaign for Matchroom.",
    videoFile: "/videos/matchroom-rebrand.mp4",
    aspectRatio: "landscape"
  },
  {
    slug: "toe-wrestling-promo",
    title: "Toe Wrestling Promo",
    year: "2022",
    coverImage: toeWrestlingPromo,
    description: "Promotional content for toe wrestling championship.",
    videoFile: "/videos/toe-wrestling.mp4",
    aspectRatio: "landscape"
  },
  {
    slug: "keith",
    title: "Keith",
    year: "2021",
    coverImage: keith,
    description: "Short film featuring Keith.",
    videoFile: "/videos/keith.mp4",
    aspectRatio: "landscape"
  },
  {
    slug: "milk-cookies",
    title: "Milk & Cookies",
    year: "2021",
    coverImage: milkCookies,
    description: "Creative content piece.",
    videoFile: "/videos/milk-cookies.mp4",
    aspectRatio: "landscape"
  },
  {
    slug: "the-push",
    title: "The Push",
    year: "2020",
    coverImage: thePush,
    description: "Documentary-style short.",
    videoFile: "/videos/the-push.mp4",
    aspectRatio: "landscape"
  },
  {
    slug: "comedy-things-showreel",
    title: "Comedy Things Showreel",
    year: "2020",
    coverImage: comedyThings,
    description: "Showreel of comedy work.",
    videoFile: "/videos/comedy-things-showreel.mp4",
    aspectRatio: "landscape"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

// Get the first project's image for OG/Twitter default
export const defaultCoverImage = fallingOut;
