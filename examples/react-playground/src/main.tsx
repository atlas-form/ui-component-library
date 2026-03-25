import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Button, Card, CardContent, CardHeader, CardTitle, Input } from "@atlas-art/ui-react";
import "@atlas-art/ui-core/styles/ui.css";
import "./index.css";
import "./theme.css";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <main style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
      <Card>
        <CardHeader>
          <CardTitle>UI Library Source Playground</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ display: "grid", gap: 12 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <Button
                tone="secondary"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                Switch To {theme === "light" ? "Dark" : "Light"}
              </Button>
              <span>Current Theme: {theme}</span>
            </div>
            <Input placeholder="Edit packages/*/src and verify instantly" />
            <Button tone="primary">Primary</Button>
            <Button tone="secondary">Secondary</Button>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button tone="success">Success</Button>
              <Button tone="warning">Warning</Button>
              <Button tone="danger">Danger</Button>
              <Button tone="info">Info</Button>
              <Button tone="primary" appearance="outline">Outline</Button>
              <Button tone="primary" appearance="ghost">Ghost</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
