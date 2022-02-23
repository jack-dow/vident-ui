import * as React from 'react';

interface StoryContextProps {
  stories: { [key: string]: string };
  addStory: React.Dispatch<React.SetStateAction<{[key: string]: string[]}>>;
}

export const StoryContext = React.createContext<StoryContextProps>({
  stories: {},
  addStory: () => null,
});

export function storiesOf(path: string, Component: React.ReactNode) {
  console.log(path);
  return Component;
}
