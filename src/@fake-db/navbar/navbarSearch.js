import mock from "../mock"

export const searchResult = [
  {
    groupTitle: "Pages",
    searchLimit: 4,
    data: [
      {
        id: 1,
        target: "AnalyticsDashboard",
        title: "Analytics Dashboard",
        link: "/",
        icon: "Home"
      },
      {
        id: 2,
        target: "eCommerceDashboard",
        title: "eCommerce Dashboard",
        link: "/ecommerce-dashboard",
        icon: "Home"
      },
      {
        id: 3,
        target: "Todo",
        title: "Todo",
        link: "/todo/all",
        icon: "CheckSquare"
      },
      {
        id: 4,
        target: "Chat",
        title: "Chat",
        link: "/chat",
        icon: "MessageSquare"
      },
      {
        id: 5,
        target: "Email",
        title: "Email",
        link: "/email/inbox",
        icon: "Mail"
      },
      {
        id: 6,
        target: "Calender",
        title: "Calender",
        link: "/calendar",
        icon: "Calendar"
      },
      {
        id: 7,
        target: "E-commerceShop",
        title: "E-commerce Shop",
        link: "/ecommerce/shop",
        icon: "ShoppingCart"
      },
      {
        id: 8,
        target: "E-commerceWishList",
        title: "E-commerce Wish List",
        link: "/ecommerce/wishlist",
        icon: "Heart"
      },
      {
        id: 9,
        target: "E-commerceCheckout",
        title: "E-commerce Checkout",
        link: "/ecommerce/checkout",
        icon: "CreditCard"
      },
      {
        id: 12,
        target: "Grid",
        title: "Content - Grid",
        link: "/ui-element/grid",
        icon: "Grid"
      },
      {
        id: 13,
        target: "Typography",
        title: "Content - Typography",
        link: "/ui-element/typography",
        icon: "Type"
      },
      {
        id: 14,
        target: "TextUtilities",
        title: "Content - Text Utilities",
        link: "/ui-element/textutilities",
        icon: "Type"
      },
      {
        id: 15,
        target: "SyntaxHighlighter",
        title: "Content - Syntax Highlighter",
        link: "/ui-element/syntaxhighlighter",
        icon: "Code"
      },
      {
        id: 16,
        target: "Colors",
        title: "Colors",
        link: "/colors/colors",
        icon: "Droplet"
      },
      {
        id: 17,
        target: "Icons",
        title: "Icons",
        link: "/icons/reactfeather",
        icon: "Feather"
      },
      {
        id: 18,
        target: "CardsBasic",
        title: "Cards Basic",
        link: "/cards/basic",
        icon: "Square"
      },
      {
        id: 19,
        target: "CardsStatistics",
        title: "Cards Statistics",
        link: "/cards/statistics",
        icon: "Smartphone"
      },
      {
        id: 20,
        target: "CardsAnalytics",
        title: "Cards Analytics",
        link: "/cards/analytics",
        icon: "BarChart2"
      },
      {
        id: 21,
        target: "CardsActions",
        title: "Cards Actions",
        link: "/cards/action",
        icon: "Airplay"
      },
      {
        id: 22,
        target: "ReactstrapTables",
        title: "Reactstrap Tables",
        link: "/tables/reactstrap",
        icon: "Server"
      },
      {
        id: 23,
        target: "ReactTables",
        title: "React Tables",
        link: "/tables/react-tables",
        icon: "Server"
      },
      {
        id: 24,
        target: "agGridTables",
        title: "agGrid Tables",
        link: "/tables/agGrid",
        icon: "Grid"
      },
      {
        id: 25,
        target: "Alert",
        title: "Alert Component",
        link: "/components/alerts",
        icon: "Info"
      },
      {
        id: 26,
        target: "Button",
        title: "Button Component",
        link: "/components/buttons",
        icon: "Inbox"
      },
      {
        id: 27,
        target: "Breadcrumb",
        title: "Breadcrumb Component",
        link: "/components/breadcrumbs",
        icon: "MoreHorizontal"
      },
      {
        id: 28,
        target: "Carousel",
        title: "Carousel Component",
        link: "/components/carousel",
        icon: "Map"
      },
      {
        id: 29,
        target: "Collapse",
        title: "Collapse Component",
        link: "/components/collapse",
        icon: "Minimize"
      },
      {
        id: 30,
        target: "Dropdowns",
        title: "Dropdowns Component",
        link: "/components/dropdowns",
        icon: "Inbox"
      },
      {
        id: 31,
        target: "ListGroup",
        title: "List Group Component",
        link: "/components/list-group",
        icon: "Layers"
      },
      {
        id: 32,
        target: "Modal",
        title: "Modal Component",
        link: "/components/modals",
        icon: "Maximize2"
      },
      {
        id: 33,
        target: "Pagination",
        title: "Pagination Component",
        link: "/components/pagination",
        icon: "ChevronsRight"
      },
      {
        id: 34,
        target: "Navs",
        title: "Navs Component",
        link: "/components/nav-component",
        icon: "MoreVertical"
      },
      {
        id: 35,
        target: "Navbar",
        title: "Navbar Component",
        link: "/components/navbar",
        icon: "MoreHorizontal"
      },
      {
        id: 36,
        target: "Tabs",
        title: "Tabs Component",
        link: "/components/tabs-component",
        icon: "CreditCard"
      },
      {
        id: 37,
        target: "Pills",
        title: "Pills Component",
        link: "/components/pills-component",
        icon: "ToggleRight"
      },
      {
        id: 38,
        target: "Tooltip",
        title: "Tooltip Component",
        link: "/components/tooltips",
        icon: "MessageCircle"
      },
      {
        id: 39,
        target: "Popover",
        title: "Popover Component",
        link: "/components/popovers",
        icon: "MessageCircle"
      },
      {
        id: 40,
        target: "Badge",
        title: "Badge Component",
        link: "/components/badges",
        icon: "Circle"
      },
      {
        id: 41,
        target: "PillBadge",
        title: "Pill Badge Component",
        link: "/components/pill-badges",
        icon: "Circle"
      },
      {
        id: 42,
        target: "Progress",
        title: "Progress Component",
        link: "/components/progress",
        icon: "Server"
      },
      {
        id: 43,
        target: "MediaObjects",
        title: "Media Objects",
        link: "/components/media-objects",
        icon: "Image"
      },
      {
        id: 44,
        target: "Spinner",
        title: "Spinner Component",
        link: "/components/spinners",
        icon: "Sun"
      },
      {
        id: 45,
        target: "Toasts",
        title: "Toasts Component",
        link: "/components/toasts",
        icon: "Triangle"
      },
      {
        id: 46,
        target: "Avatar",
        title: "Avatar",
        link: "/extra-components/avatar",
        icon: "User"
      },
      {
        id: 47,
        target: "Chips",
        title: "Chips",
        link: "/extra-components/chips",
        icon: "Octagon"
      },
      {
        id: 48,
        target: "Divider",
        title: "Divider",
        link: "/extra-components/divider",
        icon: "Minus"
      },
      {
        id: 49,
        target: "Select",
        title: "Select Form Element",
        link: "/forms/elements/select",
        icon: "Server"
      },
      {
        id: 50,
        target: "Switch",
        title: "Switch Form Element",
        link: "/forms/elements/switch",
        icon: "ToggleLeft"
      },
      {
        id: 51,
        target: "Checkbox",
        title: "Checkbox Form Element",
        link: "/forms/elements/checkbox",
        icon: "CheckSquare"
      },
      {
        id: 52,
        target: "Radio",
        title: "Radio Form Element",
        link: "/forms/elements/radio",
        icon: "StopCircle"
      },
      {
        id: 53,
        target: "Input",
        title: "Input Form Element",
        link: "/forms/elements/input",
        icon: "Server"
      },
      {
        id: 54,
        target: "InputGroups",
        title: "Input Groups Form Elements",
        link: "/forms/elements/input-group",
        icon: "Package"
      },
      {
        id: 55,
        target: "NumberInput",
        title: "Number Input Form Elements",
        link: "/forms/elements/number-input",
        icon: "Plus"
      },
      {
        id: 56,
        target: "Textarea",
        title: "Textarea Form Elements",
        link: "/forms/elements/textarea",
        icon: "Edit2"
      },
      {
        id: 57,
        target: "Picker",
        title: "Date & Time Picker Form Elements",
        link: "/forms/elements/pickers",
        icon: "Calendar"
      },
      {
        id: 58,
        target: "InputMask",
        title: "Input Mask Form Elements",
        link: "/forms/elements/input-mask",
        icon: "Smile"
      },
      {
        id: 59,
        target: "FormLayout",
        title: "Form Layout",
        link: "/forms/layout/form-layout",
        icon: "Layout"
      },
      {
        id: 60,
        target: "FormWizard",
        title: "Form Wizard",
        link: "/forms/wizard",
        icon: "Sliders"
      },
      {
        id: 61,
        target: "Formik",
        title: "Formik",
        link: "/forms/formik",
        icon: "FileText"
      },
      {
        id: 62,
        target: "Login",
        title: "Login",
        link: "/pages/login",
        icon: "LogIn"
      },
      {
        id: 63,
        target: "Register",
        title: "Register",
        link: "/pages/register",
        icon: "UserPlus"
      },
      {
        id: 64,
        target: "forgotPassword",
        title: "Forgot Password",
        link: "/pages/forgot-password",
        icon: "Crosshair"
      },
      {
        id: 65,
        target: "ResetPassword",
        title: "Reset Password",
        link: "/pages/reset-password",
        icon: "TrendingUp"
      },
      {
        id: 67,
        target: "LockScreen",
        title: "Lock Screen",
        link: "/pages/lock-screen",
        icon: "Lock"
      },
      {
        id: 68,
        target: "ComingSoon",
        title: "Coming Soon",
        link: "/misc/coming-soon",
        icon: "Watch"
      },
      {
        id: 69,
        target: "404Page",
        title: "404 Page",
        link: "/misc/error/404",
        icon: "AlertTriangle"
      },
      {
        id: 70,
        target: "500Page",
        title: "500 Page",
        link: "/misc/error/500",
        icon: "AlertOctagon"
      },
      {
        id: 71,
        target: "NotAuthorized",
        title: "Not Authorized",
        link: "/misc/not-authorized",
        icon: "UserX"
      },
      {
        id: 72,
        target: "Maintenance",
        title: "Maintenance",
        link: "/misc/maintenance",
        icon: "Aperture"
      },
      {
        id: 73,
        target: "Profile",
        title: "Profile",
        link: "/pages/profile",
        icon: "Users"
      },
      {
        id: 74,
        target: "",
        title: "FAQ",
        link: "/pages/faq",
        icon: "Zap"
      },
      {
        id: 75,
        target: "KnowledgeBase",
        title: "Knowledge Base",
        link: "/pages/knowledge-base",
        icon: "AlignLeft"
      },
      {
        id: 76,
        target: "Search",
        title: "Search",
        link: "/pages/search",
        icon: "Search"
      },
      {
        id: 77,
        target: "Invoice",
        title: "Invoice",
        link: "/pages/invoice",
        icon: "FileText"
      },
      {
        id: 78,
        target: "ApexCharts",
        title: "Apex Charts",
        link: "/charts/apex",
        icon: "BarChart"
      },
      {
        id: 79,
        target: "Chartjs",
        title: "Chartjs",
        link: "/charts/chartjs",
        icon: "Activity"
      },
      {
        id: 80,
        target: "recharts",
        title: "Recharts",
        link: "/charts/recharts",
        icon: "PieChart"
      },
      {
        id: 81,
        target: "Leaflet Maps",
        title: "Leaflet Maps",
        link: "/maps/leaflet",
        icon: "MapPin"
      },
      {
        id: 82,
        target: "Toastr",
        title: "Toastr",
        link: "/extensions/toastr",
        icon: "CreditCard"
      },
      {
        id: 83,
        target: "RcSlider",
        title: "Rc Slider",
        link: "/extensions/slider",
        icon: "Sliders"
      },
      {
        id: 84,
        target: "FileUploader",
        title: "File Uploader",
        link: "/extensions/file-uploader",
        icon: "Upload"
      },
      {
        id: 85,
        target: "wysiwyg-editor",
        title: "Wysiwyg Editor",
        link: "/extensions/wysiwyg-editor",
        icon: "Edit"
      },
      {
        id: 86,
        target: "DragDrop",
        title: "Drag & Drop",
        link: "/extensions/drag-and-drop",
        icon: "Move"
      },
      {
        id: 87,
        target: "Tour",
        title: "Tour",
        link: "/extensions/tour",
        icon: "Airplay"
      },
      {
        id: 88,
        target: "AutoComplete",
        title: "Auto Complete",
        link: "/extra-components/auto-complete",
        icon: "Edit"
      },
      {
        id: 89,
        target: "Clipboard",
        title: "Clipboard",
        link: "/extensions/clipboard",
        icon: "Clipboard"
      },
      {
        id: 90,
        target: "ContextMenu",
        title: "Context Menu",
        link: "/extensions/context-menu",
        icon: "Menu"
      },
      {
        id: 91,
        target: "Internationalization",
        title: "Internationalization",
        link: "/extensions/i18n",
        icon: "Globe"
      },
      {
        id: 92,
        target: "accountSettings",
        title: "Account Settings",
        link: "/pages/account-settings",
        icon: "Settings"
      },
      {
        id: 93,
        target: "userList",
        title: "User List",
        link: "/app/user/list",
        icon: "List"
      },
      {
        id: 94,
        target: "userView",
        title: "User View",
        link: "/app/user/view",
        icon: "Eye"
      },
      {
        id: 95,
        target: "userEdit",
        title: "User Edit",
        link: "/app/user/edit",
        icon: "Edit"
      },
      {
        id: 96,
        target: "swiper",
        title: "Swiper",
        link: "/extensions/swiper",
        icon: "Map"
      },
      {
        id: 97,
        target: "accessControl",
        title: "Access Control",
        link: "/extensions/access-control",
        icon: "Lock"
      },
      {
        id: 98,
        target: "tree",
        title: "Tree",
        link: "/extensions/tree",
        icon: "GitMerge"
      },
      {
        id: 99,
        target: "paginationExt",
        title: "Pagination Extension",
        link: "/extensions/pagination",
        icon: "ChevronsRight"
      },
      {
        id: 100,
        target: "E-commerceProductDetail",
        title: "Product Detail",
        link: "/ecommerce/product-detail",
        icon: "Info"
      },
      {
        id: 101,
        target: "exportExt",
        title: "Export",
        link: "/extensions/export",
        icon: "UploadCloud"
      },
      {
        id: 102,
        target: "importExt",
        title: "Import",
        link: "/extensions/import",
        icon: "DownloadCloud"
      },
      {
        id: 103,
        target: "exportSelectedExt",
        title: "Export Selected",
        link: "/extensions/export-selected",
        icon: "CheckSquare"
      },
      {
        id: 104,
        target: "listView",
        title: "List View",
        link: "/data-list/list-view",
        icon: "List"
      },
      {
        id: 105,
        target: "thumbView",
        title: "Thumb View",
        link: "/data-list/thumb-view",
        icon: "Image"
      },
      {
        id: 106,
        target: "dataTable",
        title: "DataTable",
        link: "/tables/data-tables",
        icon: "Grid"
      }
    ]
  },
  {
    groupTitle: "Files",
    searchLimit: 4,
    data: [
      {
        title: "Passport Image",
        by: "Oliver Queen",
        size: "52kb",
        file: require("../../assets/img/icons/jpg.png")
      },
      {
        title: "Parenting Guide",
        by: "Alfred Pennyworth",
        size: "2.3mb",
        file: require("../../assets/img/icons/doc.png")
      },
      {
        title: "Class Notes",
        by: "Barry Allen",
        size: "30kb",
        file: require("../../assets/img/icons/doc.png")
      },
      {
        title: "Class Attendance",
        by: "Walter White",
        size: "52mb",
        file: require("../../assets/img/icons/xls.png")
      }
    ]
  },
  {
    groupTitle: "Contacts",
    searchLimit: 4,
    data: [
      {
        title: "Mia Davis",
        email: "miadavis@teleworm.us",
        img: require("../../assets/img/portrait/small/avatar-s-8.jpg"),
        date: "01/03/2020"
      },
      {
        title: "Norris Carrière",
        email: "NorrisCarriere@rhyta.com",
        img: require("../../assets/img/portrait/small/avatar-s-3.jpg"),
        date: "07/03/2020"
      },
      {
        title: "Charlotte Gordon",
        email: "CharlotteGordon@jourrapide.com",
        img: require("../../assets/img/portrait/small/avatar-s-26.jpg"),
        date: "14/03/2020"
      },
      {
        title: "Robert Nash",
        email: "RobertNash@dayrep.com",
        img: require("../../assets/img/portrait/small/avatar-s-25.jpg"),
        date: "21/03/2020"
      }
    ]
  }
]

mock.onGet("/api/main-search/data").reply(200, {
  searchResult
})
