export const scale = {
  from: { opacity: 0, transformOrigin: "left", transform: "scale(2)" },
  to: { opacity: 1, transformOrigin: "left", transform: "scale(1)" },
};

export const fadeIn = {
  from: {
    transform: "translateY(10%)",
    overflow: "hidden",
    opacity: 0,
  },
  to: {
    transform: "translateY(0)",
    opacity: 1,
  },
};
