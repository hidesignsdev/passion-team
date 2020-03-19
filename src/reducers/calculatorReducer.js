/* eslint-disable */
import { CLEAR, EVALUATED, DECIMAL_INPUT, NUMBER_INPUT, OPERATOR_INPUT } from "../types";

const initialState = {
    currentVal: "0",
    prevVal: "0",
    formula: "",
    evaluated: false
}

const isOperator = /[*/+-]/,
    endWithOperator = /([*/+-])$/,
    endWithOperatorAndNegative = /([*/+])-$/,
    endWithDigitAndNegative = /(\d+[-])$/,
    isEmptyPositiveOrNegative = /^((\s*)|([+-]))$/,
    isEmptyOrPositive = /^((\s*)|[+])$/,
    isEmptyOrNegative = /^((\s*)|[-])$/,
    getLastDigit = /(-?\d+)$/

const calculatorReducer = (state = initialState, action) => {
    let { currentVal, prevVal, formula, evaluated } = state
    switch (action.type) {
        case NUMBER_INPUT:
            const number = action.payload.number
            if (evaluated) {
                currentVal = number
                formula = number === "0" ? "" : number
                evaluated = false
            }
            else {
                currentVal = currentVal === "0" || isOperator.test(currentVal) ? number : currentVal + number
                formula = currentVal === "0" && number === "0" ? number : formula + number
            }
            return {
                ...state,
                currentVal,
                formula,
                evaluated
            }
        case OPERATOR_INPUT:
            const operator = action.payload.operator
            if (evaluated) {
                currentVal = operator
                formula = prevVal + operator
                evaluated = false
            } else if (isEmptyPositiveOrNegative.test(formula)) {
                switch (operator) {
                    case "-":
                        currentVal = operator
                        formula = isEmptyOrPositive.test(formula) ? operator : ""
                        break;
                    case "+":
                        currentVal = operator
                        formula = isEmptyOrNegative.test(formula) ? operator : ""
                        break;
                    default: break;
                }
            } else if (!endWithOperator.test(formula)) {
                currentVal = operator
                prevVal = formula
                formula += operator
            } else if (endWithDigitAndNegative.test(formula) && operator === "-") {
                currentVal = operator
                formula = formula.replace(/-$/, "+")
            } else if (!endWithOperatorAndNegative.test(formula)) {
                currentVal = operator
                if (endWithOperatorAndNegative.test(formula + operator)) {
                    formula += operator
                }
                else formula = prevVal + operator
            } else {
                currentVal = operator
                formula = prevVal + operator
            }
            return {
                ...state,
                currentVal,
                prevVal,
                formula,
                evaluated
            }
        case EVALUATED:
            let answer = 0
            if(!evaluated && formula !== ""){
                let expression = formula
                while (endWithOperator.test(expression)) {
                    expression = expression.slice(0, -1)
                }
                answer = Math.round(10000 * eval(expression)) / 10000
                currentVal = answer
                formula = formula + "=" + answer
                prevVal = answer
                evaluated = true
            }
            else {
                currentVal = "0"
                prevVal = "0"
                formula = ""
                evaluated = false
            }
            return {
                ...state,
                currentVal,
                formula,
                prevVal,
                evaluated
            }
        case CLEAR:
            return {
                ...state,
                currentVal: "0",
                prevVal: "0",
                formula: "",
                evaluated: false
            }
        case DECIMAL_INPUT:
            if (evaluated) {
                currentVal = "0."
                formula = "0."
                evaluated = false
            } else if (!currentVal.includes(".")) {
                if (endWithOperator.test(formula) ||
                    (currentVal === "0" && formula === "")) {
                        currentVal = "0."
                        formula += "0."
                }
                else {
                    currentVal = formula.match(getLastDigit)[0] + ".", //Regex get the last digit
                    formula += "."
                }
            }
            return {
                ...state,
                currentVal,
                formula,
                evaluated
            }
        default: return state;
    }
}

export default calculatorReducer;