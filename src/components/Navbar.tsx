'use client'

import Link from "next/link";
import NavLink from "@/components/NavLink";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-secondary border-bottom">
            <div className="container">
                <Link className="navbar-brand h1 mb-0 text-primary" href="/">
                    ACD
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar" aria-controls="mainNavbar"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse pt-4 pt-lg-0" id="mainNavbar">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-end gap-3">
                        <li className="nav-item">
                            <NavLink className="nav-link" href="/">Home</NavLink>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <button className="btn btn-primary py-1 px-3" onClick={() => {
                                const height = Math.max(document.body.scrollHeight, document.body.offsetHeight,
                                    document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
                                window.scrollTo({
                                    top: height,
                                    left: 0,
                                    behavior: 'smooth'
                                })
                            }}>Report Corruption!</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}