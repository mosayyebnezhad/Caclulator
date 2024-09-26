export const getOpFromNum = (i: number): string => {

    let Op

    switch (i) {
        case 0:
            Op = "+"
            break;
        case 1:
            Op = "-"
            break;
        case 2:
            Op = "*"
            break;
        case 3:
            Op = "/"
            break;
        default:
            Op = "Null"
            break;
    }


    return Op

}

export const getNumFromOp = (i: string): number => {

    let Op

    switch (i) {
        case "+":
            Op = 0
            break;
        case "-":
            Op = 1
            break;
        case "*":
            Op = 2
            break;
        case "/":
            Op = 3
            break;
        default:
            Op = 9999999999999999
            break;
    }


    return Op

}