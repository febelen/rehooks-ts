import { useKeyPress } from "./index";

export default function Component() {
  const altS = useKeyPress({ key: "s", alt: true });

  return <div>{altS ? "Saving document..." : "Type your text here..."}</div>;
}
