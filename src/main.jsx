import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

export function Home() {
  return (
    <>
      <NavBar />
      <main>
        <h2>Welcome to my Portfolio 🐨</h2>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
