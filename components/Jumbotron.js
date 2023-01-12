import React from 'react'
import Image from 'next/dist/client/image'

const Jumbotron = (props) => {
    const img = props.bg
    return (
        <div
            className="p-12 text-center relative overflow-hidden" style={{ height: "100vh" }}>
            <Image quality="90" loading="lazy" src={img} layout="fill" objectFit="cover" alt="heroBackdrop" />
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
                <div className="flex justify-center items-center h-full">
                    <div className="text-white">
                        {
                            props.title === 'Home' ? <Image quality="90" loading="lazy" src='/homehero.png' width="618" height="462" alt="heroBackdrop" /> : <h1 className="font-semibold sm:text-5xl text-4xl mb-4 jumbotron-title">{props.title}</h1>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron