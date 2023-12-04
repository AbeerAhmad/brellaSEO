export const truncate = (str, len) => {
  if (str.length <= len) return str;
  if (len <= 3) return str.slice(0, len - 3) + '...';
  return str.slice(0, len) + '...';
};
