import { getCollection } from "astro:content";

export async function GET() {
    const courses = await getCollection("education");

    const serializedCourses = courses.map((course) => ({
        slug: course.slug,
        data: {
            title: course.data.title,
            description: course.data.description,
            pubDate: course.data.pubDate,
            tags: course.data.tags,
            institution: course.data.institution,
            courseType: course.data.courseType,
            image: course.data.image,
        },
    }));

    return new Response(JSON.stringify(serializedCourses), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
