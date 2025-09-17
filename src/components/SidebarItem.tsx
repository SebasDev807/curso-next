'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    title: string;
    icon: React.ReactNode;
}


export const SidebarItem = ({ path, title, icon }: Props) => {

    const pathName = usePathname();

    return (
        <li>
            {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
            <Link href={path}
                className={
                    `px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-gray-200
                    ${path === pathName ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''}`
                }>

                {icon}
                <span className="group-hover:text-gray-700">
                    {title}
                </span>
            </Link>
        </li >
    )
}
