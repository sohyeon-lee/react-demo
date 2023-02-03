import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));
// render - pr
const PurchaseList = Loadable(lazy(() => import('pages/purchase-request/PurchaseList')));
const PurchaseRequest = Loadable(lazy(() => import('pages/purchase-request/PurchaseRequest')));
const PurchaseUnit = Loadable(lazy(() => import('pages/purchase-request/PurchaseUnit')));
// render - po
const BiddingList = Loadable(lazy(() => import('pages/purchase-order/BiddingList')));
const PurchaseOrderList = Loadable(lazy(() => import('pages/purchase-order/PurchaseOrderList')));
const PurchaseOrder = Loadable(lazy(() => import('pages/purchase-order/PurchaseOrder')));

// render - sample
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));
const PRPage = Loadable(lazy(() => import('pages/extra-pages/PRPage')));
const TableDemoPage = Loadable(lazy(() => import('pages/extra-pages/TableDemoPage')));
const TableSearchDemoPage = Loadable(lazy(() => import('pages/extra-pages/TableSearchDemoPage')));
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/purchase-request',
            element: <PurchaseRequest />
        },
        {
            path: '/purchase-request-list',
            element: <PurchaseList />
        },
        {
            path: '/purchase-unit',
            element: <PurchaseUnit />
        },
        {
            path: '/bidding-list',
            element: <BiddingList />
        },
        {
            path: '/purchase-order-list',
            element: <PurchaseOrderList />
        },
        {
            path: '/purchase-order',
            element: <PurchaseOrder />
        },
        {
            path: 'color',
            element: <Color />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'pr-page',
            element: <PRPage />
        },
        {
            path: 'table-demo-page',
            element: <TableDemoPage />
        },
        {
            path: 'table-search-demo-page',
            element: <TableSearchDemoPage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        }
    ]
};

export default MainRoutes;
