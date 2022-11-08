import React from 'react'

const Checkbox = (props) => {
    return (
        <div>
            <span style={{ color: "#DAA520" }} className="sm:text-xl text-lg">{props.title}</span>
            <div className="mt-2 mb-4">
                <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
                    {
                        Object.keys(props.items).map(item => {
                            return (

                                <div className="form-check flex items-center mb-1" key={props.items[item].id}>
                                    <input className="form-check-input appearance-none p-2 h-4 w-4 border border-gray-300 rounded-sm bg-white checkbox focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id={props.items[item].dish} onChange={props.handleChange} name={props.title} />
                                    <label className="form-check-label inline-block text-gray-800" >
                                        <h6 className='sm:text-lg text-md'>{props.items[item].dish}</h6></label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Checkbox