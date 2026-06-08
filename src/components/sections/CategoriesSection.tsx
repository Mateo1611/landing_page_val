import { Marquee } from "@/components/ui/Marquee";
import { categories } from "@/data/categories";

/**
 * Ambient category strip under the hero (Direction A §03). Sets the breadth of
 * the offer in a quiet loop without stealing focus from the reel that follows.
 */
export function CategoriesSection() {
  return (
    <section
      id="categorias"
      aria-label="Categorías que cubrimos"
      className="border-y border-[var(--line)] bg-[var(--color-void)] py-6"
    >
      <Marquee items={categories} />
    </section>
  );
}
