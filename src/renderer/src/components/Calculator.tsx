import { Fragment, useState } from "react";
import { getOpFromNum } from '../utils';

const Calculator = () => {

    const [temparea, setTemparea] = useState<number>(0)
    const [num1, setN1] = useState<number>(0)
    const [num2, setN2] = useState<number>(0)



    const ButtonsClick = (i: number) => {
        console.log("buttons " + i)
    }
    const OperatorsClick = (op: string) => {
        console.log("Operators " + op)
    }








    // top of here write main logic
    // -----------------------------------------------------------------------







    return (
        <>
            <div className="container mx-auto ">
                <div className="w-10/12 mx-auto gap-5 rounded-xl flex-wrap  flex items-center justify-center ">
                    <h1 className="text-xl opacity-65 w-full text-center">
                        3*6
                    </h1>
                    <h1 className="text-5xl font-bold text-center">
                        {temparea}
                    </h1>
                </div>




                <div className="flex w-11/12 mx-auto gap-2">
                    <div className=" flex w-8/12 flex-wrap justify-center gap-3 mt-16 mx-auto">


                        <ShowNumber Runner={
                            (i: number) => {

                                ButtonsClick(i)
                            }
                        } />

                    </div>
                    <div className=" flex w-20  flex-wrap justify-center gap-3 mt-16 mx-auto">

                        {Array.from({ length: 4 }, (_, i: number) => {

                          


                            const Op = getOpFromNum(i)
                            return (
                                <Fragment key={i}>
                                    <Operator handler={() => {

                                        OperatorsClick(Op)

                                    }} op={Op} />
                                </Fragment>
                            )
                        })}

                    </div>
                </div>



            </div>
        </>
    )
}

export default Calculator;




const Number = ({ i, action }: { i: number, action: (i: number) => void }) => {


    return (
        <button
            // onClick={action}
            onClick={() => action(i)}
            className="w-[30%] hover:opacity-100 active:text-gray-700 flex justify-center items-center h-16 bg-black opacity-85 rounded-xl font-bold text-xl"
        >{i}</button>
    )
}

interface Onclick {
    Runner: (i: number) => void
}

const ShowNumber = (prop: Onclick) => {
    const { Runner } = prop
    // Runner()
    return (
        <>
            {
                Array.from({ length: 9 }, (_, i: number) => {
                    return (
                        <Fragment key={i}>
                            <Number action={() => Runner(i + 1)} i={i + 1} />
                        </Fragment>
                    )
                })
            }
            <Number action={() => Runner(0)} i={0} />
        </>
    )
}

const Operator = ({ op, handler }: { op: string, handler: () => void }) => {


    return (
        <button
            onClick={() => handler()}
            className="p-1 w-full hover:opacity-100 font-bold text-3xl flex justify-center items-center active:text-gray-700 bg-black opacity-85 rounded-2xl"
        >{op}</button>
    )
}