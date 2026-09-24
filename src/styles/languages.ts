/* One stylesheet per design language. Kept in its own module on purpose: Vite hoists
   import.meta.glob imports to the top of the importing file, so globbing inside
   styles/index.ts would put these rules *before* the .ui defaults and lose the cascade. */
import.meta.glob('./languages/*.css', { eager: true });
