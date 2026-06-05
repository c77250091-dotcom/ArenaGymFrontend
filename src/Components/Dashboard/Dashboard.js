import "../CSS/Global.css";
import { Outlet } from "react-router-dom";
import Slider from "./Slider";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import { useHeaders } from "../Stats";
import { useEffect } from "react";
import { useProfileStats } from "../Stats";

export default function Dashboard() {
  const state = useProfileStats();
  const [isOpen, setIsOpen] = useState(false);
  const head = useHeaders();
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    );
  }, []);
  return (
    <div className="grid">
      <Stack
        style={{
          gridColumn: "span 4",
          alignItems: "center",
          padding: "10px",
          justifyContent: "center",
        }}
        direction="row"
        spacing={1}
      >
        <div className="Greeting">
          <section>
            {head.head === "Overview" ? (
              <p>
                Welcome, <span>{state.FirstName.toUpperCase()}</span>
              </p>
            ) : (
              <p>{head.title}</p>
            )}
            <p
              style={{
                color: "rgb(165, 142, 142)",
                fontSize: "10px",
                textShadow: "0 0 0",
              }}
            >
              {head.head === "Overview" ? date : head.info}
            </p>
          </section>
          <MenuIcon
            className="icon"
            style={{
              cursor: "pointer",
              position: "relative",
              zIndex: "3",
            }}
            onClick={() => setIsOpen(true)}
          />
        </div>
      </Stack>

      <Outlet />

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        variant="temporary"
        sx={{
          "& .MuiDrawer-paper": {
            background:
              "linear-gradient(145deg, rgba(60,0,0,0.95), rgba(20,0,0,0.95))",
            borderRight: "2px solid rgba(255, 0, 0, 0.15)",
            backdropFilter: "blur(1px)",
            width: "250px",
            backgroundColor: "transparent",
          },
        }}
      >
        <Slider />
      </Drawer>
    </div>
  );
}
