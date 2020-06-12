import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {

    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {

    title: 'User',
    icon: 'person-outline' ,
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Products',
    icon: 'pie-chart-outline',
    children: [
      {
      title: 'list of Products' ,
      icon: 'list',
      link: '/pages/ui-features/icons',
    },
  {
    title: 'Add New Product' ,
    icon: 'layout-outline',
    link: '/pages/tables/product',
  },
    ],
  },
  {
    title: 'Providers',
    icon: 'pie-chart-outline',
    children: [
      {
      title: 'list of Providers' ,
      icon: 'list',
      link: '/pages/ui-features/typography',
    },
  {
    title: 'Add New Provider',
    link: '/pages/ui-features/grid',
    icon: 'person-outline',
  },
    ],
  },
  {
    title: 'Material Raw',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Add New Material Raw',
        link: '/pages/modal-overlays/dialog',
        icon: 'inbox-outline',
      },
      {
        title: 'list of Material Raw',
        icon: 'list',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
     
    ],
  },
  {
    title: 'Redaction',
    icon: 'text-outline',
    children: [
      {
        title: 'Rapport',
        link: '/pages/editors/ckeditor',
      },
      {
        title: 'Planning',
        link: '/pages/editors/tinymce',
      },
    ],
  },
  {
        icon: 'calendar-outline',
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
     
      {
        title: 'Calendar Kit',
        icon: 'calendar-outline',
        link: '/pages/extra-components/calendar-kit',
      },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },

  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
