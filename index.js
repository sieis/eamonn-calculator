// main APP
let display=document.getElementById("display");
let output=document.getElementById("expression");

// thank you MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
function calculate(str) {
    return eval?.(`"use strict";(${str})`);
  }

  
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={display: 0, expression: ""}
        this.handleClear=this.handleClear.bind(this)
        this.handleOperator=this.handleOperator.bind(this)
        this.handleNumber=this.handleNumber.bind(this)
        this.handleDecimal=this.handleDecimal.bind(this)


    }
    // WORKS! :)
    handleClear(){
        this.setState({display: 0,expression: ""})
    }
    handleNumber=(e)=>{
        const number = e.target.innerText;

        if(this.state.display == 0 || this.state.expression == "="){
            this.setState({
                display: number,
                expression: number
            });
        }
        else{
            this.setState({
                display: this.state.display + number,
                expression: this.state.display + number
            })
        }
    }

    // super sloppy and overwritten, but the handleOperator finally works!!!
    handleOperator=(e)=>{
        const operator = e.target.innerText;
        // as long as not at the very start, add the operator to the display
        if(this.state.display != 0){
            this.setState({
                display: this.state.display + " " + operator + " ",
                expression: this.state.display + " " + operator + " "
            });
        }
        // if there's stuff in the display already, we gotta run some tests...
        if(this.state.display.length > 1){
            // this will be the operator plus the space right after it at the end
            const checkoperator = this.state.display.slice(-2)
            // it's possible to have two operators (when we allow the minus sign to remain in the display) This will test for an operator before it if a third operator is entered
            const checkoperator2 = this.state.display.slice(-4,-2)
            const newoperator = e.target.innerText+" "

            // if minus sign entered, it's ok to add it to display
            if(newoperator === "- " && (checkoperator === "+ " || checkoperator === "/ " || checkoperator === "* " ||checkoperator === "- ")){
                        this.setState({
                            display: this.state.display + newoperator,
                            expression: this.state.display + newoperator
                        },()=>{
                        })
                }
            // if other operator is entered
            else if(checkoperator === "+ " || checkoperator === "/ " || checkoperator === "* " ||checkoperator === "- "){
                    // check to see if there's an operator behind it (only time this will happen is if there was an operator and then the minus sign and now we're entering a third operator) in that case, remove the last two operators and replace it with the current one.
                    if(checkoperator2 === "+ " || checkoperator2 === "/ " || checkoperator2 === "* " ||checkoperator2 === "- "){
                        this.setState({
                            display: this.state.display.slice(0,-4) + newoperator,
                            expression: this.state.display.slice(0,-4) + newoperator
                        })
                    }
                    // set the displays so they remove the last operator and replace with the current one.
                    else{
                        this.setState({
                            display: this.state.display.slice(0,-2) + newoperator,
                            expression: this.state.display.slice(0,-2) + newoperator
                        },()=>{
                        })
                    }
            }
        }

        
    }
    handleEquals=()=>{
        const result = calculate(this.state.display)
        this.setState({
            display: result,
            expression: "="
        });
    }

    handleDecimal=(e)=>{
        const decimal = e.target.innerText;
        const array = this.state.display.split(' ')
        const lastValue = array.at(-1)
        
        if(!lastValue.includes(".") && typeof(Number(lastValue)) === "number"){
            this.setState({
                display: this.state.display + decimal,
                expression: this.state.display + decimal
            })
        }
    }
    

    render(){
        return(
            <>
                <div id="calculator">
                    <div className="display display-top" id="expression">{this.state.expression}</div>
                    <div className="display display-bottom" id="display">{this.state.display}</div>
                    <div id="operators">
                        <button className="btn" onClick={this.handleClear} id="clear" value="AC">AC</button>
                        <button className="btn" onClick={this.handleOperator} id="divide" value="/">/</button>
                        <button className="btn" onClick={this.handleOperator} id="multiply" value="x">*</button>
                        <button className="btn" onClick={this.handleNumber} type="num" id="nine" value="9">9</button>
                        <button className="btn" onClick={this.handleNumber} type="num" id="eight" value="8">8</button>
                        <button className="btn" onClick={this.handleNumber} type="num" id="seven" value="7">7</button>
                        <button className="btn" onClick={this.handleOperator} id="subtract" value="-">-</button>
                        <button className="btn" onClick={this.handleNumber} type="num" id="six" value="6">6</button>
                        <button className="btn" onClick={this.handleNumber} type="num" id="five" value="5">5</button>
                        <button className="btn" onClick={this.handleNumber} type="num" id="four" value="4">4</button>
                        <button className="btn" onClick={this.handleOperator} id="add" value="+">+</button>
                        <button className="btn" onClick={this.handleNumber} type="num" id="three" value="3">3</button>
                        <button className="btn" onClick={this.handleNumber} type="num" id="two" value="2">2</button>
                        <button className="btn" onClick={this.handleNumber} type="num" id="one" value="1">1</button>
                        <button className="btn" onClick={this.handleEquals} id="equals" value="=">=</button>
                        <button className="btn" onClick={this.handleNumber} type = "zero" id="zero" value="0">0</button>
                        <button className="btn" onClick={this.handleDecimal} id="decimal" value=".">.</button>
                    </div>
                </div>
            </>
        )
    }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)