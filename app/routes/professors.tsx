import { HeadersFunction, MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import Autocomplete from "~/components/Autocomplete";

export const meta: MetaFunction = () => {
    return [
      { title: "ProfessorBenchmark" },
      { name: "description", content: "Compare professors" },
    ];
};

export const headers: HeadersFunction = () => {
    return {
      "Cache-Control": "max-age=604800, stale-while-revalidate=86400",
    };
  }
  

export default function Courses() {
    return (
        <>
            <div className="">
                <Navbar />
                <div className="max-w-3xl flex flex-col mt-8 mx-auto items-center">
                    <h1 className="text-4xl font-bold mb-4">Search by professor</h1>
                    <Autocomplete category="professor" />
                </div>
            </div>
        </>
    )
}