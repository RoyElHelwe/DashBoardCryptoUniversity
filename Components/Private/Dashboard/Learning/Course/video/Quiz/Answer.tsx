import React, { useState } from 'react'

const Answer = ({answer, clicked, trueAnswer,setChecked}:any) => {
    const NormalStyle = "checked:bg-black checked:border-2 checked:border-black focus:ring-0 focus:bg-transparent focus:outline-none checked:focus:ring-0 checked:focus:bg-black hover:bg-white/10 checked:hover:bg-black checked:hover:border-2 checked:hover:border-black  border-black bg-transparent cursor-pointer w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] max-sm:w-[15px] max-sm:h-[15px] border-2"
    const ErrorStyle = "checked:bg-[red] checked:border-2 checked:border-[red] focus:ring-0 focus:bg-transparent focus:outline-none checked:focus:ring-0 checked:focus:bg-[red] hover:bg-white/10 checked:hover:bg-[red] checked:hover:border-2 checked:hover:border-[red]  border-[red] bg-transparent cursor-pointer w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] max-sm:w-[15px] max-sm:h-[15px] border-2"
    const CorrectStyle = "checked:bg-[green] checked:border-2 checked:border-[green] focus:ring-0 focus:bg-transparent focus:outline-none checked:focus:ring-0 checked:focus:bg-[green] hover:bg-white/10 checked:hover:bg-[green] checked:hover:border-2 checked:hover:border-[green]  border-[green] bg-transparent cursor-pointer w-[35px] h-[35px] max-md:w-[25px] max-md:h-[25px] max-sm:w-[15px] max-sm:h-[15px] border-2"
    
    return (
        <div className='flex gap-[20px] items-center'>
            <input  type="radio" disabled={clicked} onChange={()=> setChecked(answer)} name="Answer" id={answer} className={clicked ? answer === trueAnswer ? CorrectStyle : ErrorStyle : NormalStyle} />
            <label htmlFor={answer} className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4'>{answer}</label>
        </div>
    )
}

export default Answer