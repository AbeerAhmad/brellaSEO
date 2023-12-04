import * as prismic from "@prismicio/client";

const apiEndpoint = process.env.REACT_APP_API_BRELLA_PRISMIC_API;
const accessToken = process.env.REACT_APP_API_ACCESS_TOKEN;

export const api = prismic.createClient(apiEndpoint, {
  accessToken: accessToken,
});
