import React from 'react'

const LRImageCard = (props) => {
    return (
        <div className="mt-10 mx-40 max-lg:mx-20 max-md:mx-10 max-sm:mx-5">
            {props.children}
        </div>
    )
}

export default LRImageCard