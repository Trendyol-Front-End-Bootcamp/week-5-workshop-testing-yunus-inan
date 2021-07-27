import { ProductProvider } from "../src/service";





export const divide = (dividend, divisor) => {
    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Invalid argument!")
    }
    if (divisor === 0) {
        throw new Error("Divide by zero!")
    }
    return dividend / divisor;
}

export const toPascalCase = (sentence) => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}




export const mostFrequent = (arr) =>
    Object.entries(
        arr.reduce((a, v) => {
            a[v] = a[v] ? a[v] + 1 : 1;
            return a;
        }, {})
    ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];

export const mostPostUser = async () => {
    const data = await ProductProvider();
    const result = data.map(item => {
        return item.userId;
    });
    const mostRepeat = mostFrequent(result);
    var titles = data.filter(items => items.userId === Number(mostRepeat));
    var titlesResult = titles.map(index => {
        return index.title;
    })
    return titlesResult;
}