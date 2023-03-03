import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Answer from './Answer';

interface Question {
    numberQ: number;
    question: string;
    yesNoQ: boolean;
    answerArray: string[];
    trueAnswer: string
}

const Questions = ({ numberQ, question, yesNoQ, answerArray, trueAnswer }: Question) => {
    const [checked, setChecked] = useState(null)
    const [clicked, setClicked] = useState(false)
    if (yesNoQ) {
        answerArray = ['Yes', 'No']
    }
    const handler = (e:any) => {
        e.preventDefault();
        if(checked){
            setClicked(true)
        }
    }
    return (
        <div className='flex flex-col gap-[30px] max-sm:gap-[15px]'>
            <div className='flex flex-col gap-[20px] max-sm:gap-[10px]'>
                <h3 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3'>{numberQ}) Question {numberQ}</h3>
                <p className='text-lg-h5 max-md:text-md-h5 max-sm:text-sm-h5'>{question} </p>
            </div>
            <form action="" className='flex flex-col gap-[60px] max-sm:gap-[20px]'>
                <div className='flex flex-col gap-[18px] max-sm:gap-[10px] border-b pb-[60px] max-sm:pb-[20px]'>
                    {answerArray?.map((answer: any, index:number) => (
                        <Answer key={index} answer={answer} trueAnswer={trueAnswer} setChecked={setChecked} clicked={clicked} />
                    )
                    )}
                </div>
                <div className='flex justify-end'>
                    <button onClick={(e) => handler(e)} className='flex uppercase px-[62px] py-[30px] max-md:px-[40px] max-md:py-[25px] max-sm:px-[10px] max-sm:py-[10px] text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 shadow-buttom bg-btn text-black'>
                        <div className='flex gap-[24px]'>
                            Check right answers
                            <Image
                                priority
                                src="/Icons/ArrowBlack.svg"
                                height={20}
                                width={31}
                                alt="Arrow"
                                className='w-auto h-auto max-md:w-[30px] max-sm:w-[20px] max-sm:h-auto'
                            />
                        </div>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Questions