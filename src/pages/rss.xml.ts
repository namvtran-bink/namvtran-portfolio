import rss from "@astrojs/rss";
import { getPublishedWriting } from "../lib/content";
export async function GET(context: { site: URL }) {
  const entries = await getPublishedWriting("en");
  return rss({
    title: "Nam V. Tran — Writing",
    description: "Notes about engineering craft, product thinking, and growth.",
    site: context.site,
    items: entries.map(({ id, data }) => ({
      title: data.title,
      description: data.description,
      pubDate: data.publishedAt,
      link: `/writing/${id}/`,
    })),
  });
}
