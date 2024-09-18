import Image from "next/image";
// import { useState } from "react";
import Navbar from "./components/Navbar";


export default function Home() {
  
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Image src={"/media/Girman.svg"} alt="Girman Tech" width={475} height={175} />
        <form action="/cards" method="get">
          <input type="text" name="search" placeholder="Search by First name, Last name, City or Contact" id="searchBar" />
        </form>
      </div>
    </>
  );
}
