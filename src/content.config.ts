import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const locale = z.enum(["en", "vi"]);
const visibility = z.enum(["public", "private"]);

const journey = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/journey" }),
  schema: z.object({
    title: z.string(),
    period: z.string(),
    summary: z.string(),
    growthThemes: z.array(z.string()),
    skills: z.array(z.string()),
    locale,
    visibility,
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    generalProblem: z.string(),
    role: z.string(),
    reasoning: z.string(),
    outcome: z.string(),
    lessons: z.array(z.string()),
    tags: z.array(z.string()),
    locale,
    visibility,
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()),
    locale,
    visibility,
    draft: z.boolean().default(true),
    readingTime: z.number().positive(),
  }),
});

const profile = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/profile" }),
  schema: z.object({
    locale,
    name: z.string(),
    role: z.string(),
    introduction: z.string(),
    biography: z.string(),
    values: z.array(z.object({ title: z.string(), description: z.string() })),
    interests: z.array(z.string()),
    links: z.object({
      github: z.url(),
      linkedin: z.url(),
      email: z.email(),
    }),
    availability: z.string(),
  }),
});

export const collections = { journey, work, writing, profile };
