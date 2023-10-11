import { Sidebar } from "../interfaces/sidebar";

export const navSidebar: Sidebar[] = [
  {
    routeLink: '',
    icon: 'fal fa-home',
    label: 'Dashboard',
    role: 'user',
  },
  {
    routeLink: 'schools',
    icon: 'fal fa-book',
    label: 'Schools',
    role: 'admin'
  },
  {
    routeLink: 'task',
    icon: 'fal fa-box-open',
    label: 'Task',
    role: 'user',
    items: [
      {
        routeLink: 'task',
        label: 'Show All Task',
      },
      {
        routeLink: 'task-forms',
        label: 'Create New Task',
      },
    ],
  },
  {
    routeLink: 'category',
    icon: 'fal fa-chart-bar',
    label: 'Category',
    role: 'admin',
    items: [
      {
        routeLink: 'category',
        label: 'Show All Category',
      },
      {
        routeLink: 'products/level1.1',
        label: 'Create New Category',
      },
    ],
  },
  {
    routeLink: 'user-collections',
    icon: 'fal fa-home',
    label: 'User',
    role: 'admin',
  },
  // {
  //     routeLink: 'products',
  //     icon: 'fal fa-box-open',
  //     label: 'Products',
  //     items: [
  //         {
  //             routeLink: 'products/level1.1',
  //             label: 'Level 1.1',
  //             items: [
  //                 {
  //                     routeLink: 'products/level2.1',
  //                     label: 'Level 2.1',
  //                 },
  //                 {
  //                     routeLink: 'products/level2.2',
  //                     label: 'Level 2.2',
  //                     items: [
  //                         {
  //                             routeLink: 'products/level3.1',
  //                             label: 'Level 3.1'
  //                         },
  //                         {
  //                             routeLink: 'products/level3.2',
  //                             label: 'Level 3.2'
  //                         }
  //                     ]
  //                 }
  //             ]
  //         },
  //         {
  //             routeLink: 'products/level1.2',
  //             label: 'Level 1.2',
  //         }
  //     ]
  // },
  // {
  //     routeLink: 'statistics',
  //     icon: 'fal fa-chart-bar',
  //     label: 'Statistics'
  // },
  // {
  //     routeLink: 'coupens',
  //     icon: 'fal fa-tags',
  //     label: 'Coupens',
  //     items: [
  //         {
  //             routeLink: 'coupens/list',
  //             label: 'List Coupens'
  //         },
  //         {
  //             routeLink: 'coupens/create',
  //             label: 'Create Coupens'
  //         }
  //     ]
  // },
  // {
  //     routeLink: 'pages',
  //     icon: 'fal fa-file',
  //     label: 'Pages'
  // },
  // {
  //     routeLink: 'media',
  //     icon: 'fal fa-camera',
  //     label: 'Media'
  // },
  // {
  //     routeLink: 'settings',
  //     icon: 'fal fa-cog',
  //     label: 'Settings',
  //     expanded: true,
  //     items: [
  //         {
  //             routeLink: 'settings/profile',
  //             label: 'Profile'
  //         },
  //         {
  //             routeLink: 'settings/customize',
  //             label: 'Customize'
  //         }
  //     ]
  // },
];
