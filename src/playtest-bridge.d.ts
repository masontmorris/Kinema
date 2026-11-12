// Types for the local playtest bridge (../bridge-three), which ships plain JavaScript.
declare module "@playtest/bridge-three" {
  import type { Camera, Object3D } from "three";

  export interface PlaytestBridge {
    attach(target: {
      sceneId: string;
      scene: Object3D;
      camera: Camera;
      canvas: HTMLCanvasElement;
      /** Each called on every observation; its value goes to public[alias]. */
      readers?: Record<string, () => null | boolean | number | string | number[]>;
    }): void;
  }

  /** Returns null unless the page URL carries ?playtest=<relay url>. */
  export function installBridge(options?: { engineVersion?: string; captureRateHz?: number }): PlaytestBridge | null;
}
