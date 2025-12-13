import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        author: z.string().default('Anonymous'),
        image: z.string().optional(),
        showImage: z.boolean().optional().default(false),
        fancyHeadings: z.boolean().optional().default(false),
        tags: z.array(z.string()).default([]),
        hideToc: z.boolean().optional().default(false),
        cardColor: z.string().optional(),
    }),
});

const storiesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        image: z.string().optional(),
        tags: z.array(z.string()).default([]),
        hideToc: z.boolean().optional().default(false),
    }),
});

const educationCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        image: z.string().optional(),
        institution: z.string().optional(),
        courseType: z.string().optional(),
        tags: z.array(z.string()).default([]),
        // New fields for structured content
        type: z.enum(['course', 'subject', 'module', 'unit']).optional().default('course'),
        order: z.number().optional(),
        parent: z.string().optional(),
        subject: z.string().optional(),
        hideToc: z.boolean().optional().default(false),
        // Sidebar customization
        showOverview: z.boolean().optional().default(false),
        overviewLabel: z.string().optional().default("Overview"),
    }),
});

export const collections = {
    blog: blogCollection,
    stories: storiesCollection,
    education: educationCollection,
};
