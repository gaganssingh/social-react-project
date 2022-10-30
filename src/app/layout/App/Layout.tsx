import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";
import { LeftPane } from "../../components/leftPane";
import { RightPane } from "../../components/rightPane";

export const Layout = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <LeftPane />
        <Outlet />
        <RightPane />
      </div>
    </div>
  );
};
