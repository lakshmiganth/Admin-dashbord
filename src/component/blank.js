import React from "react";
import Sidemenu from "./sidemenu";
import TopBar from "./topbar";
function Blank() {
  return (
    <>
      <div id="wrapper">
        <Sidemenu/>
        <div id="content">
          <TopBar />
          {/* <!-- Begin Page Content --> */}
          <div class="container-fluid">
            {/* <!-- Page Heading --> */}
            <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
      </div>
    </>
  );
}
export default Blank;
