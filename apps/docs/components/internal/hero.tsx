"use client";

import { useClipboard } from "rehooks-ts";
import { Button } from "@/components/ui";
import Link from "next/link";

export function Hero() {
  const { copy, isCopied } = useClipboard();
  return (
    <>
      <h1 className="text-balance text-4xl font-black lg:text-5xl">
        Welcome to{" "}
        <span className="animate-background-shine inline-flex transform bg-[linear-gradient(110deg,#0062D1,45%,#9d9ffc,55%,#0062D1)] bg-[length:250%_100%] bg-clip-text text-transparent">
          Rehooks
        </span>
      </h1>
      <p className="dark:text-fd-muted-foreground/50 text-fd-muted-foreground mt-1 text-balance text-base lg:text-xl">
        An optimized, lightweight, and reusable react production-ready hooks
        library written in TypeScript.
      </p>
      <div className="mt-5 flex flex-row flex-wrap justify-center gap-2">
        <Button
          variant="hero"
          size="circular"
          onClick={() => copy("npm install rehooks-ts")}
          className="font-mono"
        >
          {isCopied ? "Copied to Clipboard!" : "$ npm install rehooks-ts"}
        </Button>
        <Link href="/docs" className="outline-none ring-0">
          <Button size="circular" variant="secondary" className="font-mono">
            Explore Docs
          </Button>
        </Link>
      </div>
    </>
  );
}
