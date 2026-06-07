import type { PropsWithChildren } from "react";

export function PinnedShowcase({ children }: PropsWithChildren) {
  // TODO: Use GSAP pinning in a later animation pass if it supports the final story.
  return <div>{children}</div>;
}

