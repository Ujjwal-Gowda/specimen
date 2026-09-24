/* jsdom lacks these; import this before any app module (demos read matchMedia at import). */
globalThis.IntersectionObserver ??= class { observe() {} unobserve() {} disconnect() {} } as unknown as typeof IntersectionObserver;
window.matchMedia ??= (() => ({ matches: false, addEventListener() {}, removeEventListener() {} })) as unknown as typeof window.matchMedia;
