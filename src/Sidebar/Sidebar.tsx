import clsx from "clsx";
import React from "react";

// import logoImg from "../assets/logo.png";
// import { Logo } from "../icons/Logo";
import { localStorageKeys } from "../localStorageKeys";
import { makeStyles } from "../theme";
import useLocalStorage from "../tools/useLocalStorage";
import { ExpandButton } from "./ExpandButton";
import { MenuItem, menuWidth, shrunkMenuWidth } from "./MenuItem";
import { BaseSidebarProps } from "./types";

const useStyles = makeStyles(
  (theme) => ({
    expandButton: {
      marginLeft: theme.spacing(2),
    },
    float: {
      height: "100vh",
      position: "fixed",
      paddingTop: "10rem",
    },
    logo: {
      margin: `36px 0 ${theme.spacing(3)} ${theme.spacing(3.5)}`,
    },
    root: {
      transition: "width 0.5s ease",
      width: menuWidth,
      zIndex: 100,
    },
    rootShrink: {
      width: shrunkMenuWidth,
    },
    toolbarContainer: {
      margin: theme.spacing(1, 0, 1, 2),
    },
  }),
  {
    name: "SideBar",
  }
);

export interface SidebarProps extends BaseSidebarProps {
  active: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  active,
  menuItems,
  toolbar,
  onMenuItemClick,
}) => {
  const classes = useStyles({});
  const { value: isShrunkStr, setValue: setShrink } = useLocalStorage(
    localStorageKeys.menuShrink,
    false.toString()
  );
  const isShrunk = isShrunkStr === "true";

  return (
    <div
      className={clsx(classes.root, {
        [classes.rootShrink]: isShrunk,
      })}
    >
      <div className={classes.float}>
        {/* <div className={classes.logo}>
          <span style={{ fontWeight: 900, fontSize: "32px", color: "#bd8e02" }}>
            tummere
          </span>
          <img src={logoImg} style={{ width: "200px" }} alt="tummere" />
        </div> */}
        {menuItems.map((menuItem) => (
          <MenuItem
            active={active === menuItem.id}
            isMenuShrunk={isShrunk}
            menuItem={menuItem}
            onClick={onMenuItemClick}
            key={menuItem.ariaLabel}
          />
        ))}
        {toolbar && <div className={classes.toolbarContainer}>{toolbar}</div>}
        <ExpandButton
          className={classes.expandButton}
          isShrunk={isShrunk}
          onClick={() => setShrink((!isShrunk).toString())}
        />
      </div>
    </div>
  );
};

Sidebar.displayName = "SideBar";
