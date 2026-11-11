# Credits and licences

The code in this repository is MIT licensed (see `LICENSE`). Its third-party assets and libraries are:

| What | Where | Source | Licence |
|---|---|---|---|
| Characters and animations | `public/assets/models/Universal Animation Library*` | [Quaternius](https://quaternius.com), Universal Animation Library 1 and 2 | CC0 1.0 (see each `License.txt`) |
| Smoke sprites | `public/assets/sprites/` | [Kenney](https://kenney.nl), Smoke Particles | CC0 1.0 (see `kenney_smoke_license.txt`) |
| Environment maps | `public/assets/env/*.hdr` | [Poly Haven](https://polyhaven.com): blouberg_sunrise_2, kloofendal_48d_partly_cloudy, moonless_golf, royal_esplanade, studio_small_09, venice_sunset | CC0 1.0 |
| Storm cloud model | `public/assets/models/cloud_lightning.glb` | "cloud lightning" by [Kyyy_24](https://sketchfab.com/luckyardrianto27), [Sketchfab](https://sketchfab.com/3d-models/cloud-lightning-d0e6edbfaedd40559a77611ade3c147b) | [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/) |
| Fonts | `@fontsource/inter`, `@fontsource/outfit` | Inter, Outfit | SIL Open Font License 1.1 |
| Draco decoder | `public/libs/draco/` | three.js `examples/jsm/libs/draco` (Google Draco) | Apache-2.0 |
| Basis transcoder | `public/libs/basis/` | three.js `examples/jsm/libs/basis` (Binomial Basis Universal) | Apache-2.0 |
| Audio | none in the repository | synthesized at runtime with Tone.js | n/a |

## Changes in this fork

- **Colour-grading files removed.** Every file in `public/assets/postfx/` was removed, and colour grading is off by default. The files were of unknown origin or under terms that forbid redistribution: several came from a commercial stock site whose terms say not to resell or redistribute them.
- **Analytics removed.** The Vercel web analytics script is gone.
- **Fonts bundled.** The fonts are bundled from `@fontsource` rather than loaded from Google Fonts.
- **Decoders served locally.** The Draco and Basis decoders are served from `public/libs/` rather than Google's CDN.

With these changes the game runs with no network access.

The VFX station's fire effect credits "inspiration" from the Shadertoy "Night Campfire" by Maurogik. The shader here is an independent rewrite on three.js's built-in noise, not a port of that code.
