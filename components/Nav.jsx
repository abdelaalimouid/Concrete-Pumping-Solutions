import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
    { path: "/", name: "accueil" },
    { path: "/about", name: "à propos" },
    { path: "/portfolio", name: "portfolio" },
    { path: "/careers", name: "carrières" },
    { path: "/contact", name: "contact" },
];


const Nav = ({ containerStyles, linkStyles, underlineStyles, closeSheet, setIsOpen }) => {
    const pathname = usePathname();

    const handleLinkClick = (e, path) => {
        e.preventDefault();
        if (closeSheet) {
            closeSheet();
            setTimeout(() => {
                if (setIsOpen) {
                    setIsOpen(false);
                }
                window.location.href = path;
            }, 500); // Match the duration with the animation duration
        } else {
            window.location.href = path;
        }
    };

    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => (
                <a
                    href={link.path}
                    key={index}
                    className={`capitalize ${linkStyles}`}
                    onClick={(e) => handleLinkClick(e, link.path)}
                >
                    {link.path === pathname && 
                    <motion.span 
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        transition={{ type: 'tween' }}
                        layoutId="underline"
                        className={`${underlineStyles}`}
                    />}
                    {link.name}
                </a>
            ))}
        </nav>
    );
};

export default Nav;
