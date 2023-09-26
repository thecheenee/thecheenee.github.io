const menuItems = [
  {
    title: "home",
    path: "/",
    icon: "house-fill"
  },
  {
    title: "contact",
    path: "/contact",
    icon: "headset"
  },
  {
    title: "work",
    path: "/work",
    icon: "briefcase-fill",
    subMenu: [
      {
        title: "about",
        path: "/work/about",
        icon: "file-person-fill",
      },
      {
        title: "timeline",
        path: "/work/timeline",
        icon: "calendar-week-fill",
      },
      {
        title: "web development",
        path: "/work/web-projects",
        icon: "code-slash"
      },
      {
        title: "design & illustrations",
        path: "/work/illustration-projects",
        icon: "columns-gap"
      },
      {
        title: "data science",
        path: "/work/data-projects",
        icon: "bar-chart-line-fill"
      },
      {
        title: "my skills",
        path: "/work/skills",
        icon: "tools"
      }
    ]
  },
  {
    title: "fun",
    path: "/fun",
    icon: "robot",
    subMenu: [
      {
        title: "simple games",
        path: "/fun/html-games",
        icon: "controller"
      },
      {
        title: "css art",
        path: "/fun/css-art",
        icon: "brush-fill"
      },
      {
        title: "web toons",
        path: "/fun/web-toons",
        icon: "grid-1x2-fill"
      },
      {
        title: "whacky codes",
        path: "/fun/code-for-fun",
        icon: "joystick"
      }
    ]
  },
  {
    title: "blog",
    path: "/blog",
    icon: "vector-pen",
    counter: 3
  }
];

export default menuItems;