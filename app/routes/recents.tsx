import Navbar from "~/components/Navbar";
import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
      { title: "ProfessorBenchmark" },
      { name: "description", content: "View recent comparisons" },
    ];
};

export default function Recents() {
    return (
        <>
            <Navbar/>
            <div className="">
                <div className="gap-x-60 flex flex-row justify-center">
                </div>
            </div>
        </>
    )
}