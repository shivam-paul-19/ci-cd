const changeToNum = (a) => Number(a);

export const sum = (a, b) => {
    a = changeToNum(a);
    b = changeToNum(b);
    return a + b;
};

export const subtract = (a, b) => {
    a = changeToNum(a);
    b = changeToNum(b);
    return a - b;
};

export const multiply = (a, b) => {
    a = changeToNum(a);
    b = changeToNum(b);
    return a * b;
};

export const divide = (a, b) => {
    if(b == 0) return "not defined";
    a = changeToNum(a);
    b = changeToNum(b);
    return a / b;
};