import Processing from '@/Components/Global/Dashboard/StatusDownload'
import React from 'react'

const Downloads = () => {
    return (
        <div className='flex flex-col gap-[16px] '>
            <div className='flex gap-[12px]'>
                <h1 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3 pr-[12px] opacity-50 border-r border-black'>Orders</h1>
                <h1 className='text-lg-h3 max-md:text-md-h3 max-sm:text-sm-h3'>Downloads</h1>
            </div>

            <div className='flex gap-[13px] flex-wrap '>
                <div className='flex flex-col  border border-black '>
                    <div className='flex pt-[8px] px-[12px] pb-[16px] pr-[35px] max-md:pr-[20px] max-sm:pr-[12px] flex-col gap-[22px] '>
                        <div className='flex flex-col gap-1 '>
                            <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 w-[120px] max-sm:w-[70px]'>Crypto Automated Trading</h4>
                            <h6 className='text-lg-h6 max-md:text-md-h6 max-sm:text-sm-h6 opacity-50'>#54664</h6>
                        </div>
                        <Processing status={"complete"} />

                    </div>
                    <div className='w-full border-t flex pt-[8px] px-[12px]'>
                        <h2 className='text-lg-h6 max-md:text-md-h6 max-sm:text-sm-h6'><span className='opacity-50'>Date of order:</span> 22.12.22</h2>
                    </div>
                </div>

                <div className='flex flex-col  border border-black '>
                    <div className='flex pt-[8px] px-[12px] pb-[16px] pr-[35px] max-md:pr-[20px] max-sm:pr-[12px] flex-col gap-[22px] '>
                        <div className='flex flex-col gap-1 '>
                            <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 w-[120px] max-sm:w-[70px]'>Crypto Automated Trading</h4>
                            <h6 className='text-lg-h6 max-md:text-md-h6 max-sm:text-sm-h6 opacity-50'>#54664</h6>
                        </div>
                        <Processing status={"complete"} />

                    </div>
                    <div className='w-full border-t flex pt-[8px] px-[12px]'>
                        <h2 className='text-lg-h6 max-md:text-md-h6 max-sm:text-sm-h6'><span className='opacity-50'>Date of order:</span> 22.12.22</h2>
                    </div>
                </div>

                <div className='flex flex-col  border border-black '>
                    <div className='flex pt-[8px] px-[12px] pb-[16px] pr-[35px] max-md:pr-[20px] max-sm:pr-[12px] flex-col gap-[22px] '>
                        <div className='flex flex-col gap-1 '>
                            <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 w-[120px] max-sm:w-[70px]'>Crypto Automated Trading</h4>
                            <h6 className='text-lg-h6 max-md:text-md-h6 max-sm:text-sm-h6 opacity-50'>#54664</h6>
                        </div>
                        <Processing status={"complete"} />

                    </div>
                    <div className='w-full border-t flex pt-[8px] px-[12px]'>
                        <h2 className='text-lg-h6 max-md:text-md-h6 max-sm:text-sm-h6'><span className='opacity-50'>Date of order:</span> 22.12.22</h2>
                    </div>
                </div>

                <div className='flex flex-col  border border-black '>
                    <div className='flex pt-[8px] px-[12px] pb-[16px] pr-[35px] max-md:pr-[20px] max-sm:pr-[12px] flex-col gap-[22px] '>
                        <div className='flex flex-col gap-1 '>
                            <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 w-[120px] max-sm:w-[70px]'>Crypto Automated Trading</h4>
                            <h6 className='text-lg-h6 max-md:text-md-h6 max-sm:text-sm-h6 opacity-50'>#54664</h6>
                        </div>
                        <Processing status={"complete"} />

                    </div>
                    <div className='w-full border-t flex pt-[8px] px-[12px]'>
                        <h2 className='text-lg-h6 max-md:text-md-h6 max-sm:text-sm-h6'><span className='opacity-50'>Date of order:</span> 22.12.22</h2>
                    </div>
                </div>

                <div className='flex flex-col  border border-black '>
                    <div className='flex pt-[8px] px-[12px] pb-[16px] pr-[35px] max-md:pr-[20px] max-sm:pr-[12px] flex-col gap-[22px] '>
                        <div className='flex flex-col gap-1 '>
                            <h4 className='text-lg-h4 max-md:text-md-h4 max-sm:text-sm-h4 w-[120px] max-sm:w-[70px]'>Crypto Automated Trading</h4>
                            <h6 className='text-lg-h6 max-md:text-md-h6 max-sm:text-sm-h6 opacity-50'>#54664</h6>
                        </div>
                        <Processing status={"complete"} />

                    </div>
                    <div className='w-full border-t flex pt-[8px] px-[12px]'>
                        <h2 className='text-lg-h6 max-md:text-md-h6 max-sm:text-sm-h6'><span className='opacity-50'>Date of order:</span> 22.12.22</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Downloads