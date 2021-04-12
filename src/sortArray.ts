interface bar {
    x: number
    y: number
}

export const sortArray = (array: bar[], i: number, j: number): bar[] => {
    const temp = array[i].y;
    array[i].y = array[j].y;
    array[j].y = temp;
    return array;
}