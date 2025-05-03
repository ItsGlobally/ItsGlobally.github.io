import { Card, CardBody } from "@heroui/card";
import { User } from "@heroui/user";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
        <CardBody>
          <User name="ItsGlobally" description="A junior high school student." avatarProps={{ src: "/avatar.jpg" }} />
        </CardBody>
      </Card>
    </div>
  );
}