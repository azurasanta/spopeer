import * as React from "react";

function UserCard({...props}) {
    const {user} = props
    return (
        <div className="flex gap-4 font-semibold text-black">
            <img
                alt=""
                loading="lazy"
                src={user.avatar}
                className="shrink-0 aspect-square w-[55px]"
            />
            <div className="flex flex-col flex-1 px-5 my-auto">
                <div className="text-base leading-5">{user.full_name}</div>
                <div className="text-xs leading-5">{user.user_name}</div>
            </div>
        </div>
    );
}

export default UserCard
