import Image from "next/image";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import SidebarItem from "./SidebarItem";
import { IoCalendarOutline, IoCheckboxOutline, IoListOutline, IoPersonOutline } from "react-icons/io5";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { LogoutButton } from "./LogoutButton";

const menuItems = [
    {
        icon: <IoCalendarOutline />,
        title: "Dashboard",
        path: "/dashboard",
    },
    {
        icon: <IoCheckboxOutline />,
        title: "Rest Todos",
        path: "/dashboard/rest-todos",
    },
    {
        icon: <IoListOutline />,
        title: "Server Actions",
        path: "/dashboard/server-actions",
    },
    {
        icon: <IoPersonOutline />,
        title: "Profile",
        path: "/dashboard/profile",
    },

]

export default async function SideBar() {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("api/auth/signin");
    }

    return (
        <>
            <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div className="-mx-6 px-6 py-4">
                        <Link href={"/dashboard"} title="home">
                            <Image src={"https://img.freepik.com/vector-gratis/icono-lindo-gato-negro-aislado_24640-134010.jpg?semt=ais_hybrid&w=740"}
                                alt={"tailus logo"}
                                width={32}
                                height={32}
                            >
                            </Image>
                        </Link>
                    </div>

                    <div className="mt-8 text-center">
                        <Image src={session.user?.image!}
                            alt={"algo"} className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28 border border-sky-600"
                            width={128}
                            height={128}
                        >
                        </Image>
                        <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{session.user?.name}</h5>
                        <span className="hidden text-gray-400 lg:block">{session.user?.roles?.join(", ")}</span>
                    </div>

                    <ul className="space-y-2 tracking-wide mt-8">
                        {
                            menuItems.map(menu => (
                                <SidebarItem key={menu.path} {...menu} />
                            ))
                        }
                    </ul>
                </div>

                <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                    <LogoutButton />
                </div>
            </aside>
        </>
    );
}