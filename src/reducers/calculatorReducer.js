import { CLEAR, EVALUATED, DECIMAL_INPUT, NUMBER_INPUT, OPERATOR_INPUT } from "../types";

const initialState = {
    currentVal: "0",
    prevVal: "0",
    formula: "",
    evaluated: false
}

const isOperator = /[*/+-]/,
    endWithOperator = /([*/+-])$/,
    endWithNegative = /([*/+])-$/,
    endWithDigitAndNegative = /(\d+[-])$/

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case NUMBER_INPUT:
            if (state.evaluated) {
                return {
                    ...state,
                    currentVal: action.number,
                    formula: action.number === "0" ? "" : action.number,
                    evaluated: false
                }
            }
            else {
                return {
                    ...state,
                    currentVal: state.currentVal === "0" || isOperator.test(state.currentVal) ? action.number : state.currentVal + action.number,
                    formula: state.currentVal === "0" && action.number === "0" ? action.number : state.formula + action.number
                }
            }
        case OPERATOR_INPUT:
            if (state.evaluated) {
                return {
                    ...state,
                    currentVal: action.operator,
                    formula: state.prevVal + action.operator,
                    evaluated: false
                }
            } else if (/^((\s*)|([+-]))$/.test(state.formula)) {
                switch (action.operator) {
                    case "-":
                        return {
                            ...state,
                            currentVal: action.operator,
                            formula: /^((\s*)|[+])$/.test(state.formula) ? action.operator : ""
                        }
                    case "+":
                        return {
                            ...state,
                            currentVal: action.operator,
                            formula: /^((\s*)|[-])$/.test(state.formula) ? action.operator : ""
                        }
                }
            } else if (!endWithOperator.test(state.formula)) {
                return {
                    ...state,
                    currentVal: action.operator,
                    prevVal: state.formula,
                    formula: state.formula + action.operator
                }
            } else if (endWithDigitAndNegative.test(state.formula) && action.operator === "-") {
                return {
                    ...state,
                    currentVal: action.operator,
                    formula: state.formula.replace(/-$/, "+")
                }
            } else if (!endWithNegative.test(state.formula)) {
                return {
                    ...state,
                    currentVal: action.operator,
                    formula: (endWithNegative.test(state.formula + action.operator) ? state.formula : state.prevVal) + action.operator
                }
            } else {
                return {
                    ...state,
                    currentVal: action.operator,
                    formula: state.prevVal + action.operator
                }
            }
        case EVALUATED:
            let expression = state.formula
            while (endWithOperator.test(expression)) {
                expression = expression.slice(0, -1)
            }
            let answer = Math.round(10000 * eval(expression)) / 10000
            return {
                ...state,
                currentVal: answer,
                formula: state.formula + "=" + answer,
                prevVal: answer,
                evaluated: true
            }
        case CLEAR:
            return {
                currentVal: "0",
                prevVal: "0",
                formula: "",
                evaluated: false
            }
        case DECIMAL_INPUT:
            if (state.evaluated) {
                return {
                    ...state,
                    currentVal: "0.",
                    formula: "0.",
                    evaluated: false
                }
            } else if (!state.currentVal.includes(".")) {
                if (endWithOperator.test(state.formula) ||
                    (state.currentVal === "0" && state.formula === "")) {
                    return {
                        ...state,
                        currentVal: "0.",
                        formula: state.formula + "0."
                    }
                }
                else {
                    return {
                        ...state,
                        currentVal: state.formula.match(/(-?\d+\.?\d*)$/)[0] + ".",
                        formula: state.formula + "."
                    }
                }
            }
        default: return state
    }
}

export default calculatorReducer;