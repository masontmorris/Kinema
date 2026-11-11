export type LutPresetFormat = "cube" | "3dl" | "image";

export interface LutPreset {
  name: string;
  file: string;
  format: LutPresetFormat;
}

export interface EnvironmentPreset {
  name: string;
  file: string | null;
}

// The original colour-grading presets were removed from this fork: their files were of unknown origin or under
// terms that forbid redistribution. Colour grading is off; the pipeline still supports LUTs if clean ones are added.
export const LUT_PRESETS: ReadonlyArray<LutPreset> = [];

export const LUT_NAMES: readonly string[] = LUT_PRESETS.map((preset) => preset.name);

export const ENV_PRESETS: ReadonlyArray<EnvironmentPreset> = [
  { name: "Room Environment", file: null },
  { name: "Sunrise", file: "blouberg_sunrise_2_1k.hdr" },
  { name: "Partly Cloudy", file: "kloofendal_48d_partly_cloudy_1k.hdr" },
  { name: "Venice Sunset", file: "venice_sunset_1k.hdr" },
  { name: "Royal Esplanade", file: "royal_esplanade_1k.hdr" },
  { name: "Studio", file: "studio_small_09_1k.hdr" },
  { name: "Night", file: "moonless_golf_1k.hdr" },
];

export const ENV_NAMES: readonly string[] = ENV_PRESETS.map((preset) => preset.name);
