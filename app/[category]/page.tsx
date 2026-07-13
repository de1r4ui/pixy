import { getWallpapers } from "@/lib/wallpapers";
import DownloadButton from "@/components/DownloadButton";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const images = getWallpapers(category);

  if (images.length === 0) {
    notFound();
  }

  return (
    <main className="category-page">
      <Link href="/" className="back">
        ← Back
      </Link>

      <h1
        style={{
          marginTop: "25px",
          marginBottom: "30px",
          textTransform: "capitalize",
        }}
      >
        {category}
      </h1>

      <div className="wallpaper-grid">
        {images.map((image) => (
          <div key={image} className="wallpaper-card">
            <Image
              src={image}
              alt={category}
              width={600}
              height={400}
              className="wallpaper-image"
              draggable={false}
            />

            <div className="download-overlay">
              <DownloadButton image={image} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}