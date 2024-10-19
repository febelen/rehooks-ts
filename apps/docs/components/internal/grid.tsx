import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
} from "@/components/ui";
import { File, Folder, Files } from "fumadocs-ui/components/files";

interface Card {
  id: number;
  name: string;
  description: React.ReactNode | string;
  link?: string;
  content?: React.ReactNode | string;
  footer?: string;
  class?: string;
}

const cards: Card[] = [
  {
    id: 1,
    name: "Why Rehooks?",
    description:
      "Rehooks is a collection of reusable hooks that can be used to simplify your codebase and improve performance. It provides a wide range of hooks...",
    class: "max-w-md",
  },
  {
    id: 2,
    name: "Performance",
    description:
      "Rehooks bundle size is just only 32kb, optimized and fully tested for incredible performance.",
    content: (
      <Files className="select-none">
        <Folder name="dist" defaultOpen>
          <File name="index.mts" />
          <File name="index.d.ts" />
          <File name="index.js" />
          <File name="index.mjs" />
        </Folder>
        <File name="package.json" />
      </Files>
    ),
    class: "max-w-md row-span-2",
  },
  {
    id: 3,
    name: "Open-Source",
    description:
      "The decision of open-sourcing the library was helping community to grow, repo is licensed under MIT license and PRs are welcomed.",
    class: "max-w-md",
  },
];

export function Grid() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-2 gap-y-3 text-center md:grid-cols-2">
      {cards.map((card) => (
        <Card key={card.id} className={card.class}>
          <CardHeader>
            <CardTitle className="text-neutral-800 dark:text-neutral-50">
              {card.name}
            </CardTitle>
            <CardDescription className="text-neutral-800 dark:text-neutral-50/70">
              {card.description}
            </CardDescription>
          </CardHeader>
          {card.content && <CardContent>{card.content}</CardContent>}
        </Card>
      ))}
    </div>
  );
}
