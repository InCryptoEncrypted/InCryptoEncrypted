import { SpherePosition } from "./types";

const start = 0;
const closeX = 0.067;
const farX = 0.933;
const mid = 0.5;
const closeY = 0.25;
const farY = 0.75;
const end = 1;

export const spherePosition: SpherePosition = {
  TopLeft: { x: closeX, y: closeY },
  TopCenter: { x: mid, y: start },
  TopRight: { x: farX, y: closeY },
  Center: { x: mid, y: mid },
  BottomLeft: { x: closeX, y: farY },
  BottomCenter: { x: mid, y: end },
  BottomRight: { x: farX, y: farY },
};

export const orbs = {
  near: {
    name: "NEAR Protocol",
    image: "/images/near.png",
  },
  stacks: {
    name: "Stacks",
    image: "/images/stacks.png",
  },
  solana: {
    name: "Solana",
    image: "/images/solana.png",
  },
  bitcoin: {
    name: "Bitcoin",
    image: "/images/bitcoin.png",
  },
  octopus: {
    name: "Octopus Network",
    image: "/images/octopus.png",
  },
  stackersPool: {
    name: "Stackers Pool",
    image: "/images/stackerspool.jpg",
    className: "rounded-full",
  },
  inCryptoEncrypted: {
    name: "InCryptoEncrypted",
    image: null,
  },
};
