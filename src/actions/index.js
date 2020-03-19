import { CLEAR, EVALUATED, NUMBER_INPUT, DECIMAL_INPUT, OPERATOR_INPUT } from "../types";

export const clear = () => {
    return {
        type: CLEAR
    }
}

export const evaluate = () => {
    return {
        type: EVALUATED
    }
}

export const numberInput = (number) => {
    return {
        type: NUMBER_INPUT,
        payload: {
            number
        }
    }
}

export const operatorInput = (operator) => {
    return {
        type: OPERATOR_INPUT,
        payload: {
            operator
        }
    }
}

export const decimalInput = () => {
    return {
        type: DECIMAL_INPUT
    }
}