import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../../components";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
