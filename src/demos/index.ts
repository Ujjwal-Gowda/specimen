/* One live demo per animation id. The demos are imperative DOM code (plain JS modules)
   mounted by <DemoStage>; each returns a cleanup so Replay and unmounting tear down fully. */
import type { DemoFn } from './types';
import core from './core.js';
import extra from './extra.js';
import more from './more.js';

export const demos: Record<string, DemoFn> = { ...core, ...extra, ...more };
