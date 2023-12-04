export const getTextWidth = (text, font) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  context.font = font || getComputedStyle(document.body).font;

  return context.measureText(text).width;
};

export const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;

export const px2vh = (size, height = 1920) => `${(size / height) * 100}vh`;

export const px2rem = (size) => `${size / 16}rem`;

function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", {
    month: "long",
  });
}

export const dateFormat = (inputDate, format) => {
  //parse the input date
  const date = new Date(inputDate);

  //extract the parts of the date
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  //replace the month
  format = format.replace("MM", getMonthName(month));

  //replace the year
  if (format.indexOf("yyyy") > -1) {
    format = format.replace("yyyy", year.toString());
  } else if (format.indexOf("yy") > -1) {
    format = format.replace("yy", year.toString().substr(2, 2));
  }

  //replace the day
  format = format.replace("dd", day.toString().padStart(2, ""));

  return format;
};

export const screenWidth = window.innerWidth;

export const calculateMargin = (value) => {
  const percentage = (screenWidth * 100) / 2560;

  const margin = (value * percentage) / 100;
  //console.log(margin);

  return margin;
};

export const getCanoicalUrl = (pathName) => {
  const url = window.location.origin;
  const path = pathName;
  const canonicalUrl = `${url}${path}`;
  return canonicalUrl;
};
