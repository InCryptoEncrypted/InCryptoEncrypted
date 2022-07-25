import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRect } from "../../hooks/use-rect";
import { OrbItem, Position } from "./types";

export type OrbProps = {
  orb: OrbItem;
  position: Position;
  globeRect: DOMRect | undefined;
  rotate: MotionValue;
};

export function Orb({ position, orb, globeRect, rotate }: OrbProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rect = useRect(ref);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const inverseRotate = useTransform(rotate, (r) => -r);

  useEffect(() => {
    if (!rect || !globeRect) return;

    const setX = (posX: number) =>
      Math.min(1, Math.max(0, posX)) * globeRect.width - rect.width / 2;
    const setY = (posY: number) =>
      Math.min(1, Math.max(0, posY)) * globeRect.height - rect.height / 2;

    x.set(setX(position.x));
    y.set(setY(position.y));
  }, [rect, globeRect, position]);

  return (
    <motion.div
      ref={ref}
      className="group absolute h-12 w-12 sm:h-20 sm:w-20 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center cursor-pointer"
      style={{ x, y, rotate: inverseRotate }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 1.2,
      }}
    >
      <div className="hidden group-hover:block absolute -top-2 -translate-y-full px-4 py-0.5 text-xs font-medium border border-gray-100 bg-zinc-50 rounded-lg whitespace-nowrap">
        {orb.name}
      </div>
      <Image src={orb.image} width={60} height={60} />
    </motion.div>
  );
}
