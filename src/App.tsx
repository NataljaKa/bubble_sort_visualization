import React, {Component} from 'react';
import './App.css';
// @ts-ignore
import {XYPlot, VerticalBarSeries} from 'react-vis';
import {createNewArray} from "./createNewArray";
import {sortArray} from "./sortArray";

interface bar {
    x: number
    y: number
}

interface State {
    data: bar[]
}

const BAR_AMOUNT: number = 20;

class App extends React.Component<any, State> {
    constructor(props: number) {
        super(props);
        this.state = {
            data: createNewArray(BAR_AMOUNT)
        };
    }

    runCreateNewArray() {
        this.setState({data: createNewArray(BAR_AMOUNT)});
    }

    runSorting() {
        let currentArray = this.state.data;
        let i = 1;
        let j = 0;
        setInterval(() => {
            if (i < BAR_AMOUNT) {
                if (j >= 0) {
                    if (currentArray[j].y > currentArray[j+1].y) {
                        const sortedArray = sortArray(currentArray, j + 1, j);
                        this.setState({data: sortedArray});
                        currentArray = this.state.data;
                        j--;
                    }
                    else {
                        j = i;
                        i++;
                    }
                } else {
                    j = i;
                    i++;
                }


            }
        }, 100);


    }


    render() {
        return (
            <div className="App">
                <XYPlot
                    width={600}
                    height={300}>
                    <VerticalBarSeries
                        data={this.state.data}/>
                </XYPlot>
                <button onClick={() => this.runCreateNewArray()}> new array</button>
                <button onClick={() => this.runSorting()}> start sorting</button>
            </div>
        );
    }
}

export default App;
