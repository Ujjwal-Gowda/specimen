// @vitest-environment jsdom
import './dom-shim';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Compare from '../src/pages/Compare';
import { AtlasProvider } from '../src/state/AtlasContext';

const renderAt = (url: string) => render(
  <AtlasProvider>
    <RouterProvider router={createMemoryRouter([{ path: '/compare', element: <Compare /> }], { initialEntries: [url] })} />
  </AtlasProvider>,
);

afterEach(() => { localStorage.clear(); vi.restoreAllMocks(); });

describe('Compare page', () => {
  it('adopts ?ids= once and settles (no update loop), de-duplicating ids', async () => {
    const setItem = vi.spyOn(Storage.prototype, 'setItem');
    renderAt('/compare?ids=swiss,swiss,bento,not-a-language');
    await waitFor(() => expect(JSON.parse(localStorage.getItem('specimen-compare') ?? '[]')).toEqual(['swiss', 'bento']));
    const writes = setItem.mock.calls.filter(([k]) => k === 'specimen-compare').length;
    await new Promise(r => setTimeout(r, 200));
    expect(setItem.mock.calls.filter(([k]) => k === 'specimen-compare').length).toBe(writes);
    expect(screen.getAllByRole('button', { name: /Remove .* from compare/ })).toHaveLength(2);
  });
});
