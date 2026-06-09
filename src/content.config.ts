import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stripExt = ({ entry }: { entry: string }) => entry.replace(/\.md$/, '');

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog', generateId: stripExt }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    category: z.string().optional(),
    source: z.string().optional(),
    branch: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages', generateId: stripExt }),
  schema: z.object({
    title: z.string(),
  }),
});

const slides = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/slides', generateId: stripExt }),
  schema: z.object({
    order: z.number().default(0),
    headline: z.string(),
    text: z.string().optional(),
    image: z.string().optional(),
    alt: z.string().optional(),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional(),
  }),
});

const abteilungen = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/abteilungen', generateId: stripExt }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(0),
    summary: z.string(),
    image: z.string().optional(),
    accent: z.string().optional(),
    newsCategory: z.string().optional(),
    branch: z.string().optional(),
    trainingszeiten: z
      .array(
        z.object({
          gruppe: z.string(),
          tag: z.string(),
          zeit: z.string(),
          ort: z.string().optional(),
        })
      )
      .optional(),
    ansprechpartner: z
      .array(
        z.object({
          name: z.string(),
          rolle: z.string().optional(),
          email: z.string().optional(),
          telefon: z.string().optional(),
        })
      )
      .optional(),
  }),
});

export const collections = { blog, pages, slides, abteilungen };
