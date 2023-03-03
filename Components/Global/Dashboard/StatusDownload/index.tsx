
const index = ({status} : any) => {
    return (
        <div className={'py-[5px] px-[10px] flex justify-center items-center w-[76px] ' + (status == "process" ? " bg-process/[.16]" : status == "complete" ? " bg-complete/[.16]" : "")}>
            <div className="flex gap-1 items-center ">
                <div className={'w-2 h-2 rounded ' +(status == "process" ? " bg-process" : status == "complete" ? " bg-complete" : "")}/>
                <h6 className="text-lg-h6 max-md:text-md-h6 max-sm:text-sm-h6">{status.slice(0,1).toUpperCase()}{status.slice(1)}</h6>
            </div>
        </div>
    )
}

export default index