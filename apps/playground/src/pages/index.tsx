import { Button } from '../components/Button/Button';
import { useBooleanToggle } from '@vident-ui/hooks';

export default function Docs() {
  const [checked, toggle] = useBooleanToggle();

  return (
    <div>
      <div>Playground!!</div>
      <Button>This is a button</Button>
    </div>
  );
}
