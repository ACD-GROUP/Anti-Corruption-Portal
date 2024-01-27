'use client'

import Link, { LinkProps } from "next/link";
import React, {AnchorHTMLAttributes} from "react";
import {usePathname} from "next/navigation";

export default function NavLink(props: LinkProps&AnchorHTMLAttributes<any>&{ children: React.ReactNode }) {
    const pathname = usePathname();
    console.log(pathname)

    return <Link {...props}
                 className={props.className + (pathname === props.href ? ' active' : '')}
                 aria-current={pathname === props.href ? 'page' : undefined} />
}