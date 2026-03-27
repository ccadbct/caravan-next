import { sanityClient } from "./client";
import type {
  SanityMenuCategory,
  SanityBlogPost,
  SanityTestimonial,
} from "./types";

export async function getAllMenuCategories(): Promise<SanityMenuCategory[]> {
  return sanityClient.fetch(
    `*[_type == "menuCategory"] | order(sortOrder asc) {
      _id,
      name,
      slug,
      description,
      icon,
      heroImage,
      sortOrder,
      metaTitle,
      metaDescription,
      "sections": *[_type == "menuSection" && references(^._id)] | order(sortOrder asc) {
        _id,
        name,
        tagline,
        sortOrder,
        "items": *[_type == "menuItem" && references(^._id)] | order(sortOrder asc) {
          _id,
          name,
          price,
          description,
          image,
          isAvailable,
          dietaryFlags
        }
      }
    }`
  );
}

export async function getMenuCategoryBySlug(
  slug: string
): Promise<SanityMenuCategory | null> {
  return sanityClient.fetch(
    `*[_type == "menuCategory" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      description,
      icon,
      heroImage,
      sortOrder,
      metaTitle,
      metaDescription,
      "sections": *[_type == "menuSection" && references(^._id)] | order(sortOrder asc) {
        _id,
        name,
        tagline,
        sortOrder,
        "items": *[_type == "menuItem" && references(^._id)] | order(sortOrder asc) {
          _id,
          name,
          price,
          description,
          image,
          isAvailable,
          dietaryFlags
        }
      }
    }`,
    { slug }
  );
}

export async function getAllBlogPosts(): Promise<SanityBlogPost[]> {
  return sanityClient.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      excerpt,
      metaTitle,
      metaDescription
    }`
  );
}

export async function getBlogPostBySlug(
  slug: string
): Promise<SanityBlogPost | null> {
  return sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      excerpt,
      body,
      tags,
      metaTitle,
      metaDescription
    }`,
    { slug }
  );
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return sanityClient.fetch(
    `*[_type == "testimonial"] | order(sortOrder asc) {
      _id,
      quote,
      author,
      source,
      rating,
      sortOrder
    }`
  );
}
