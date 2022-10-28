import {
  AppBar,
  Container,
  Divider,
  Link,
  Stack,
  Toolbar,
  useScrollTrigger, useTheme,
} from "@mui/material";
import { AppProps, Sx } from "../types";
import { cloneElement, Fragment, ReactElement } from "react";
import { Logo } from "./Icons";
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.css";

function ElevationScroll({ children }: { children: ReactElement }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const elevatedSx: Sx = {
    borderBottom: 1,
    borderColor: "#eaeaea",
  };
  return cloneElement(children, {
    elevation: 0,
    sx: {
      ...(trigger ? elevatedSx : {}),
      ...children.props.sx,
    } as Sx,
  });
}

const navItems = [
  { name: "Home", link: "/" },
  { name: "CraftShop", link: "/craft-shop" },
  { name: "Community", link: "/community" },
  { name: "About", link: "/about" },
];

function TopBar() {
  const theme = useTheme();
  const router = useRouter();
  return (
    <ElevationScroll>
      <AppBar sx={{ backgroundColor: "white" }}>
        <Container maxWidth={"lg"}>
          <Toolbar sx={{ justifyContent: "space-between" } as Sx}>
            <Logo></Logo>
            <Stack direction={"row"} spacing={2.5}>
              <Stack direction={"row"} spacing={5}>
                {navItems.map((item) => {
                  const matched = router.pathname == item.link;
                  return (
                    <Link
                      href={item.link}
                      key={item.name}
                      underline={"none"}
                      fontSize={18}
                      color={matched ? theme.palette.primary.main : "#4B4B4B"}
                      fontWeight={matched ? "bold" : "normal"}
                      lineHeight={2}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </Stack>
              <Divider orientation="vertical" flexItem />
              <Link
                href={"#"}
                underline={"none"}
                fontSize={18}
                color={"#4B4B4B"}
                lineHeight={2}
              >
                English
              </Link>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}

export function DefaultLayout(props: AppProps) {
  return (
    <Fragment>
      <TopBar></TopBar>
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
}
