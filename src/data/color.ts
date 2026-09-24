import type { ColorReference } from '../types';

export const color: ColorReference = {
  harmonies: [
    {
      name: 'Monochromatic',
      def: 'One hue in several tints, tones and shades. Calm and cohesive; relies on value contrast for hierarchy.',
      example: ['#0b2545', '#13315c', '#1d4e89', '#5a8bd6', '#c9dcf5'],
    },
    {
      name: 'Analogous',
      def: 'Two to four hues sitting next to each other on the colour wheel (e.g. yellow → orange → red). Harmonious and natural; pick one to dominate.',
      example: ['#f9c74f', '#f8961e', '#f3722c', '#f94144'],
    },
    {
      name: 'Complementary',
      def: 'Two hues opposite each other on the wheel (blue/orange, red/green). Maximum contrast and vibration; use one as the base and the other as a small accent.',
      example: ['#1d4ed8', '#e7ecf7', '#f97316'],
    },
    {
      name: 'Split-complementary',
      def: 'A base hue plus the two hues either side of its complement. Keeps strong contrast with less tension than a straight complement.',
      example: ['#2563eb', '#f59e0b', '#ef4444'],
    },
    {
      name: 'Triadic',
      def: 'Three hues evenly spaced 120° apart (e.g. the primaries red, yellow, blue — the Bauhaus palette). Lively; let one lead and the other two support.',
      example: ['#e63946', '#f4c430', '#1d3557'],
    },
    {
      name: 'Tetradic (Rectangle)',
      def: 'Two complementary pairs forming a rectangle on the wheel. Rich and hard to balance — keep one hue dominant and mute the rest.',
      example: ['#6d28d9', '#16a34a', '#facc15', '#db2777'],
    },
    {
      name: 'Square',
      def: 'Four hues evenly spaced 90° apart. The most varied harmony; common in playful styles like Memphis.',
      example: ['#ff5d8f', '#ffd23f', '#3bceac', '#5465ff'],
    },
  ],
  rules: [
    {
      name: '60-30-10 rule',
      def: 'Interior-design ratio applied to UI: ~60% dominant neutral (backgrounds), ~30% secondary (surfaces, text), ~10% accent (CTAs, highlights). Keeps an accent feeling special.',
    },
    {
      name: 'WCAG 2.2 contrast minimums',
      def: 'Level AA: 4.5:1 for body text, 3:1 for large text (≥ 24px, or ≥ 18.66px bold) and for UI components and graphical objects (SC 1.4.11). Level AAA: 7:1 body, 4.5:1 large (SC 1.4.6).',
    },
    {
      name: 'APCA (Accessible Perceptual Contrast Algorithm)',
      def: 'The candidate contrast method for WCAG 3. Reports Lc values (e.g. Lc 75 for body text, Lc 60 for content text, Lc 45 for large headlines) and accounts for font weight and polarity (light-on-dark vs dark-on-light). Useful as a second check alongside WCAG 2.',
    },
    {
      name: 'Use of Color (WCAG 1.4.1)',
      def: 'Never rely on colour alone to convey meaning — pair status colours with icons, text or patterns (errors get a message, links get an underline).',
    },
    {
      name: 'Semantic colour roles',
      def: 'Name colours by job, not hue: success (green), warning (amber), danger / error (red), info (blue), plus neutral. Keep them separate from the brand accent so a red brand does not read as an error.',
    },
    {
      name: 'State layers',
      def: 'Material Design 3 term: hover, focus, pressed and dragged states are shown by overlaying the content colour at fixed opacities (8%, 10%, 10%, 16%) instead of inventing new colours.',
    },
    {
      name: 'Tonal palettes (Material HCT)',
      def: 'Material 3 generates 13 tones (0–100) per key colour in the HCT space; roles like primary, on-primary, primary-container map to specific tones, which makes dynamic colour (Material You) and dark themes consistent.',
    },
    {
      name: 'Design tokens (primitive → semantic → component)',
      def: 'Three tiers: primitive tokens hold raw values (blue-600), semantic tokens give intent (color-action-primary), component tokens bind to parts (button-bg). Themes swap the semantic layer.',
    },
  ],
  models: [
    {
      name: 'HEX',
      def: 'Hexadecimal sRGB notation — the most common way to share colours; alpha via 8-digit #RRGGBBAA.',
      css: 'color: #3d5afe;',
    },
    {
      name: 'RGB',
      def: 'Red, green, blue channels 0–255 in sRGB; modern syntax uses spaces and a slash for alpha.',
      css: 'color: rgb(61 90 254 / 0.9);',
    },
    {
      name: 'HSL',
      def: 'Hue, saturation, lightness. Intuitive to tweak, but lightness is not perceptual — yellow and blue at the same L look very different.',
      css: 'color: hsl(231 99% 62%);',
    },
    {
      name: 'OKLCH',
      def: 'Perceptual lightness, chroma and hue (Björn Ottosson’s OKLab in polar form). Equal L steps look equally light, so it is the best space for generating palettes and accessible scales. Supports wide gamut.',
      css: 'color: oklch(0.58 0.22 268);',
    },
    {
      name: 'OKLab',
      def: 'The rectangular form of the same perceptual space (L, a, b). Best for smooth gradients and colour mixing without muddy midpoints.',
      css: 'background: linear-gradient(in oklab, #3d5afe, #ff6b6b);',
    },
    {
      name: 'Display P3',
      def: 'A wide-gamut RGB space (~25% more colours than sRGB) supported by modern Apple and many Android screens. Use for extra-vivid accents with an sRGB fallback.',
      css: 'color: color(display-p3 0.2 0.35 1);',
    },
    {
      name: 'HCT',
      def: 'Hue, Chroma, Tone — Google’s space behind Material 3 dynamic colour. Tone matches L* so contrast is predictable (tone difference ≥ 50 ≈ 4.5:1). Available through the Material Color Utilities library, not CSS.',
      css: '/* via @material/material-color-utilities */',
    },
  ],
  darkMode: [
    {
      name: 'Lighter surfaces for elevation',
      def: 'In dark themes, shadows barely show, so higher surfaces get lighter (Material overlays white at increasing opacity; Apple uses elevated background colours).',
    },
    {
      name: 'Desaturate and lighten accents',
      def: 'Fully saturated brand colours vibrate on dark grounds; shift them lighter and less chromatic (e.g. Material uses tone 80 of primary on dark instead of tone 40).',
    },
    {
      name: 'Avoid pure black (usually)',
      def: 'Near-black (#0b0b0f–#121212) reduces smearing and eye strain; true #000 is a deliberate choice for OLED battery saving or a high-drama look.',
    },
    {
      name: 'prefers-color-scheme',
      def: 'Media query that follows the OS setting. Define tokens once on :root and redefine only the tokens inside the dark query.',
    },
    {
      name: 'color-scheme property',
      def: '`color-scheme: light dark;` tells the browser to render form controls, scrollbars and the canvas in the matching scheme.',
    },
    {
      name: 'light-dark() function',
      def: 'CSS function that picks between two values based on the used colour scheme: `color: light-dark(#111, #eee);` (requires color-scheme to be set).',
    },
    {
      name: 'Offer a manual toggle',
      def: 'Store the choice (e.g. data-theme on <html>) and let it override the OS preference in both directions.',
    },
  ],
};
