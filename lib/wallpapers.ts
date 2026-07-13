import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

function isImage(file: string) {
  return IMAGE_EXTENSIONS.some((ext) => file.toLowerCase().endsWith(ext));
}

export function getWallpapers(category: string) {
  const folder = path.join(process.cwd(), "public", "images", category);

  if (!fs.existsSync(folder)) {
    return [];
  }

  return fs
    .readdirSync(folder)
    .filter((file) => {
      const lower = file.toLowerCase();

      // Не показываем cover в галерее
      if (lower.startsWith("cover.")) return false;

      return isImage(file);
    })
    .map((file) => `/images/${category}/${file}`);
}

export function getCategories() {
  const folder = path.join(process.cwd(), "public", "images");

  if (!fs.existsSync(folder)) {
    return [];
  }

  return fs
    .readdirSync(folder)
    .filter((file) =>
      fs.statSync(path.join(folder, file)).isDirectory()
    )
    .map((category) => {
      const categoryFolder = path.join(folder, category);

      const files = fs
        .readdirSync(categoryFolder)
        .filter(isImage);

      // Ищем cover
      const cover =
        files.find((f) => f.toLowerCase().startsWith("cover.")) ||
        files[0];

      return {
        slug: category,
        title: category.charAt(0).toUpperCase() + category.slice(1),
        image: `/images/${category}/${cover}`,
      };
    });
}