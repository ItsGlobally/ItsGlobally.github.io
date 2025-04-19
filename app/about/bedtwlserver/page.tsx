import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h1 className={title() + " whitespace-nowrap text-2xl md:text-4xl"}>
        bedtwL Server – Explore exciting game modes: Free-for-All and SMP worlds.
      </h1>

      {/* FFA Card */}
      <Card className="max-w-3xl w-full">
        <CardBody className="flex flex-col items-center text-center gap-2">
          <h2 className="text-2xl font-bold">FFA: Ultimate PvP Experience</h2>
          <p>Engage in thrilling PvP combat with these exciting features:</p>
          <ul className="text-left list-disc list-inside">
            <li>
              <strong>Hotbar Customization:</strong> Tailor your loadout to suit
              your playstyle.
            </li>
            <li>
              <strong>Iconic Maps:</strong> Fight on maps inspired by Hypixel's
              Bedwars.
            </li>
            <li>
              <strong>Dynamic Gameplay:</strong> Enjoy regular map rotations for
              endless variety.
            </li>
            <li>
              <strong>Explosive Combat:</strong> Use fireballs to obliterate
              your opponents.
            </li>
            <li>
              <strong>Skill Action:</strong> Kill players, earn skill points,
              and get the stronger skill to fight your opponents.
            </li>
          </ul>
        </CardBody>
      </Card>

      {/* SMP1 Card */}
      <Card className="max-w-3xl w-full">
        <CardBody className="flex flex-col items-center text-center gap-2">
          <h2 className="text-2xl font-bold">SMP1: Vanilla Survival</h2>
          <p>Embrace the classic Minecraft experience:</p>
          <ul className="text-left list-disc list-inside">
            <li>
              <strong>Pure Gameplay:</strong> No plugins, just pure survival.
            </li>
            <li>
              <strong>Community Driven:</strong> Build, explore, and thrive with
              your friend. Or else do it yourself.
            </li>
            <li>
              <strong>Timeless Adventure:</strong> Rediscover the original charm
              of Minecraft.
            </li>
          </ul>
        </CardBody>
      </Card>

      {/* SMP4 Card */}
      <Card className="max-w-3xl w-full">
        <CardBody className="flex flex-col items-center text-center gap-2">
          <h2 className="text-2xl font-bold">SMP4: Dream Craft</h2>
          <p>Take survival to the next level with enhanced features:</p>
          <ul className="text-left list-disc list-inside">
            <li>
              <strong>Jobs System:</strong> Earn coins by working in-game
              professions.
            </li>
            <li>
              <strong>Land Protection:</strong> Secure your builds with a land
              claim system. (It&apos;s broken now.)
            </li>
            <li>
              <strong>Armored Elytra:</strong> Soar through the skies with added
              defense.
            </li>
            <li>
              <strong>Dynamic Economy:</strong> Trade and grow wealth with
              in-game currency.
            </li>
          </ul>
        </CardBody>
      </Card>

      {/* SMP5 Card */}
      <Card className="max-w-3xl w-full">
        <CardBody className="flex flex-col items-center text-center gap-2">
          <h2 className="text-2xl font-bold">SMP5: NoEnd Survival</h2>
          <p>Challenge yourself with extended survival features:</p>
          <ul className="text-left list-disc list-inside">
            <li>
              <strong>Extended Enchantments:</strong> Upgrade your gear beyond
              limits.
            </li>
            <li>
              <strong>Custom Challenges:</strong> Face unique gameplay twists.
            </li>
            <li>
              <strong>Endless Adventures:</strong> A survival experience without
              The End.
            </li>
          </ul>
        </CardBody>
      </Card>

      {/* Discord Button */}
      <a
        href="https://discord.gg/dqcmxEKCEH"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button color="primary">Join Discord</Button>
      </a>
      {/* Original Website Button */}
      <a href="https://bedtwl.com/" target="_blank" rel="noopener noreferrer">
        <Button color="primary">Original Website</Button>
      </a>
    </div>
  );
}
