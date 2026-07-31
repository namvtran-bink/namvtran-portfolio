export const locales = ["en", "vi"] as const;
export type Locale = (typeof locales)[number];

export const ui = {
  en: {
    localeName: "English",
    skip: "Skip to content",
    nav: {
      home: "Home",
      journey: "Journey",
      work: "Work",
      writing: "Writing",
      about: "About",
    },
    eyebrow: "Hello, I’m Nam",
    heroTitle: "SOFTWARE\nDEVELOPER",
    heroBody:
      "I build thoughtful software and keep a record of the lessons that shaped how I work.",
    explore: "Explore my journey",
    values: "HOW I WORK",
    interests: "CURRENTLY CURIOUS ABOUT",
    capabilities: "WHAT I BRING",
    journey: "MY JOURNEY",
    journeyIntro:
      "A preview of the shifts in judgment, ownership, and craft that have shaped me.",
    work: "SELECTED WORK",
    writing: "RECENT NOTES",
    contact: "LET’S KEEP\nIN TOUCH",
    contactBody:
      "I’m always happy to exchange ideas about building products, engineering craft, and learning in public.",
    email: "Email me",
    viewAll: "View all",
    placeholder: "Authoring prompt",
    readMore: "Read more",
    footer: "Built as a living record of work and growth.",
    emptyTitle: "This chapter is being written.",
    emptyBody:
      "The structure is ready. Privacy-safe stories will appear here as they are reviewed and published.",
  },
  vi: {
    localeName: "Tiếng Việt",
    skip: "Đi đến nội dung",
    nav: {
      home: "Trang chủ",
      journey: "Hành trình",
      work: "Công việc",
      writing: "Bài viết",
      about: "Giới thiệu",
    },
    eyebrow: "Xin chào, mình là Nam",
    heroTitle: "LẬP TRÌNH VIÊN\nPHẦN MỀM",
    heroBody:
      "Mình xây dựng phần mềm chỉn chu và ghi lại những bài học đã định hình cách mình làm việc.",
    explore: "Khám phá hành trình",
    values: "CÁCH MÌNH LÀM VIỆC",
    interests: "ĐANG TÌM HIỂU",
    capabilities: "ĐIỂM MẠNH",
    journey: "HÀNH TRÌNH",
    journeyIntro:
      "Những thay đổi trong tư duy, tinh thần trách nhiệm và tay nghề đã định hình mình.",
    work: "CÔNG VIỆC NỔI BẬT",
    writing: "GHI CHÉP GẦN ĐÂY",
    contact: "CÙNG GIỮ\nLIÊN LẠC",
    contactBody:
      "Mình luôn sẵn lòng trao đổi về xây dựng sản phẩm, kỹ nghệ phần mềm và việc chia sẻ kiến thức.",
    email: "Gửi email",
    viewAll: "Xem tất cả",
    placeholder: "Gợi ý biên soạn",
    readMore: "Đọc thêm",
    footer: "Được xây dựng như một hồ sơ sống về công việc và sự trưởng thành.",
    emptyTitle: "Chương này đang được viết.",
    emptyBody:
      "Cấu trúc đã sẵn sàng. Những câu chuyện an toàn để chia sẻ sẽ xuất hiện sau khi được rà soát.",
  },
} as const;

export function pathFor(locale: Locale, path = "") {
  const clean = path === "/" ? "" : path;
  return locale === "vi" ? `/vi${clean}` : clean || "/";
}

export function otherLocalePath(locale: Locale, pathname: string) {
  if (locale === "en") return pathname === "/" ? "/vi" : `/vi${pathname}`;
  const path = pathname.replace(/^\/vi/, "");
  return path || "/";
}
