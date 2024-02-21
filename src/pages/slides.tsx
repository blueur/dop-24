import useIsBrowser from "@docusaurus/useIsBrowser";
import Reaveal from "../components/Reaveal";

export default function Slide() {
  const isBrowser = useIsBrowser();
  const urlSearchParams = new URLSearchParams(
    isBrowser ? window.location.search : undefined,
  );
  const name = (urlSearchParams.get("name") ?? "").replace(/[^a-z]/g, "");
  return <Reaveal name={name} full />;
}
