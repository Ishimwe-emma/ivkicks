import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "./components/Global/Footer";
import Nav from "./components/Global/Nav";
import Cursor from "./components/Global/Cursor";
import { Suspense } from "react";
import { Zoom } from "react-reveal";

function App() {
  const location = useLocation();

  useEffect(() => {}, [location]);
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen bg-white sticky flex items-center justify-center top-0 z-[1999]">
          <Zoom>
            <img src="/public/Logo.svg" alt="" />
          </Zoom>
        </div>
      }
    >
      <div
        className={`flex flex-col w-screen h-fit overflow-x-hidden transition-all duration-700 relative`}
        style={{
          background: `${
            location.pathname != "/about" ? "#f5f5f5" : "rgb(10,8,58)"
          }`,
        }}
      >
        {/* <Cursor /> */}
        <Nav />

        <Outlet />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
