import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/pk/Nav";
import { Hero } from "@/components/pk/Hero";
import { Marquee } from "@/components/pk/Marquee";
import { Lore } from "@/components/pk/Lore";
import { Gallery } from "@/components/pk/Gallery";
import { Community } from "@/components/pk/Community";
import { Footer } from "@/components/pk/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PAIN KILLER ($PAINK) — The Cure For Your Portfolio Pain" },
      {
        name: "description",
        content:
          "PAIN KILLER is the armed hamster meme coin curing portfolio pain. Lore, a vault of hamster memes, and the squad on X.",
      },
      { property: "og:title", content: "PAIN KILLER ($PAINK) — Meme Coin With A Tiny Gun" },
      {
        property: "og:description",
        content:
          "One angry hamster. One tiny gun. Zero utility. Join the $PAINK squad and kill the pain.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "virtual-protocol-site-verification",
        content: "b43945bd31a57054c81e79c4d377ba2d",

      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Lore />
      <Gallery />
      <Community />
      <Marquee text="PAIN KILLER | $PAINK" />
      <Footer />
    </main>
  );
}
