import rss from "@astrojs/rss";
import { getPublishedWriting } from "../../lib/content";
export async function GET(context: { site: URL }) {
  const entries = await getPublishedWriting("vi");
  return rss({
    title: "Nam V. Tran — Bài viết",
    description:
      "Ghi chép về kỹ nghệ phần mềm, tư duy sản phẩm và sự trưởng thành.",
    site: context.site,
    items: entries.map(({ id, data }) => ({
      title: data.title,
      description: data.description,
      pubDate: data.publishedAt,
      link: `/vi/writing/${id}/`,
    })),
  });
}
