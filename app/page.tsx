'use client';

import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";

export default function Home() {
  return (
      <div className="flex gap-2">
      <Button
        color="primary"
        variant="flat"
        onPress={() =>
          addToast({
            title: "Toast title",
            description: "Toast displayed successfully",
            color: "primary",
          })
        }
      >
        Primary
      </Button>
    </div>

  );
}
