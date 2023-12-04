export const linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === "blog") {
    return `/blog/${doc.uid}`;
  }

  if (doc.type === "portfolio") {
    return `/portfolio/${doc.uid}`;
  }

  // Backup for all other types
  return "/";
};
