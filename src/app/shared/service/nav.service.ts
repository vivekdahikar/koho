import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

export interface Menu {
  headTitle1?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
}
@Injectable({
  providedIn: 'root',
})
export class NavService {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  // Search Box
  public search: boolean = false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Full screen
  public fullScreen: boolean = false;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
        }
        if (evt.target.innerWidth < 1199) {
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
      });
    }
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    {
      headTitle1: 'General',
    },
    {
      title: 'Dashboards',
      icon: 'home',
      type: 'sub',
      badgeType: 'light-primary',
      badgeValue: '2',
      active: true,
      children: [
        { path: '/dashboard/default', title: 'Default', type: 'link' },
        { path: '/dashboard/ecommerce', title: 'Ecommerce', type: 'link' },
      ],
    },
    {
      title: 'Widgets',
      icon: 'widgets',
      type: 'sub',
      active: false,
      children: [
        { path: '/widgest/general', title: 'General', type: 'link' },
        { path: '/widgest/chart', title: 'Chart', type: 'link' },
      ],
    },
    {
      title: 'Page layout',
      icon: 'page',
      type: 'sub',
      active: false,
      children: [
        { path: '/page-layout/boxed', title: 'boxed', type: 'link' },
        { path: '/page-layout/Rtl', title: 'Rtl', type: 'link' },

        {
          path: '/page-layout/footer-light',
          title: 'footer-light',
          type: 'link',
        },
      ],
    },
    {
      headTitle1: 'Applications',
    },

    {
      title: 'Project',
      icon: 'project',
      type: 'sub',
      badgeType: 'light-info',
      badgeValue: 'New',
      active: false,
      children: [
        { path: '/project/project-list', title: 'Project List', type: 'link' },
        { path: '/project/create-new', title: 'Create New', type: 'link' },
      ],
    },

    {
      title: 'E-Commerce',
      icon: 'ecommerce',
      type: 'sub',
      active: false,
      children: [
        { path: '/e-commerce/product', title: 'Product', type: 'link' },
        {
          path: '/e-commerce/product-page',
          title: 'Product Page',
          type: 'link',
        },
        { path: '/e-commerce/add-product', title: 'Add Product', type: 'link' },

        {
          path: '/e-commerce/product-list',
          title: 'Product List',
          type: 'link',
        },
        {
          path: '/e-commerce/payment-details',
          title: 'Payment Details',
          type: 'link',
        },

        { path: '/e-commerce/invoice', title: 'Invoice', type: 'link' },
        { path: '/e-commerce/cart', title: 'Cart', type: 'link' },
        { path: '/e-commerce/wishlist', title: 'Wishlist', type: 'link' },
        { path: '/e-commerce/checkout', title: 'Checkout', type: 'link' },
        { path: '/e-commerce/pricing', title: 'Pricing', type: 'link' },
      ],
    },

    {
      path: '/file-manager',
      title: 'File Manager',
      icon: 'file',
      active: true,

      type: 'link',
      bookmark: true,
    },
    {
      title: 'Email',
      icon: 'email',
      type: 'sub',
      active: false,
      children: [
        { path: '/email/mail-inbox', title: 'Mail Inbox', type: 'link' },
        { path: '/email/read-email', title: 'Read Mail', type: 'link' },
        { path: '/email/compose', title: 'Compose', type: 'link' },
      ],
    },
    {
      title: 'Chat',
      icon: 'chat',
      type: 'sub',
      active: false,
      children: [
        { path: '/chat/chat-app', title: 'Chat App', type: 'link' },
        { path: '/chat/video-chat', title: 'Video Chat', type: 'link' },
      ],
    },
    {
      title: 'Users',
      icon: 'users',
      type: 'sub',
      active: false,
      children: [
        { path: '/users/users-profile', title: 'Users Profile', type: 'link' },
        { path: '/users/users-edit', title: 'Users Edit', type: 'link' },
        { path: '/users/users-cards', title: 'Users Cards', type: 'link' },
      ],
    },
    { path: '/bookmark', title: 'Bookmark', icon: 'bookmark', type: 'link' },
    {
      path: '/contacts',
      title: 'Contacts',
      icon: 'contacts',
      type: 'link',
      bookmark: true,
    },
    {
      path: '/task',
      title: 'Task',
      icon: 'task',
      type: 'link',
      bookmark: true,
    },

    { path: '/calender', title: 'Calender', icon: 'calender', type: 'link' },
    { path: '/social-app', title: 'Social App', icon: 'social', type: 'link' },
    {
      path: '/to-do',
      title: 'To-Do',
      icon: 'todo',
      type: 'link',
      bookmark: true,
    },
    {
      path: '/search-website',
      title: 'Search Website',
      icon: 'website',
      type: 'link',
    },
    {
      headTitle1: 'Forms & Table',
    },

    {
      title: 'Forms',
      icon: 'forms',
      type: 'sub',
      active: false,
      children: [
        {
          title: 'Form Controls',
          type: 'sub',
          active: false,
          children: [
            {
              path: '/forms/form-controls/form-validation',
              title: 'Form Validation',
              type: 'link',
            },
            {
              path: '/forms/form-controls/base-inputs',
              title: 'Base Inputs',
              type: 'link',
            },
            {
              path: '/forms/form-controls/checkbox-radio',
              title: 'Checkbox & Radio',
              type: 'link',
            },
            {
              path: '/forms/form-controls/input-groups',
              title: 'Input Groups',
              type: 'link',
            },
            {
              path: '/forms/form-controls/mega-options',
              title: 'Mega Options',
              type: 'link',
            },
          ],
        },
        {
          title: 'Form Widgets',
          type: 'sub',
          active: false,
          children: [
            {
              path: '/forms/form-widgets/timepicker',
              title: 'Timepicker',
              type: 'link',
            },
            {
              path: '/forms/form-widgets/date-timepicker',
              title: 'DateTimePicker',
              type: 'link',
            },
            {
              path: '/forms/form-widgets/date-rangepicker',
              title: 'DateRangePicker',
              type: 'link',
            },
            {
              path: '/forms/form-widgets/touchspin',
              title: 'Touchspin',
              type: 'link',
            },
            {
              path: '/forms/form-widgets/select2',
              title: 'Select2',
              type: 'link',
            },
            {
              path: '/forms/form-widgets/switch',
              title: 'Switch',
              type: 'link',
            },
            {
              path: '/forms/form-widgets/typeahead',
              title: 'Typeahead',
              type: 'link',
            },
            {
              path: '/forms/form-widgets/clipboard',
              title: 'Clipboard',
              type: 'link',
            },
          ],
        },
        {
          title: 'Form Layout',
          type: 'sub',
          active: false,
          children: [
            {
              path: '/forms/form-layout/default-forms',
              title: 'Default Forms',
              type: 'link',
            },
            {
              path: '/forms/form-layout/form-wizard1',
              title: 'Form Wizard 1',
              type: 'link',
            },
            {
              path: '/forms/form-layout/form-wizard2',
              title: 'Form Wizard 2',
              type: 'link',
            },
            {
              path: '/forms/form-layout/form-wizard3',
              title: 'Form Wizard 3',
              type: 'link',
            },
          ],
        },
      ],
    },
    {
      title: 'Tables',
      icon: 'tables',
      type: 'sub',
      active: true,
      children: [
        {
          path: '/tables/bootstrap-tables/basic-tables',
          title: 'Bootstrap Tables',
          type: 'link',
        },
        {
          path: '/tables/data-tables/basic-init',
          title: 'Basic Init',
          type: 'link',
        },
      ],
    },
    {
      headTitle1: 'Components',
    },
    {
      title: 'Ui Kits',
      icon: 'uikits',
      type: 'sub',
      active: false,
      children: [
        { path: '/ui-kits/typography', title: 'Typography', type: 'link' },
        { path: '/ui-kits/avatars', title: 'avatars', type: 'link' },
        {
          path: '/ui-kits/helpers-classes',
          title: 'Helpers Classes',
          type: 'link',
        },
        { path: '/ui-kits/grid', title: 'Grid', type: 'link' },
        { path: '/ui-kits/tag-and-pills', title: 'Tag & Pills', type: 'link' },
        { path: '/ui-kits/progress', title: 'Progress', type: 'link' },
        { path: '/ui-kits/modal', title: 'Modal', type: 'link' },
        { path: '/ui-kits/alert', title: 'Alert', type: 'link' },
        { path: '/ui-kits/popover', title: 'Popover', type: 'link' },
        { path: '/ui-kits/tooltip', title: 'Tooltip', type: 'link' },
        { path: '/ui-kits/toaster', title: 'Toaster', type: 'link' },
        { path: '/ui-kits/spinners', title: 'Spinners', type: 'link' },
        { path: '/ui-kits/dropdown', title: 'Dropdown', type: 'link' },
        { path: '/ui-kits/according', title: 'According', type: 'link' },
        {
          path: '/ui-kits/tabs',
          title: 'Tabs',
          type: 'sub',
          children: [
            {
              path: '/ui-kits/tabs/bootstrap-tabs',
              title: 'Bootstraps Tabs',
              type: 'link',
            },
            {
              path: '/ui-kits/tabs/line-tabs',
              title: 'Line tabs',
              type: 'link',
            },
          ],
        },
        { path: '/ui-kits/lists', title: 'Lists', type: 'link' },
      ],
    },
    {
      title: 'Bonus Ui',
      icon: 'bonusui',
      type: 'sub',
      active: false,
      children: [
        { path: '/bonus-ui/scrollable', title: 'Scrollable', type: 'link' },
        { path: '/bonus-ui/rating', title: 'Rating', type: 'link' },
        { path: '/bonus-ui/dropzone', title: 'Dropzone', type: 'link' },
        { path: '/bonus-ui/tour', title: 'Tour', type: 'link' },
        { path: '/bonus-ui/sweetAlert2', title: 'SweetAlert2', type: 'link' },
        { path: '/bonus-ui/owl-carousel', title: 'Owl Carousel', type: 'link' },
        { path: '/bonus-ui/ribbons', title: 'Ribbons', type: 'link' },
        { path: '/bonus-ui/pagination', title: 'Pagination', type: 'link' },
        { path: '/bonus-ui/breadcrumb', title: 'Breadcrumb', type: 'link' },
        { path: '/bonus-ui/rang-slider', title: 'Rang Slider', type: 'link' },
        {
          path: '/bonus-ui/image-cropper',
          title: 'Image cropper',
          type: 'link',
        },
        { path: '/bonus-ui/sticky', title: 'Sticky', type: 'link' },
        { path: '/bonus-ui/basic-card', title: 'Basic Card', type: 'link' },

        { path: '/bonus-ui/timeline1', title: 'Time Line', type: 'link' },
      ],
    },

    {
      title: 'Icons',
      icon: 'icons',
      type: 'sub',
      active: false,
      children: [
        { path: '/icon/flag-icon', title: 'Flag Icon', type: 'link' },
        { path: '/icon/fontawesome-icon', title: 'Fontawsome', type: 'link' },
        { path: '/icon/ico-icon', title: 'Ico Icon', type: 'link' },
        { path: '/icon/thimify-icon', title: 'Themify Icon', type: 'link' },
        { path: '/icon/feather-icon', title: 'Feather Icon', type: 'link' },
        { path: '/icon/whether-icon', title: 'Whether Icon', type: 'link' },
      ],
    },

    {
      title: 'Buttons',
      icon: 'buttons',
      type: 'sub',
      active: false,
      children: [
        {
          path: '/buttons/default-style',
          title: 'Default-style',
          type: 'link',
        },
        { path: '/buttons/button-group', title: 'Button Group', type: 'link' },
      ],
    },
    {
      path: '/charts',
      title: 'Charts',
      icon: 'charts',
      active: false,
      type: 'sub',
      children: [
        { path: '/charts/apex-chart', title: 'Apex Chart', type: 'link' },
        { path: '/charts/google-chart', title: 'Google Chart', type: 'link' },
        {
          path: '/charts/chartist-chart',
          title: 'Chartist Chart',
          type: 'link',
        },
      ],
    },

    {
      headTitle1: 'Miscelleneous',
    },
    {
      path: '/gallery',
      title: 'Gallery',
      icon: 'gallery',
      active: false,
      type: 'sub',
      children: [
        {
          path: '/gallery/gallery-grid-desc',
          title: 'Gallery Grid Desc',
          type: 'link',
        },
        {
          path: '/gallery/masonry-gallery',
          title: 'Masonry Gallery',
          type: 'link',
        },
        {
          path: '/gallery/masonry-with-desc',
          title: 'Masonry With Desc',
          type: 'link',
        },
        {
          path: '/gallery/hover-effects',
          title: 'Hover Effects',
          type: 'link',
        },
      ],
    },
    {
      path: '/blog',
      title: 'Blog',
      icon: 'blog',
      type: 'sub',
      active: false,
      children: [
        { path: '/blog/blog-details', title: 'Blog Details', type: 'link' },
        { path: '/blog/blog-single', title: 'Blog Single', type: 'link' },
        { path: '/blog/add-post', title: 'Add Post', type: 'link' },
      ],
    },
    { path: '/faq', title: 'Faq', icon: 'faq', type: 'sub ' },
    {
      path: '/job-search',
      title: 'Job Search',
      icon: 'jobsearch',
      type: 'sub',
      active: false,
      children: [
        {
          path: '/job-search/cards-view',
          title: 'Cards View',
          type: 'link',
        },
        { path: '/job-search/list-view', title: 'List View', type: 'link' },
        {
          path: '/job-search/job-details',
          title: 'Job Details',
          type: 'link',
        },
        { path: '/job-search/apply', title: 'Apply', type: 'link' },
      ],
    },
    {
      path: '/learning',
      title: 'Learning',
      icon: 'learning',
      type: 'sub',
      active: false,
      children: [
        {
          path: '/learning/learning-list',
          title: 'Learning List',
          type: 'link',
        },
        {
          path: '/learning/detailed-course',
          title: 'Detailed Course',
          type: 'link',
        },
      ],
    },
    {
      path: '/maps',
      title: 'Maps',
      icon: 'maps',
      type: 'sub',
      active: false,
      children: [{ path: '/maps/map-js', title: 'Google Map', type: 'link' }],
    },
    {
      path: '/editors',
      title: 'Editors',
      icon: 'editors',
      type: 'sub',
      active: false,
      children: [
        { path: '/editors/ck-editors', title: 'CK Editors', type: 'link' },
        {
          path: '/editors/kolkov-editors',
          title: 'Kolkov Editors',
          type: 'link',
        },
      ],
    },
    {
      path: '/knowledgebases',
      title: 'Knowledgebase',
      icon: 'knowledgebase',
      active: false,
      type: 'sub',
      children: [
        {
          path: '/knowledgebases/knowledgebase',
          title: 'Knowledgebase',
          type: 'link',
        },
        {
          path: '/knowledgebases/knowledge-category',
          title: 'Knowledge category',
          type: 'link',
        },
        {
          path: '/knowledgebases/knowledge-detail',
          title: 'Knowledge detail',
          type: 'link',
        },
      ],
    },
    {
      path: '/support-ticket',
      title: 'Support Ticket',
      icon: 'ticket',
      type: 'sub',
    },
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
