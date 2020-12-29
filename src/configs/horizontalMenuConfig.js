import React from "react"
import * as Icon from "react-feather"

const horizontalMenuConfig = [



  {
    id: "dashboard",
    title: "Dashboard",
    type: "item",
    icon: <Icon.Home size={16} />,
    navLink: "/dashboard",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    type: "item",
    icon: <Icon.CheckSquare size={16} />,
    navLink: "/portfolios",
  },
  {
    id: "account",
    title: "Account",
    type: "item",
    icon: <Icon.User size={16} />,
    navLink: "/user/view",
  },
]

export default horizontalMenuConfig
