import { Sidebar } from "../interfaces/sidebar";

export const navSidebar: Sidebar[] = [
  // {
  //   routeLink: '',
  //   icon: 'fal fa-home',
  //   label: 'Dashboard',
  //   role: 'user',
  // },
  {
    routeLink: 'todo',
    icon: 'fal fa-box-open',
    label: 'Task',
    role: 'user',
    items: [
      {
        routeLink: 'todo',
        label: 'Show All Task',
      },
      {
        routeLink: 'todo-form',
        label: 'Create New Task',
      },
    ],
  },
  {
    routeLink: 'users',
    icon: 'fal fa-home',
    label: 'User',
    role: 'admin',
  },
];
