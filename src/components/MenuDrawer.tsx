import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import GlobeIcon from "public/images/globe.svg";
import Image from "next/image";
import { useApp } from "@/context/app";

type Anchor = "top" | "left" | "bottom" | "right";

type props = {
  switchLanguage: () => void;
};

const MenuDrawer: React.FC<props> = ({ switchLanguage }) => {
  const { lng } = useApp();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: "auto",
        height: "500px",
        borderTopRadius: 10,
        overflow: "hidden",
        paddingTop: 4,
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <button className="px-10" onClick={switchLanguage}>
        {lng === "en" ? "中文" : "English"}
      </button>
    </Box>
  );

  return (
    <div>
      {(["bottom"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)}>
            <Image src={GlobeIcon} alt="globe" width={20} height={20} />
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MenuDrawer;
