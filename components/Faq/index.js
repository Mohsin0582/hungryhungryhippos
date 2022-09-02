export default function Faq() {
    const col_1 = `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat.`

    const col_2 = `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat.`

    const col_3 = `Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat.`


    return (
        <>
            <h2 className='w-full uppercase font-wicked-fill text-lg pl-4 sm:text-2xl '>Frequently asked nonsense...</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-7">
                <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-center">
                    <p className='px-4 sm:px-2 uppercase font-comic-bold-fill text-sm' dangerouslySetInnerHTML={{__html: col_1}} />
                </div>
                <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-center">
                    <p className='px-2 uppercase font-comic-bold-fill text-sm' dangerouslySetInnerHTML={{__html: col_2}} />
                </div>
                <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-center">
                    <p className='px-2 uppercase font-comic-bold-fill text-sm' dangerouslySetInnerHTML={{__html: col_3}} />
                </div>
            </div>
        </>
    )
}