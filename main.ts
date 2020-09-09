import path from "path";
import { app } from "electron";

const { menubar } = require("menubar");

const mb = menubar({
  dir: process.cwd(),
  icon: "icon.png",
  browserWindow: {
    webPreferences: {
      nodeIntegration: true,
    },
    transparent: true,
    vibrancy: "light",
  },
});

mb.on("ready", () => {
  console.log("App ready ✅");
});

if (process.env.NODE_ENV === "development") {
  mb._options.index = "http://localhost:8080";
} else {
  mb._options.index = "file://" + path.join(__dirname, "/dist/index.html");
}

app.allowRendererProcessReuse = true;
