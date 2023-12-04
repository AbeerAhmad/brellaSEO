import * as prismic from "@prismicio/client";
import { readFileSync, writeFileSync } from "fs";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
//require("dotenv").config({ path: resolve(__dirname, "../../.env") });

const apiEndpoint = process.env.REACT_APP_API_BRELLA_PRISMIC_API;
const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;
const blogPostsPlaceholder = "${{blogPosts}}";
const api = prismic.createClient(apiEndpoint, {
  accessToken,
  fetch,
});

async function fetchByDocument(document, options) {
  try {
    const response = await api.get(
      prismic.predicate.at("document.type", document),
      options
    );
    return response;
  } catch (error) {
    console.log(`Error calling prismic: ${error}`);
  }
}

async function fetchAllPosts() {
  let page = 1;
  let total = 2;
  const posts = [];

  while (page <= total) {
    try {
      const response = await fetchByDocument("blog", {
        orderings: "my.blog.published_date desc",
        pageSize: 100,
        page,
      });
      if (!response || !response.total_pages) {
        total = 0;
        continue;
      }
      total = response.total_pages;
      page++;
      posts.push(...response.results);
    } catch (error) {
      total = 0;
    }
  }
  return posts;
}

const loadTemplate = () => {
  return readFileSync("./scripts/sitemap/sitemap.template.xml", "utf8");
};

const postTemplate = (url) => `
    <url>
        <loc>https://brella.com/blog/${url}</loc>
        <changefreq>weekly</changefreq>
    </url>
`;

const updateSitemapFile = (sitemap) => {
  writeFileSync("./public/sitemap.xml", sitemap, "utf8");
};

fetchAllPosts().then((posts) => {
  let sitemap = loadTemplate();
  const entries = posts.map((p) => postTemplate(p.uid)).join("");
  sitemap = sitemap.replace(blogPostsPlaceholder, entries);
  updateSitemapFile(sitemap);
});
