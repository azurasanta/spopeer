
import React, { useState } from "react"

const rows = [
    {
        id: 1,
        domain: "dashboard",
        label: "Dashboard",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a09e3660012c356e3ec18314bb1a5af94f26c57fb1dcc6322caad9fe9bda4f94?"
    },
    {
        id: 2,
        domain: "management",
        label: "User Management",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/41553844494b70e86cf2dea46191d40861d000110e28815ff050c090799a214e?"
    },
    {
        id: 3,
        domain: "activities",
        label: "Activities",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/78132e8aacc1d80e53daf4ac4930e50b28b117836ffb78a2e9e6951e6d7e024f?"
    },
    {
        id: 4,
        domain: "reports",
        label: "Reports",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a09e3660012c356e3ec18314bb1a5af94f26c57fb1dcc6322caad9fe9bda4f94?"
    },
    {
        id: 5,
        domain: "settings",
        label: "Settings",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b018b6c44f6fa77dd76de1206b456ca6438ff6049726db33bf720342b4b5498b?"
    },
    {
        id: 6,
        domain: "logout",
        label: "Logout",
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4c0d6291ddbd518cdadc11928ba567598319a36a63d7173f75aeb99f6080987?"
    },
]
const Sidebar = () => {
    const [expend, setExpend] = useState(true)
    const [active, setActive] = useState("activities")
    return (
        <div className={"flex gap-0 justify-center "}>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center bg-blue-700 rounded-2xl py-2">
                    <div className="flex w-full flex-col items-center py-4">
                        <div className="flex flex-row">
                            <img
                                alt=""
                                loading="lazy"
                                src="/images/icon/icon-spopper.png"
                                className="w-6 aspect-square"
                            />
                        </div>
                    </div>
                    {rows.map((e, i) =>
                        <div
                            onClick={() => setActive(e.domain)}
                            className={(e.domain === active ? "border-l-4 border-gray-50 bg-white bg-opacity-20" : "") + " flex w-full flex-col justify-items-start px-6 py-[3vh]" + (i === 4 ? " mt-12" : " ")}
                        >
                            <div className={"flex flex-row gap-3 " + (i === active ? "transform -translate-x-[4px] " : " ")}>
                                <img
                                    alt=""
                                    loading="lazy"
                                    src={e.icon}
                                    className={"w-6 aspect-square"}
                                />
                                {expend ? (<div className="text-white">{e.label}</div>) : ""}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-center items-center w-[20px] my-auto bg-blue-700 rounded-r-lg shadow-sm"
                onClick={() => setExpend((prev) => !prev)}>
                <img
                    alt=""
                    src={"/images/icon/" + (expend ? "icon-arrow-left.svg":"icon-arrow-right.svg")}
                    loading="lazy"
                    className="aspect-[0.5] fill-blue-700 w-[25px]"
                />
            </div>
        </div>
    )
}

export default Sidebar