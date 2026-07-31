import { getCollection, getEntry } from "astro:content";
import type { Locale } from "./i18n";
import type { CollectionEntry } from "astro:content";

export async function getProfile(locale: Locale) {
  const entry = await getEntry("profile", locale);
  if (!entry) throw new Error(`Missing profile content for locale: ${locale}`);
  return entry.data;
}

export function getPublicEntries(
  collection: "journey",
  locale: Locale,
): Promise<CollectionEntry<"journey">[]>;
export function getPublicEntries(
  collection: "work",
  locale: Locale,
): Promise<CollectionEntry<"work">[]>;
export async function getPublicEntries(
  collection: "journey" | "work",
  locale: Locale,
) {
  const entries = await getCollection(
    collection,
    ({ data }) => data.locale === locale && data.visibility === "public",
  );
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export async function getPublishedWriting(locale: Locale) {
  const entries = await getCollection(
    "writing",
    ({ data }) =>
      data.locale === locale && data.visibility === "public" && !data.draft,
  );
  return entries.sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  );
}
