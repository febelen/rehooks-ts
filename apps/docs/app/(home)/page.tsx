import { Hero, Grid } from "@/components/internal";

export default function HomePage() {
  return (
    <div className="h-full w-full">
      <main className="flex min-h-screen flex-col items-center justify-center px-8 py-14">
        <Hero />
        <Grid />
      </main>
    </div>
  );
}
