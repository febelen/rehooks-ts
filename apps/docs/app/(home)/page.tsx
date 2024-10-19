import { GithubIcon, NpmIcon } from "@/components/icons";
import { Hero, Grid } from "@/components/internal";

const links = [
  {
    title: "Github",
    icon: <GithubIcon className="text-fd-foreground size-6 transform" />,
    link: "https://github.com/pyr33x/rehooks-ts",
  },
  {
    title: "NPM",
    icon: <NpmIcon className="text-fd-foreground size-6 transform" />,
    link: "https://www.npmjs.com/package/rehooks-ts",
  },
];

export default function HomePage() {
  return (
    <div className="h-full w-full">
      <main className="flex min-h-screen flex-col items-center justify-center px-8 py-14">
        <Hero />
        <Grid />
        <div className="mt-12 flex flex-row items-center justify-center gap-x-2">
          {links.map(({ title, link, icon }, index) => (
            <a
              key={index}
              rel="noopener noreferrer"
              href={link}
              title={title}
              target="_blank"
              aria-label="Find rehooks-ts"
              className="transform rounded-full border border-neutral-900 bg-neutral-900/80 p-4 duration-75 ease-in-out hover:scale-105 hover:border-neutral-800"
            >
              {icon}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
