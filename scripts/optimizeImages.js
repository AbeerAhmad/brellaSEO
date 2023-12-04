import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import imageminAvif from "imagemin-avif";

// Define the directory containing the images you want to optimize
const imageDir = "./src/assets/originalImages";

// Define the directory where optimized images will be saved
const outputDir = "./src/assets/img";

// Define the file types you want to optimize
const fileTypes = ["jpg", "jpeg", "png"];

// Define the quality of the optimized images
const quality = 50;

// Define the options for the imagemin-webp plugin
const webpOptions = {
  quality: quality,
};

// Define the options for the imagemin-avif plugin
const avifOptions = {
  quality: quality,
};

// Use imagemin to optimize the images
(async () => {
  const files = await imagemin([`${imageDir}/*.{${fileTypes.join(",")}}`], {
    destination: outputDir,
    plugins: [imageminWebp(webpOptions), imageminAvif(avifOptions)],
  });

  console.log(
    "Optimized images:",
    files.map((f) => f.destinationPath)
  );
})();
