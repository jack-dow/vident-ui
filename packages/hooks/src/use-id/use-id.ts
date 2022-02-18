import { useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';
import { useIsClient } from '../use-is-client/use-is-client';

let defaultId = 0;
function generateUuid() {
  defaultId += 1;
  return defaultId.toString();
}

export function useId(id?: string, generateId: () => string = generateUuid) {
  const ready = useIsClient();
  const [generatedId, setGeneratedId] = useState(ready ? generateId : null);

  useIsomorphicEffect(() => {
    if (generatedId === null) setGeneratedId(generateId());
  }, [generatedId]);

  return id || generatedId != null ? generatedId : undefined;
}
