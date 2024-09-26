const Calculator = () => {







    return (
        <>
            <div className="container mx-auto ">
                <div className="w-10/12 mx-auto gap-5 rounded-xl flex-wrap  flex items-center justify-center ">
                    <h1 className="text-xl opacity-65 w-full text-center">
                        3*6
                    </h1>
                    <h1 className="text-5xl font-bold text-center">
                        18
                    </h1>
                </div>




                <div className="flex w-11/12 mx-auto gap-2">
                    <div className=" flex w-8/12 flex-wrap justify-center gap-3 mt-16 mx-auto">


                        <ShowNumber />

                    </div>
                    <div className=" flex w-20  flex-wrap justify-center gap-3 mt-16 mx-auto">


                        <Operator op="+" />
                        <Operator op="-" />
                        <Operator op="*" />
                        <Operator op="/" />

                    </div>
                </div>



            </div>
        </>
    )
}

export default Calculator;




const Number = ({ i }: { i: number }) => {
    return (
        <button
            className="w-[30%] hover:opacity-100 active:text-gray-700 flex justify-center items-center h-16 bg-black opacity-85 rounded-xl font-bold text-xl"
        >{i}</button>
    )
}


const Operator = ({ op }: { op: string }) => {
    return (
        <button
            className="p-1 w-full hover:opacity-100 font-bold text-3xl flex justify-center items-center active:text-gray-700 bg-black opacity-85 rounded-2xl"
        >{op}</button>
    )
}

const ShowNumber = () => {
    return (
        <>
            {
                Array.from({ length: 9 }, (_, i: number) => {
                    return <Number i={i + 1} />
                })
            }
            <Number i={0} />
        </>
    )
}