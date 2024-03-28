
import React, { useState } from "react"

const rows = [
    {
        id: 1,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a09e3660012c356e3ec18314bb1a5af94f26c57fb1dcc6322caad9fe9bda4f94?"
    },
    {
        id: 2,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/41553844494b70e86cf2dea46191d40861d000110e28815ff050c090799a214e?"
    },
    {
        id: 3,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/78132e8aacc1d80e53daf4ac4930e50b28b117836ffb78a2e9e6951e6d7e024f?"
    },
    {
        id: 4,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a09e3660012c356e3ec18314bb1a5af94f26c57fb1dcc6322caad9fe9bda4f94?"
    },
    {
        id: 5,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b018b6c44f6fa77dd76de1206b456ca6438ff6049726db33bf720342b4b5498b?"
    },
    {
        id: 6,
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4c0d6291ddbd518cdadc11928ba567598319a36a63d7173f75aeb99f6080987?"
    },
]
const Sidebar = () => {
    const [active, setActive] = useState()
    return (
        <div className="flex gap-0 justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="w-[94px] h-[80%] flex flex-col justify-between items-center bg-blue-700 rounded-2xl">
                    <div className="flex w-full flex-col items-center">
                        <img
                            alt=""
                            loading="lazy"
                            src="/images/icon/icon-spopper.png"
                            className="w-6 aspect-square mr-1"
                        />
                    </div>
                    {/* <img
                        alt=""
                        src="/images/icon/icon-spopper.png"
                        loading="lazy"
                        className="w-8 aspect-square"
                    /> */}
                    <div className="flex w-full flex-col items-center border-l-4 border-gray-50 bg-white bg-opacity-20">
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a09e3660012c356e3ec18314bb1a5af94f26c57fb1dcc6322caad9fe9bda4f94?"
                            className="w-6 aspect-square mr-1"
                        />
                    </div>
                    <div className="flex w-full flex-col items-center ">
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41553844494b70e86cf2dea46191d40861d000110e28815ff050c090799a214e?"
                            className="w-6 aspect-square"
                        />
                    </div>
                    <div className="flex w-full flex-col items-center ">
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/78132e8aacc1d80e53daf4ac4930e50b28b117836ffb78a2e9e6951e6d7e024f?"
                            className="w-6 aspect-square"
                        />
                    </div>
                    <div className="flex w-full flex-col items-center ">
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8999fb5ad11a599f6c7cfebf70fbdf915c7bfeaaab065b9a16dfae9a89477b4f?"
                            className="w-6 aspect-square"
                        />
                    </div>

                    <div className="flex w-full flex-col self-stretch items-center ">
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b018b6c44f6fa77dd76de1206b456ca6438ff6049726db33bf720342b4b5498b?"
                            className="max-md:mt-10 w-6 aspect-square"
                        />
                    </div>
                    <div className="flex w-full flex-col items-center ">
                        <img
                            alt=""
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4c0d6291ddbd518cdadc11928ba567598319a36a63d7173f75aeb99f6080987?"
                            className="max-md:mt-10 w-6 aspect-square"
                        />
                    </div>



                    {/* <img
                        alt=""
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b018b6c44f6fa77dd76de1206b456ca6438ff6049726db33bf720342b4b5498b?"
                        className="mt-40 w-6 aspect-square max-md:mt-10"
                    /> */}
                    {/* <img
                        alt=""
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4c0d6291ddbd518cdadc11928ba567598319a36a63d7173f75aeb99f6080987?"
                        className="mt-12 w-6 aspect-square max-md:mt-10"
                    /> */}
                </div>
            </div>
            <div className="flex justify-center items-center w-[25px] my-auto bg-blue-700 rounded-r-lg shadow-sm">
                <img
                    alt=""
                    src="/images/icon/icon-arrow-right.svg"
                    loading="lazy"
                    className="aspect-[0.5] fill-blue-700 w-[25px]"
                />
            </div>
        </div>
    )
}

export default Sidebar