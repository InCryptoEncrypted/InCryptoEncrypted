import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRect } from "../../hooks/use-rect";
import { useWindowSize } from "../../hooks/use-window-size";
import { orbs, spherePosition } from "./constants";
import { Inner } from "./Innner";
import { Orb } from "./Orb";

export function Globe() {
  const ref = useRef<HTMLDivElement>(null);
  const rect = useRect(ref);

  const { scrollY } = useScroll();
  const { height: innerHeight } = useWindowSize();

  const rotate = useTransform(
    scrollY,
    [-innerHeight, innerHeight],
    [-180, 180]
  );

  return (
    <motion.div
      ref={ref}
      className="relative z-10 lg:ml-auto lg:w-4/5 border-4 border-gray-200 border-dashsed aspect-square rounded-full"
      style={{ rotate }}
    >
      <Orb
        orb={orbs.octopus}
        position={spherePosition.TopLeft}
        globeRect={rect}
        rotate={rotate}
      />
      <Orb
        orb={orbs.near}
        position={spherePosition.TopCenter}
        globeRect={rect}
        rotate={rotate}
      />
      <Orb
        orb={orbs.stacks}
        position={spherePosition.TopRight}
        globeRect={rect}
        rotate={rotate}
      />
      <Orb
        orb={orbs.inCryptoEncrypted}
        position={spherePosition.Center}
        globeRect={rect}
        rotate={rotate}
      />
      <Orb
        orb={orbs.solana}
        position={spherePosition.BottomRight}
        globeRect={rect}
        rotate={rotate}
      />
      <Orb
        orb={orbs.bitcoin}
        position={spherePosition.BottomCenter}
        globeRect={rect}
        rotate={rotate}
      />
      <Orb
        orb={orbs.stackersPool}
        position={spherePosition.BottomLeft}
        globeRect={rect}
        rotate={rotate}
      />
      <Inner />
    </motion.div>
  );
}
