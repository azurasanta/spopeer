
const Header = () => {
    return (
        <div className="flex flex-col justify-center self-stretch px-4 rounded-lg shadow-lg bg-stone-50">
            <div className="flex gap-2 w-full max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col flex-1 py-2 text-neutral-600 max-md:max-w-full">
                    <div className="text-4xl font-extrabold max-md:max-w-full">
                        User activities
                    </div>
                    <div className="mt-2 text-base font-medium max-md:max-w-full">
                        Welcome back, Xeni
                    </div>
                </div>
                <div className="flex gap-4 py-5">
                    <img
                        alt=""
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/045b33985995a33e8d9f9623db99e3f7792c17b182993aecb1fece1fab4ba2b4?"
                        className="shrink-0 my-auto w-6 aspect-square"
                    />
                    <img
                        alt=""
                        loading="lazy"
                        srcSet="..."
                        className="shrink-0 aspect-square w-[55px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Header