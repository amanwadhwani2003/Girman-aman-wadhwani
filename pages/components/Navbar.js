"use client";

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link';
// import '@/styles/navbar.css'
// import "./utilities.css"
// import * from "../media"


const Navbar = () => {

    return (
        <>
            <nav className="navigation-bar">
                <div className="logo-heading">
                    <Link href="/"><Image id='main-logo' src="https://www.girmantech.com/Logo2.svg" alt='Girman Tech' width={160} height={70} /></Link>
                </div>
                <ul className="nav-items-list">
                    <Link href="/"><li className="nav-item">Search</li></Link>
                    <Link href="https://www.girmantech.com/"><li className="nav-item">Website</li></Link>
                    <Link href="https://www.linkedin.com/company/girmantech/"><li className="nav-item">Linkedin</li></Link>
                    {/* <li className="nav-item"></li> */}
                    <Link href="mailto:contact@girmantech.com"><li className="nav-item">Contact</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
