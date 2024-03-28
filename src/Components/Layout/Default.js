"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DefaultLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden px-[24px] py-[48px]">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden border-2 border-solid border-white rounded-lg shadow-md">
          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            {/* <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10"> */}
            <div className="p-4 md:p-6 2xl:p-10">
            {/* <div className="p-2 border-2 "> */}
              {/* <!-- ===== Header Start ===== --> */}
              <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
              {/* <!-- ===== Header End ===== --> */}
              <div className="my-3">
                {children}
              </div>
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
