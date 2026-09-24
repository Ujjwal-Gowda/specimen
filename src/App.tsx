import { lazy, Suspense, type ComponentType } from 'react';
import { createHashRouter, RouterProvider } from 'react-router';
import { AppShell } from './components/AppShell';
import { NotFound } from './components/ui';

/* each page is its own chunk */
const page = (load: () => Promise<{ default: ComponentType }>) => {
  const Page = lazy(load);
  return <Suspense fallback={<div className="page" aria-busy="true" />}><Page /></Suspense>;
};

/* Hash routing: the site works from any static host (or a sub-folder) with no server
   rewrites, and brief share links (#/brief?s=…) carry everything in the fragment. */
const router = createHashRouter([{
  element: <AppShell />,
  children: [
    { index: true, element: page(() => import('./pages/Home')) },
    { path: 'languages', element: page(() => import('./pages/Languages')) },
    { path: 'language/:id', element: page(() => import('./pages/Language')) },
    { path: 'type', element: page(() => import('./pages/Type')) },
    { path: 'typeface/:id', element: page(() => import('./pages/Typeface')) },
    { path: 'components', element: page(() => import('./pages/Components')) },
    { path: 'component/:id', element: page(() => import('./pages/Component')) },
    { path: 'layouts', element: page(() => import('./pages/Layouts')) },
    { path: 'motion', element: page(() => import('./pages/Motion')) },
    { path: 'animation/:id', element: page(() => import('./pages/Animation')) },
    { path: 'color', element: page(() => import('./pages/Color')) },
    { path: 'purposes', element: page(() => import('./pages/Purposes')) },
    { path: 'purpose/:id', element: page(() => import('./pages/Purpose')) },
    { path: 'compare', element: page(() => import('./pages/Compare')) },
    { path: 'brief', element: page(() => import('./pages/Brief')) },
    { path: 'resources', element: page(() => import('./pages/Resources')) },
    { path: 'sources', element: page(() => import('./pages/Sources')) },
    { path: '*', element: <NotFound /> },
  ],
}]);

export default function App() {
  return <RouterProvider router={router} />;
}
