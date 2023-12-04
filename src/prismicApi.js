import { api } from "./configuration/client-configuration.js";
import * as prismic from "@prismicio/client";

export const fetchByDocument = async (document, options) => {
  try {
    const response = await api.query(
      prismic.predicate.at("document.type", document),
      options
    );
    return response;
  } catch (error) {
    console.log(`Error calling prismic: ${error}`);
  }
};

export const fetchByIds = async (ids, options) => {
  try {
    const response = await api.get(
      prismic.predicate.in("document.id", ids),
      options
    );
    return response;
  } catch (error) {
    console.log(`Error calling prismic: ${error}`);
  }
};

export const fetchSingle = async (document) => {
  try {
    const response = await api.getSingle(document);
    return response;
  } catch (error) {
    console.log(`Error calling prismic: ${error}`);
  }
};

export const fetchByUID = async (document, uid) => {
  try {
    const response = await api.getByUID(document, uid);
    return response;
  } catch (error) {
    console.log(`Error calling prismic: ${error}`);
  }
};

export const fetchByTags = async (tags, options) => {
  try {
    const response = await api.get(
      prismic.predicate.at("document.tags", tags),
      options
    );
    return response;
  } catch (error) {
    console.log(`Error calling prismic: ${error}`);
  }
};
