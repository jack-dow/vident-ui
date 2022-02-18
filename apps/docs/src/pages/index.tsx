import { Button } from "@vident-ui/core";
import { useIsomorphicLayoutEffect } from "@vident-ui/hooks";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("Vident docs page");
  }, []);
  return (
    <div>
      <h1>Vident Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
