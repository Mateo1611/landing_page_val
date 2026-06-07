import type { ComponentProps } from "react";

import { Button } from "@/components/ui/Button";

export function MagneticButton(props: ComponentProps<typeof Button>) {
  // TODO: Add magnetic pointer behavior only when motion direction is approved.
  return <Button {...props} />;
}

