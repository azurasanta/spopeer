import UserCard from "./UserCard"

const rows = [
    {
        user: {
            id: "233mm5454",
            full_name: "Arlene McCoy",
            user_name: "coach-jbell",
            avatar: "/images/users/user-03.png"
        },
        activity: "login",
        time: "05:49 pm"
    },
    {
        user: {
            id: "233mm54523d",
            full_name: "Jerome Bell",
            user_name: "coach-jbell",
            avatar: "/images/users/user-04.png"
        },
        activity: "login",
        time: "05:49 pm"
    },
    {
        user: {
            id: "233mm54523d",
            full_name: "Jerome Bell",
            user_name: "coach-jbell",
            avatar: "/images/users/user-05.png"
        },
        activity: "login",
        time: "05:49 pm"
    },
    {
        user: {
            id: "233mm54523d",
            full_name: "Jerome Bell",
            user_name: "coach-jbell",
            avatar: "/images/users/user-06.png"
        },
        activity: "login",
        time: "05:49 pm"
    },
    {
        user: {
            id: "233mm54523d",
            full_name: "Jerome Bell",
            user_name: "coach-jbell",
            avatar: "/images/users/user-07.png"
        },
        activity: "login",
        time: "05:49 pm"
    },
]

const Table = () => {
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 lg:grid-cols-5">
                <div className="p-2.5 lg:p-3">
                    <h5 className="text-sm font-bold uppercase xsm:text-base">
                        S/N
                    </h5>
                </div>
                <div className="hidden lg:block p-2.5 lg:p-3">
                    <h5 className="text-sm font-bold uppercase xsm:text-base">
                        NO
                    </h5>
                </div>
                <div className="p-2.5 lg:p-3 col-span-2 lg:col-span-1">
                    <h5 className="text-sm font-bold uppercase xsm:text-base">
                        NAME
                    </h5>
                </div>
                <div className="hidden lg:block p-2.5 lg:p-3">
                    <h5 className="text-sm font-bold uppercase xsm:text-base">
                        Activity
                    </h5>
                </div>
                <div className="p-2.5 lg:p-3">
                    <h5 className="text-sm font-bold uppercase xsm:text-base">
                        Time
                    </h5>
                </div>
            </div>
            <div className="hTable tbody">
                {rows.map((e, i) => (
                    <div
                        className={`grid grid-cols-4 lg:grid-cols-5 ${i === rows.length - 1
                            ? ""
                            : "border-b-2 dark:border-strokedark"
                            }`}
                        key={i}
                    >
                        <div className="flex items-center p-2.5 xl:p-3">
                            <input
                                type="checkbox" />
                        </div>
                        <div className="hidden lg:flex items-center p-2.5 xl:p-3">
                            <p className="text-black dark:text-white">{i + 1}</p>
                        </div>
                        <div className="flex col-span-2 lg:col-span-1 items-center p-2.5 xl:p-3">
                            <UserCard user={e.user} />
                        </div>
                        <div className="hidden lg:flex items-center p-2.5  xl:p-3">
                            <p className="text-black dark:text-white">{e.activity}</p>
                        </div>
                        <div className="flex items-center p-2.5 xl:p-3 gap-2">
                            <p className="text-black dark:text-white">{e.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Table