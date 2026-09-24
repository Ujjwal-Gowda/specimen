/* The demo modules read matchMedia at import time; give Node a stub. */
const g = globalThis as Record<string, unknown>;
g.matchMedia ??= () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
