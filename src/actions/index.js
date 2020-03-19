export const NEW_QUOTE = 'NEW_QUOTE';

export const genarateQuote = (quote) => ({
    type: NEW_QUOTE,
    payload: { quote }
})