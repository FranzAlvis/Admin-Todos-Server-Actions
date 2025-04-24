"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    icon: React.ReactNode;
    path: string;
    title: string;
}

export default function SidebarItem({ icon, path, title }: Props) {
    const pathName = usePathname();
    return (
        <>
            {/* <li>
                <a href="#" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                    <CiBookmarkCheck size={30} />
                    <span className="-mr-1 font-medium">Dashboard</span>
                </a>
            </li> */}
            <li>
                <Link href={path} className={
                    `px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:text-gray-700
                    ${pathName === path ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white" : "hover:bg-gray-100"}
                    `
                }>
                    {icon}
                    {/* <CiBookmarkCheck size={30} /> */}
                    <span className="group-hover:text-gray-700">{title}</span>
                </Link>
            </li>
        </>
    );
}