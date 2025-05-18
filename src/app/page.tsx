import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button color="primary" size="lg" variant="shadow" radius="full">
        Click me
      </Button>
    </div>
  );
}
