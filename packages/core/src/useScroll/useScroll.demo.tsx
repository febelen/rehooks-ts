import { useScroll } from "./index";

export default function Component() {
  const scrolled = useScroll(100);
  return <div>{scrolled ? "Scrolled" : "Not scrolled"}</div>;
}
