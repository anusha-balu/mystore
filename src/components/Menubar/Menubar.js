import React from "react";
import Header from "../Header/Header";
import CKeditor from "../Editor/CKeditor";
export default function Menubar() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header></Header>
      {/* <CKeditor>second part of div</CKeditor> */}
    </div>
  );
}
