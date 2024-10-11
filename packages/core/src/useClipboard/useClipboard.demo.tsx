import { useClipboard } from "./index";

export default function Component() {
  const { copy, isCopied } = useClipboard();

  return (
    <div>
      <button onClick={() => copy("Hello, world!")}>
        Copy "Hello, world!"
      </button>
      <p>Is copied: {isCopied ? "Yes" : "No"}</p>
    </div>
  );
}
