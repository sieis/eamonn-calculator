// main APP
let display=document.getElementById("display");
let output=document.getElementById("output");

// thank you MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
function calculate(str) {
    return eval?.(`"use strict";(${str})`);
  }

  
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={display: 0}
        this.handleClear=this.handleClear.bind(this)
        this.handleOperator=this.handleOperator.bind(this)
        this.handleNumber=this.handleNumber.bind(this)
        this.handleDecimal=this.handleDecimal.bind(this)


    }
    // WORKS! :)
    handleClear(){
        this.setState({display: 0})
    }
    // Need to update to make sure it holds many operations at once before hitting equals (Test 9)
    handleNumber=(e)=>{
        const number = e.target.innerText;
        if(this.state.display == 0){
            this.setState({
                display: number
            },()=>{
                console.log(this.state.display)
            });
        }
        else{
            this.setState({
                display: this.state.display + number
            },()=>{
                console.log(this.state.display)
            })
        }
    }
    // Maaaay have to change this condition?
    handleOperator=(e)=>{
        const operator = e.target.innerText;
        if(this.state.display != 0){
            this.setState({
                display: this.state.display + " " + operator + " "
            },()=>{
            });
        }
    }
    // EQUALS WORKING! :)
    handleEquals=()=>{
        const result = calculate(this.state.display)
        this.setState({
            display: result
        },()=>{
            console.log(this.state.display)
        });
    }

    handleDecimal=(e)=>{
        const decimal = e.target.innerText;
        console.log(this.state.display)
        if(this.state.display.indexOf('.') !== 1){
            this.setState({
                display: this.state.display + decimal
            })
        }
    }
    

    render(){
        return(
            <>
                <div id="calculator">
                    <div className="display" id="display">{this.state.display}</div>
                    <div id="operators">
                        <button onClick={this.handleClear} id="clear" value="AC">AC</button>
                        <button onClick={this.handleOperator} id="divide" value="/">/</button>
                        <button onClick={this.handleOperator} id="multiply" value="x">*</button>
                        <button onClick={this.handleNumber} type="num" id="nine" value="9">9</button>
                        <button onClick={this.handleNumber} type="num" id="eight" value="8">8</button>
                        <button onClick={this.handleNumber} type="num" id="seven" value="7">7</button>
                        <button onClick={this.handleOperator} id="subtract" value="-">-</button>
                        <button onClick={this.handleNumber} type="num" id="six" value="6">6</button>
                        <button onClick={this.handleNumber} type="num" id="five" value="5">5</button>
                        <button onClick={this.handleNumber} type="num" id="four" value="4">4</button>
                        <button onClick={this.handleOperator} id="add" value="+">+</button>
                        <button onClick={this.handleNumber} type="num" id="three" value="3">3</button>
                        <button onClick={this.handleNumber} type="num" id="two" value="2">2</button>
                        <button onClick={this.handleNumber} type="num" id="one" value="1">1</button>
                        <button onClick={this.handleEquals} id="equals" value="=">=</button>
                        <button onClick={this.handleNumber} type = "zero" id="zero" value="0">0</button>
                        <button onClick={this.handleDecimal} id="decimal" value=".">.</button>
                    </div>
                </div>
            </>
        )
    }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)