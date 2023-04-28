import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Loading from "./Loading";
import Navbar from "./Navbar";

const Layout = () => {
  const { state } = useNavigation();

  return (
    <>
      <Navbar />
      <main>
        <ScrollRestoration getKey={({ pathname }) => pathname} />
        {state === "loading" ? <Loading /> : <Outlet />}
      </main>
    </>
  );
};

export default Layout;
