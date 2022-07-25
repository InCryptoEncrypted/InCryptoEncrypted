export type Axis =
  | "TopLeft"
  | "TopCenter"
  | "TopRight"
  | "Center"
  | "BottomLeft"
  | "BottomCenter"
  | "BottomRight";
export type Position = { x: number; y: number };
export type SpherePosition = Record<Axis, Position>;

export type OrbItem = {
  name: string;
  image: string | null;
  className?: string;
};
