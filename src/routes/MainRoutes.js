import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import { RequireAuth } from 'utils/requireAuth';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// workspace routing
const WorkSpace = Loadable(lazy(() => import('views/workspace/Detail')));

// ==============================|| DASHBOARD ROUTING ||============================== //

const DashboardRoutes = {
  path: '/',
  element: (
    <RequireAuth>
      <MainLayout page="dashboard" />
    </RequireAuth>
  ),
  children: [
    {
      path: '/',
      element: <DashboardDefault />,
    },
    {
      path: 'u',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: 'w',
      children: [
        {
          path: ':workSpaceId',
          element: <WorkSpace />,
        },
      ],
    },
  ],
};

export default DashboardRoutes;