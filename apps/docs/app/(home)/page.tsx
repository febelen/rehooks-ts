export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center px-8 text-center">
      <h1 className="text-balance text-4xl font-black lg:text-5xl">
        Welcome to{" "}
        <span className="animate-background-shine inline-flex transform bg-[linear-gradient(110deg,#0062D1,45%,#9d9ffc,55%,#0062D1)] bg-[length:250%_100%] bg-clip-text text-transparent">
          Rehooks
        </span>
      </h1>
      <p className="mt-1 text-balance text-base text-white/50 lg:text-xl">
        An optimized, lightweight, and flexible react production-ready hooks
        library written in TypeScript.
      </p>
    </main>
  );
}
