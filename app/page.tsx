import { getCategories } from "@/lib/wallpapers";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const categories = getCategories();

  return (
    <main className="page">
      <div className="hero">
        <h1>PIXY</h1>
        <p>Find Your Aesthetic</p>
      </div>

      <div className="grid">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/${category.slug}`}
            className="card"
          >
            <Image
              src={category.image}
              alt={category.title}
              width={600}
              height={350}
            />

            <div className="card-overlay">
              <h2>{category.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}