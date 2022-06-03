import { Outlet } from "react-router-dom";
function SidebarLayout() {
  return (
    <>
      <div className="w-80 bg-white d-flex flex-column shadow position-fixed h-100">
        <h1 className="mx-3 tw-mt-3 mb-3 text-6 fw-bolder">Sidebar</h1>
      </div>
      <div className="p-3 d-none d-sm-block position-absolute tw-left-80 tw-m-5">
        <h1 className="text-5 mb-3 fw-bold">{"FRIEND ZONE"}</h1>
        <div className="row g-2">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default SidebarLayout;
