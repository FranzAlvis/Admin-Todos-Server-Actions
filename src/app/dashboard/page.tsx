import { getServerSession } from "next-auth";
import WidgetItem from "../../components/WidgetItem";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("api/auth/signin");
    }

    return (
        <>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <WidgetItem title="Usuario conectado">
                    <div className="flex flex-col">
                        <span>{session.user?.name}</span>
                        <span>{session.user?.image}</span>
                        <span>{session.user?.email}</span>
                    </div>
                </WidgetItem>
            </div>
        </>
    );
}