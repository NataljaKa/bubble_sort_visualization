interface bar {
    x: number
    y: number
}

export const createNewArray = (length: number): bar[] => {
    let newArray: bar[] = [{x: 0, y: 8}];
    for (let i = 0; i < length; i++) {
        newArray[i] = {x: i, y: Math.random()}
    }
    return newArray;
}

