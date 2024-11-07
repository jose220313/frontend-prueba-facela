'use client';
import React, {useState, useEffect} from 'react';
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";

interface INavLink {
    path: string;
    name: string;
    hideOnSmall: boolean;
}

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [currentPath, setCurrentPath] = useState<string>('');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname);
        }
    }, []);

    const routes: INavLink[] = [
        {path: '/', name: 'HOME', hideOnSmall: false},
        {path: '/features', name: 'FEATURES', hideOnSmall: false},
        {path: '/partners', name: 'PARTNERS', hideOnSmall: true},
        {path: '/pricing', name: 'PRICING', hideOnSmall: true},
        {path: '/blog', name: 'BLOG', hideOnSmall: true},
        {path: '/contact', name: 'CONTACT', hideOnSmall: false},
        {path: '/users', name: 'USERS', hideOnSmall: false},
        {path: '/login', name: 'LOGIN', hideOnSmall: false},
    ];

    useEffect(() => {
        const handleResize = () => {
            setMenuOpen(false);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="border-b p-4 bg-[#232a31] text-white flex justify-center items-center relative">
            <div className="w-full max-w-screen-xl flex justify-between items-center mx-auto md:px-16">
                <div className="border-2 p-2">
                    <p className="text-3xl">
                        <a href="/">FLAT<b>HOST</b></a>
                    </p>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <Menu className="w-6 h-6"/>
                    </button>
                </div>
                <ul className={`absolute top-full left-0 w-full bg-[#232a31] p-4 flex flex-col items-start md:items-center gap-4 ${menuOpen ? 'block' : 'hidden'} md:flex md:static md:flex-row md:w-auto`}>
                    {routes.map((route, index) => (
                        <li key={index}
                            className={`mx-2 flex justify-center items-center text-md hover:text-gray-400 ${currentPath === route.path ? 'text-green-300' : ''} ${route.hideOnSmall ? 'hidden lg:block' : ''}`}>
                            <a href={route.path}>
                                {route.name}

                            </a>
                            {['HOME','CONTACT','USERS'].includes(route.name) &&
                                <span className="ml-2 h-2 w-2 bg-red-500 rounded-full animate-ping"></span>}
                        </li>
                    ))}
                    <li className="w-full md:w-auto">
                        <Button className="bg-green-400 text-xs w-full">SIGN UP</Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;