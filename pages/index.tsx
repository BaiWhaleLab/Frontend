import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AppProps, Sx } from "../types";
import { breakpoints } from "../components/theme";
import Image from "next/image";
import indexBackground from "../public/index.png";
import styles from "../styles/Home.module.css";
import {
  CraftShop,
  IndexStep1,
  IndexStep2,
  IndexStep3,
  Logo,
  WhiteLogo,
} from "../components/Icons";
import { ReactNode } from "react";

function Title({ children }: AppProps) {
  const theme = useTheme();
  return (
    <Typography
      sx={
        {
          fontWeight: 700,
          fontSize: 120,
          lineHeight: 1.2,
          color: theme.palette.primary.main,
          zIndex: 1,
          textShadow: "2px 2px 5px rgba(255, 255, 255, 0.75)",
        } as Sx
      }
    >
      {children}
    </Typography>
  );
}

function Block1() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      overflow={"hidden"}
      sx={
        {
          width: 1,
          maxWidth: breakpoints.k1,
          maxHeight: "calc(100vh - 64px)",
          alignItems: "end",
          position: "relative",
        } as Sx
      }
    >
      <Image
        src={indexBackground}
        alt={"background"}
        className={styles.img}
      ></Image>
      <Stack
        sx={
          {
            position: "absolute",
            top: "20px",
            left: "50px",
            alignItems: "baseline",
          } as Sx
        }
      >
        <Title>Bring Your Creativity</Title>
        <Title>To Reality</Title>
        <Title>Let More People</Title>
        <Title>Share it</Title>
        <Button
          variant={"contained"}
          disableElevation
          sx={
            {
              color: "white",
              lineHeight: 1,
              px: 7,
              py: 4.5,
              borderRadius: 12.5,
              fontSize: 30,
              mt: 3,
              "&:hover": { backgroundColor: theme.palette.primary.main },
            } as Sx
          }
        >
          <CraftShop></CraftShop>
        </Button>
      </Stack>
    </Stack>
  );
}

const containerSx = {
  width: 1,
  maxWidth: breakpoints.xl,
  alignItems: "stretch",
  px: 11.25,
} as Sx;

function Block2() {
  const theme = useTheme();
  return (
    <Stack sx={containerSx}>
      <Stack
        sx={
          {
            pt: 24,
            pb: 20.5,
            mt: 12.5,
            backgroundColor: theme.palette.primary.main,
            borderRadius: "50px",
            color: "white",
            alignItems: "center",
          } as Sx
        }
      >
        <Stack sx={{ width: "fit-content" } as Sx}>
          <Typography sx={{ fontSize: 80, fontWeight: 700 } as Sx}>
            What is &quot;CRAFTSHOP&quot;?
          </Typography>
          <Typography
            sx={
              {
                fontSize: 36,
                fontWeight: 700,
                lineHeight: "70px",
                mt: "48px",
              } as Sx
            }
          >
            CRAFTSHOP bring your art ideas into physical goods. <br />
            The number of services available is constantly increasing.
          </Typography>
          <Stack direction={"row-reverse"} sx={{ mt: 10 } as Sx}>
            <WhiteLogo></WhiteLogo>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

function Block3() {
  const theme = useTheme();
  console.log(theme);
  return (
    <Stack sx={containerSx}>
      <Stack
        spacing={12.5}
        sx={
          { py: 16, mt: 12.5, bgcolor: "#F5F5F5", alignItems: "stretch" } as Sx
        }
      >
        <Typography
          sx={
            {
              fontSize: 80,
              fontWeight: 700,
              color: "#4B4B4B",
              textAlign: "center",
            } as Sx
          }
        >
          Using CraftShop
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"space-around"}
          sx={{ flex: 1 }}
        >
          {(
            [
              {
                name: "STEP.1",
                icon: <IndexStep1></IndexStep1>,
                description: "Fill order form got offer",
              },
              {
                name: "STEP.2",
                icon: <IndexStep2></IndexStep2>,
                description: "Printing book or Making goods",
              },
              {
                name: "STEP.3",
                icon: <IndexStep3></IndexStep3>,
                description: "Delivering book",
              },
            ] as { name: string; icon: ReactNode; description: string }[]
          ).map((e) => (
            <Stack key={e.name} alignItems={"center"}>
              {e.icon}
              <Typography sx={{ fontSize: 36, fontWeight: 700, mt: 2.5 } as Sx}>
                {e.name}
              </Typography>
              <Typography sx={{ fontSize: 24 } as Sx}>
                {e.description}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default function Home() {
  return (
    <Stack
      sx={
        {
          width: 1,
          alignItems: "center",
        } as Sx
      }
    >
      <Block1></Block1>
      <Block2></Block2>
      <Block3></Block3>
      <div style={{padding: "40px"}}></div>
    </Stack>
  );
}
