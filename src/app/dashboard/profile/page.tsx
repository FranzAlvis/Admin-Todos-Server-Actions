"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
    const { data } = useSession();
    return (
        <div className="space-y-5">
            <h1>Page Profile</h1>
            <hr />
            <div className="flex flex-col">
                <span>{data?.user?.name ?? "No name"}</span>
                <span>{data?.user?.email ?? "No email"}</span>
                <span>{data?.user?.image ?? "No image"}</span>
            </div>
        </div>
    );
}