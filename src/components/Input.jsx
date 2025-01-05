import React, {useId} from 'react'

const Input= React.forwardRef(function Input({
    label,
    type = 'text',
    clasName="",
    ...props
}, ref){
    return (
        <div className="w-full">
            {label && <label
            className='inline-block mb-1 pl-1'
            htmlFor= {id}    >
                {label}
            </label>          
        }
        <input type={text} className={
            `px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-500  border border-gray-200 w-full
            ${clasName}`} ref={ref} />
        </div>
    )
})

export default Input