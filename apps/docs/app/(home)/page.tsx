import { Hero, Grid } from "@/components/internal";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center px-8 py-32 text-center">
      <Hero />
      <Grid />
    </main>
  );
}
