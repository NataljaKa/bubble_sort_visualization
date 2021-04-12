interface bar {
    x: number
    y: number
}

export const sortArray = (array: bar[], i: number, j: number): bar[] => {
    if (array[i].y < array[j].y) {
        console.log("tut");
        const temp = array[i].y;
        array[i].y = array[j].y;
        array[j].y = temp;
    }
    return array;
}