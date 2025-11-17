import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export const getProductBySlug = async (slug: string) => {
  const PRODUCT_BY_SLUG_QUERY = defineQuery(
    `*[_type == "product" && slug.current == $slug] | order(name asc)[0]`
  );

  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_SLUG_QUERY,
      params: {
        slug,
      },
    });

    return product?.data || null;
  } catch (error) {
    console.error("error fetching product by slug", error);
  }
};

export const getAllCategories = async () => {
  const CATEGORIES_QUERY = defineQuery(
    `*[_type=='category'] | order(name asc) `
  );
  try {
    const categories = await sanityFetch({
      query:CATEGORIES_QUERY
    });
    return categories.data || []
  } catch (error) {
    console.error("error fetchig product");
    return []
  }
};
