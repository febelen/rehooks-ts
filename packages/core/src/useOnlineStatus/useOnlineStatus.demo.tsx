import { useOnlineStatus } from "./index";

export default function Component() {
  const isOnline = useOnlineStatus();

  return <p>Is online: {isOnline ? "Yes" : "No"}</p>;
}
