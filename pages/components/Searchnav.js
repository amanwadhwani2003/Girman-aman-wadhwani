// components/Navbar.js
// "use client";

import { useRouter } from 'next/navigation'; // Use next/navigation for routing
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default form submission behavior
            router.push(`/cards?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <nav className="navigation-bar">
            <div className="logo-heading">
                <Link href="/"><Image src="https://www.girmantech.com/Logo2.svg" alt='Girman Tech' width={160} height={70} /></Link>
            </div>
            <div className="nav-search-bar-div">
                <input id='nav-search-bar' type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} required />
            </div>
        </nav>
    );
}

export default Navbar;