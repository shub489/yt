import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

function AppLayout() {
    const isOpenSidebar = useSelector((state) => state.sidebar.isOpenSidebar);
    return (
        <>
            <Header />
            <div className="flex">
                {isOpenSidebar && <Sidebar />}
                <Outlet /> {/* Outlet will render Body or WatchPage right next to Sidebar */}
            </div>
        </>
    );
}

export default AppLayout;