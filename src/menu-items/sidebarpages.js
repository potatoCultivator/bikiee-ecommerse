const sidebarpages = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/default',
        // icon: icons.DashboardOutlined,
        breadcrumbs: false
      },
      {
        id: 'products',
        title: 'Products',
        type: 'item',
        url: '/products',
        // icon: icons.DashboardOutlined,
        breadcrumbs: false
      },
      {
        id: 'orders',
        title: 'Orders',
        type: 'item',
        url: '/orders',
        // icon: icons.DashboardOutlined,
        breadcrumbs: false
      },
    ]
  };
  
  export default sidebarpages;
  