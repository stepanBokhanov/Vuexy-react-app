import mock from "../mock"

export const searchResult = [
  {
    id: 1,
    target: "AnalyticsDashboard",
    title: "Analytics Dashboard",
    link: "/",
    icon: "Home",
    starred: false
  },
  {
    id: 2,
    target: "eCommerceDashboard",
    title: "eCommerce Dashboard",
    link: "/ecommerce-dashboard",
    icon: "Home",
    starred: false
  },
  {
    id: 3,
    target: "Todo",
    title: "Todo",
    link: "/todo/all",
    icon: "CheckSquare",
    starred: true
  },
  {
    id: 4,
    target: "Chat",
    title: "Chat",
    link: "/chat",
    icon: "MessageSquare",
    starred: true
  },
  {
    id: 5,
    target: "Email",
    title: "Email",
    link: "/email/inbox",
    icon: "Mail",
    starred: true
  },
  {
    id: 6,
    target: "Calender",
    title: "Calender",
    link: "/calendar",
    icon: "Calendar",
    starred: true
  },
  {
    id: 7,
    target: "E-commerceShop",
    title: "E-commerce Shop",
    link: "/ecommerce/shop",
    icon: "ShoppingCart",
    starred: false
  },
  {
    id: 8,
    target: "E-commerceWishList",
    title: "E-commerce Wish List",
    link: "/ecommerce/wishlist",
    icon: "Heart",
    starred: false
  },
  {
    id: 9,
    target: "E-commerceCheckout",
    title: "E-commerce Checkout",
    link: "/ecommerce/checkout",
    icon: "CreditCard",
    starred: false
  },
  {
    id: 12,
    target: "Grid",
    title: "Content - Grid",
    link: "/ui-element/grid",
    icon: "Grid",
    starred: false
  },
  {
    id: 13,
    target: "Typography",
    title: "Content - Typography",
    link: "/ui-element/typography",
    icon: "Type",
    starred: false
  },
  {
    id: 14,
    target: "TextUtilities",
    title: "Content - Text Utilities",
    link: "/ui-element/textutilities",
    icon: "Type",
    starred: false
  },
  {
    id: 15,
    target: "SyntaxHighlighter",
    title: "Content - Syntax Highlighter",
    link: "/ui-element/syntaxhighlighter",
    icon: "Code",
    starred: false
  },
  {
    id: 16,
    target: "Colors",
    title: "Colors",
    link: "/colors/colors",
    icon: "Droplet",
    starred: false
  },
  {
    id: 17,
    target: "Icons",
    title: "Icons",
    link: "/icons/reactfeather",
    icon: "Feather",
    starred: false
  },
  {
    id: 18,
    target: "CardsBasic",
    title: "Cards Basic",
    link: "/cards/basic",
    icon: "Square",
    starred: false
  },
  {
    id: 19,
    target: "CardsStatistics",
    title: "Cards Statistics",
    link: "/cards/statistics",
    icon: "Smartphone",
    starred: false
  },
  {
    id: 20,
    target: "CardsAnalytics",
    title: "Cards Analytics",
    link: "/cards/analytics",
    icon: "BarChart2",
    starred: false
  },
  {
    id: 21,
    target: "CardsActions",
    title: "Cards Actions",
    link: "/cards/action",
    icon: "Airplay",
    starred: false
  },
  {
    id: 22,
    target: "ReactstrapTables",
    title: "Reactstrap Tables",
    link: "/tables/reactstrap",
    icon: "Server",
    starred: false
  },
  {
    id: 23,
    target: "ReactTables",
    title: "React Tables",
    link: "/tables/react-tables",
    icon: "Server",
    starred: false
  },
  {
    id: 24,
    target: "agGridTables",
    title: "agGrid Tables",
    link: "/tables/agGrid",
    icon: "Grid",
    starred: false
  },
  {
    id: 25,
    target: "Alert",
    title: "Alert Component",
    link: "/components/alerts",
    icon: "Info",
    starred: false
  },
  {
    id: 26,
    target: "Button",
    title: "Button Component",
    link: "/components/buttons",
    icon: "Inbox",
    starred: false
  },
  {
    id: 27,
    target: "Breadcrumb",
    title: "Breadcrumb Component",
    link: "/components/breadcrumbs",
    icon: "MoreHorizontal",
    starred: false
  },
  {
    id: 28,
    target: "Carousel",
    title: "Carousel Component",
    link: "/components/carousel",
    icon: "Map",
    starred: false
  },
  {
    id: 29,
    target: "Collapse",
    title: "Collapse Component",
    link: "/components/collapse",
    icon: "Minimize",
    starred: false
  },
  {
    id: 30,
    target: "Dropdowns",
    title: "Dropdowns Component",
    link: "/components/dropdowns",
    icon: "Inbox",
    starred: false
  },
  {
    id: 31,
    target: "ListGroup",
    title: "List Group Component",
    link: "/components/list-group",
    icon: "Layers",
    starred: false
  },
  {
    id: 32,
    target: "Modal",
    title: "Modal Component",
    link: "/components/modals",
    icon: "Maximize2",
    starred: false
  },
  {
    id: 33,
    target: "Pagination",
    title: "Pagination Component",
    link: "/components/pagination",
    icon: "ChevronsRight",
    starred: false
  },
  {
    id: 34,
    target: "Navs",
    title: "Navs Component",
    link: "/components/nav-component",
    icon: "MoreVertical",
    starred: false
  },
  {
    id: 35,
    target: "Navbar",
    title: "Navbar Component",
    link: "/components/navbar",
    icon: "MoreHorizontal",
    starred: false
  },
  {
    id: 36,
    target: "Tabs",
    title: "Tabs Component",
    link: "/components/tabs-component",
    icon: "CreditCard",
    starred: false
  },
  {
    id: 37,
    target: "Pills",
    title: "Pills Component",
    link: "/components/pills-component",
    icon: "ToggleRight",
    starred: false
  },
  {
    id: 38,
    target: "Tooltip",
    title: "Tooltip Component",
    link: "/components/tooltips",
    icon: "MessageCircle",
    starred: false
  },
  {
    id: 39,
    target: "Popover",
    title: "Popover Component",
    link: "/components/popovers",
    icon: "MessageCircle",
    starred: false
  },
  {
    id: 40,
    target: "Badge",
    title: "Badge Component",
    link: "/components/badges",
    icon: "Circle",
    starred: false
  },
  {
    id: 41,
    target: "PillBadge",
    title: "Pill Badge Component",
    link: "/components/pill-badges",
    icon: "Circle",
    starred: false
  },
  {
    id: 42,
    target: "Progress",
    title: "Progress Component",
    link: "/components/progress",
    icon: "Server",
    starred: false
  },
  {
    id: 43,
    target: "MediaObjects",
    title: "Media Objects",
    link: "/components/media-objects",
    icon: "Image",
    starred: false
  },
  {
    id: 44,
    target: "Spinner",
    title: "Spinner Component",
    link: "/components/spinners",
    icon: "Sun",
    starred: false
  },
  {
    id: 45,
    target: "Toasts",
    title: "Toasts Component",
    link: "/components/toasts",
    icon: "Triangle",
    starred: false
  },
  {
    id: 46,
    target: "Avatar",
    title: "Avatar",
    link: "/extra-components/avatar",
    icon: "User",
    starred: false
  },
  {
    id: 47,
    target: "Chips",
    title: "Chips",
    link: "/extra-components/chips",
    icon: "Octagon",
    starred: false
  },
  {
    id: 48,
    target: "Divider",
    title: "Divider",
    link: "/extra-components/divider",
    icon: "Minus",
    starred: false
  },
  {
    id: 49,
    target: "Select",
    title: "Select Form Element",
    link: "/forms/elements/select",
    icon: "Server",
    starred: false
  },
  {
    id: 50,
    target: "Switch",
    title: "Switch Form Element",
    link: "/forms/elements/switch",
    icon: "ToggleLeft",
    starred: false
  },
  {
    id: 51,
    target: "Checkbox",
    title: "Checkbox Form Element",
    link: "/forms/elements/checkbox",
    icon: "CheckSquare",
    starred: false
  },
  {
    id: 52,
    target: "Radio",
    title: "Radio Form Element",
    link: "/forms/elements/radio",
    icon: "StopCircle",
    starred: false
  },
  {
    id: 53,
    target: "Input",
    title: "Input Form Element",
    link: "/forms/elements/input",
    icon: "Server",
    starred: false
  },
  {
    id: 54,
    target: "InputGroups",
    title: "Input Groups Form Elements",
    link: "/forms/elements/input-group",
    icon: "Package",
    starred: false
  },
  {
    id: 55,
    target: "NumberInput",
    title: "Number Input Form Elements",
    link: "/forms/elements/number-input",
    icon: "Plus",
    starred: false
  },
  {
    id: 56,
    target: "Textarea",
    title: "Textarea Form Elements",
    link: "/forms/elements/textarea",
    icon: "Edit2",
    starred: false
  },
  {
    id: 57,
    target: "Picker",
    title: "Date & Time Picker Form Elements",
    link: "/forms/elements/pickers",
    icon: "Calendar",
    starred: false
  },
  {
    id: 58,
    target: "InputMask",
    title: "Input Mask Form Elements",
    link: "/forms/elements/input-mask",
    icon: "Smile",
    starred: false
  },
  {
    id: 59,
    target: "FormLayout",
    title: "Form Layout",
    link: "/forms/layout/form-layout",
    icon: "Layout",
    starred: false
  },
  {
    id: 60,
    target: "FormWizard",
    title: "Form Wizard",
    link: "/forms/wizard",
    icon: "Sliders",
    starred: false
  },
  {
    id: 61,
    target: "Formik",
    title: "Formik",
    link: "/forms/formik",
    icon: "FileText",
    starred: false
  },
  {
    id: 62,
    target: "Login",
    title: "Login",
    link: "/pages/login",
    icon: "LogIn",
    starred: false
  },
  {
    id: 63,
    target: "Register",
    title: "Register",
    link: "/pages/register",
    icon: "UserPlus",
    starred: false
  },
  {
    id: 64,
    target: "forgotPassword",
    title: "Forgot Password",
    link: "/pages/forgot-password",
    icon: "Crosshair",
    starred: false
  },
  {
    id: 65,
    target: "ResetPassword",
    title: "Reset Password",
    link: "/pages/reset-password",
    icon: "TrendingUp",
    starred: false
  },
  {
    id: 67,
    target: "LockScreen",
    title: "Lock Screen",
    link: "/pages/lock-screen",
    icon: "Lock",
    starred: false
  },
  {
    id: 68,
    target: "ComingSoon",
    title: "Coming Soon",
    link: "/misc/coming-soon",
    icon: "Watch",
    starred: false
  },
  {
    id: 69,
    target: "auth1",
    title: "404 Page",
    link: "/misc/error/404",
    icon: "AlertTriangle",
    starred: false
  },
  {
    id: 70,
    target: "auth2",
    title: "500 Page",
    link: "/misc/error/500",
    icon: "AlertOctagon",
    starred: false
  },
  {
    id: 71,
    target: "NotAuthorized",
    title: "Not Authorized",
    link: "/misc/not-authorized",
    icon: "UserX",
    starred: false
  },
  {
    id: 72,
    target: "Maintenance",
    title: "Maintenance",
    link: "/misc/maintenance",
    icon: "Aperture",
    starred: false
  },
  {
    id: 73,
    target: "Profile",
    title: "Profile",
    link: "/pages/profile",
    icon: "Users",
    starred: false
  },
  {
    id: 74,
    target: "",
    title: "FAQ",
    link: "/pages/faq",
    icon: "Zap",
    starred: false
  },
  {
    id: 75,
    target: "KnowledgeBase",
    title: "Knowledge Base",
    link: "/pages/knowledge-base",
    icon: "AlignLeft",
    starred: false
  },
  {
    id: 76,
    target: "Search",
    title: "Search",
    link: "/pages/search",
    icon: "Search",
    starred: false
  },
  {
    id: 77,
    target: "Invoice",
    title: "Invoice",
    link: "/pages/invoice",
    icon: "FileText",
    starred: false
  },
  {
    id: 78,
    target: "ApexCharts",
    title: "Apex Charts",
    link: "/charts/apex",
    icon: "BarChart",
    starred: false
  },
  {
    id: 79,
    target: "Chartjs",
    title: "Chartjs",
    link: "/charts/chartjs",
    icon: "Activity",
    starred: false
  },
  {
    id: 80,
    target: "recharts",
    title: "Recharts",
    link: "/charts/recharts",
    icon: "PieChart",
    starred: false
  },
  {
    id: 81,
    target: "Leaflet Maps",
    title: "Leaflet Maps",
    link: "/maps/leaflet",
    icon: "MapPin",
    starred: false
  },
  {
    id: 82,
    target: "Toastr",
    title: "Toastr",
    link: "/extensions/toastr",
    icon: "CreditCard",
    starred: false
  },
  {
    id: 83,
    target: "RcSlider",
    title: "Rc Slider",
    link: "/extensions/slider",
    icon: "Sliders",
    starred: false
  },
  {
    id: 84,
    target: "FileUploader",
    title: "File Uploader",
    link: "/extensions/file-uploader",
    icon: "Upload",
    starred: false
  },
  {
    id: 85,
    target: "wysiwyg-editor",
    title: "Wysiwyg Editor",
    link: "/extensions/wysiwyg-editor",
    icon: "Edit",
    starred: false
  },
  {
    id: 86,
    target: "DragDrop",
    title: "Drag & Drop",
    link: "/extensions/drag-and-drop",
    icon: "Move",
    starred: false
  },
  {
    id: 87,
    target: "Tour",
    title: "Tour",
    link: "/extensions/tour",
    icon: "Airplay",
    starred: false
  },
  {
    id: 88,
    target: "AutoComplete",
    title: "Auto Complete",
    link: "/extra-components/auto-complete",
    icon: "Edit",
    starred: false
  },
  {
    id: 89,
    target: "Clipboard",
    title: "Clipboard",
    link: "/extensions/clipboard",
    icon: "Clipboard",
    starred: false
  },
  {
    id: 90,
    target: "ContextMenu",
    title: "Context Menu",
    link: "/extensions/context-menu",
    icon: "Menu",
    starred: false
  },
  {
    id: 91,
    target: "Internationalization",
    title: "Internationalization",
    link: "/extensions/i18n",
    icon: "Globe",
    starred: false
  },
  {
    id: 92,
    target: "accountSettings",
    title: "Account Settings",
    link: "/pages/account-settings",
    icon: "Settings",
    starred: false
  },
  {
    id: 93,
    target: "userList",
    title: "User List",
    link: "/pages/user/list",
    icon: "List",
    starred: false
  },
  {
    id: 94,
    target: "userView",
    title: "User View",
    link: "/pages/user/view",
    icon: "Eye",
    starred: false
  },
  {
    id: 95,
    target: "userEdit",
    title: "User Edit",
    link: "/app/user/edit",
    icon: "Edit",
    starred: false
  },
  {
    id: 96,
    target: "swiper",
    title: "Swiper",
    link: "/extensions/swiper",
    icon: "Map",
    starred: false
  },
  {
    id: 97,
    target: "accessControl",
    title: "Access Control",
    link: "/extensions/access-control",
    icon: "Lock",
    starred: false
  },
  {
    id: 98,
    target: "tree",
    title: "Tree",
    link: "/extensions/tree",
    icon: "GitMerge",
    starred: false
  },
  {
    id: 99,
    target: "paginationExt",
    title: "Pagination Extension",
    link: "/extensions/pagination",
    icon: "ChevronsRight",
    starred: false
  },
  {
    id: 100,
    target: "exportExt",
    title: "Export",
    link: "/extensions/export",
    icon: "UploadCloud",
    starred: false
  },
  {
    id: 101,
    target: "importExt",
    title: "Import",
    link: "/extensions/import",
    icon: "DownloadCloud",
    starred: false
  },
  {
    id: 102,
    target: "exportSelectedExt",
    title: "Export Selected",
    link: "/extensions/export-selected",
    icon: "CheckSquare",
    starred: false
  },
  {
    id: 103,
    target: "listView",
    title: "List View",
    link: "/data-list/list-view",
    icon: "List",
    starred: false
  },
  {
    id: 104,
    target: "thumbView",
    title: "Thumb View",
    link: "/data-list/thumb-view",
    icon: "Image",
    starred: false
  },
  {
    id: 105,
    target: "dataTable",
    title: "DataTable",
    link: "/tables/data-tables",
    icon: "Grid",
    starred: false
  }
]

mock.onGet("/api/search/bookmarks/data").reply(200, {
  searchResult
})

mock.onPost("/api/update/bookmarks").reply(request => {
  const bookmarkToUpdate = JSON.parse(request.data).obj

  searchResult.filter(i => {
    if (i.id === bookmarkToUpdate.id) {
      return (i.starred = !bookmarkToUpdate.starred)
    } else {
      return null
    }
  })
  return [200]
})
