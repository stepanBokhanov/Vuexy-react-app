export const styleLight = {
  tree: {
    base: {
      listStyle: "none",
      backgroundColor: "#fff",
      margin: 0,
      padding: 0,
      color: "#000",
      fontSize: "14px"
    },
    node: {
      base: {
        position: "relative"
      },
      link: {
        cursor: "pointer",
        position: "relative",
        padding: "0px 5px",
        display: "block"
      },
      activeLink: {
        background: "#f8f8f8"
      },
      toggle: {
        base: {
          position: "relative",
          display: "inline-block",
          verticalAlign: "top",
          marginLeft: "-5px",
          height: "24px",
          width: "24px"
        },
        wrapper: {
          position: "absolute",
          top: "50%",
          left: "50%",
          margin: "-10px 0 0 -7px",
          height: "14px"
        },
        height: 10,
        width: 10,
        display: "inline-block",
        arrow: {
          fill: "#565656",
          strokeWidth: 0
        }
      },
      header: {
        base: {
          display: "inline-block",
          verticalAlign: "top",
          color: "#565656"
        },
        connector: {
          width: "2px",
          height: "12px",
          borderLeft: "solid 2px black",
          borderBottom: "solid 2px black",
          position: "absolute",
          top: "0px",
          left: "-21px"
        },
        title: {
          lineHeight: "24px",
          verticalAlign: "middle"
        }
      },
      subtree: {
        listStyle: "none",
        paddingLeft: "19px"
      },
      loading: {
        color: "#7367f0"
      }
    }
  }
}

export const styleDark = {
  tree: {
    base: {
      listStyle: "none",
      backgroundColor: "#262c49",
      margin: 0,
      padding: 0,
      color: "#c2c6dc",
      fontSize: "14px"
    },
    node: {
      base: {
        position: "relative"
      },
      link: {
        cursor: "pointer",
        position: "relative",
        padding: "0px 5px",
        display: "block"
      },
      activeLink: {
        background: "#10163a"
      },
      toggle: {
        base: {
          position: "relative",
          display: "inline-block",
          verticalAlign: "top",
          marginLeft: "-5px",
          height: "24px",
          width: "24px"
        },
        wrapper: {
          position: "absolute",
          top: "50%",
          left: "50%",
          margin: "-10px 0 0 -7px",
          height: "14px"
        },
        height: 10,
        width: 10,
        display: "inline-block",
        arrow: {
          fill: "#fff",
          strokeWidth: 0
        }
      },
      header: {
        base: {
          display: "inline-block",
          verticalAlign: "top",
          color: "#fff"
        },
        connector: {
          width: "2px",
          height: "12px",
          borderLeft: "solid 2px black",
          borderBottom: "solid 2px black",
          position: "absolute",
          top: "0px",
          left: "-21px"
        },
        title: {
          lineHeight: "24px",
          verticalAlign: "middle"
        }
      },
      subtree: {
        listStyle: "none",
        paddingLeft: "19px"
      },
      loading: {
        color: "#7367f0"
      }
    }
  }
}
