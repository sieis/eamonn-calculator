// main APP
let display=document.getElementById("display");
let output=document.getElementById("output");
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={firstNum: 0, operator: "", lastNum: "", result: "", display: 0}
        this.handleClear=this.handleClear.bind(this)
        this.handleOperator=this.handleOperator.bind(this)
        this.handleNumber=this.handleNumber.bind(this)

    }
    // WORKS! :)
    handleClear(){
        this.setState({firstNum: 0, lastNum: "", result: "", operator: "", display: 0})
    }
    // Need to update to make sure it holds many operations at once before hitting equals (Test 9)
    handleNumber=(e)=>{
        if(this.state.firstNum == 0){
            this.setState({
                firstNum: e.target.innerText,
                display: e.target.innerText,
            },()=>{
                console.log(this.state.firstNum)
                // do i have to put anything here?
            });
        }
        // =============================== why isn't this working? ===============================
        // else if(this.state.firstNum == 0.0){
        //     this.setState({
        //         firstNum: this.state.firstNum + e.target.innerText,
        //         display: this.state.firstNum + e.target.innerText,
        //     },()=>{
        //         console.log(this.state.firstNum)

        //     });
        // }
        else if(this.state.operator == ""){
            this.setState({
                firstNum: this.state.firstNum + e.target.innerText,
                display: this.state.display + e.target.innerText
            },()=>{
                // do i have to put anything here?
            });
        }
        else{
            this.setState({
                lastNum: this.state.lastNum + e.target.innerText,
                display: this.state.display + e.target.innerText
            },()=>{
                // do i have to put anything here?
            });
        }
    }
    // Maaaay have to change this condition?
    handleOperator=(e)=>{
        if(this.state.firstNum != 0){
            this.setState({
                operator: e.target.innerText,
                display: e.target.innerText
            },()=>{
            });
        }
    }
    // EQUALS WORKING! :)
    handleEquals=()=>{
        if(this.state.operator == "-"){
            this.setState({
                result: Number(this.state.firstNum - this.state.lastNum),
                display: Number(this.state.firstNum - this.state.lastNum),
                firstNum: Number(this.state.firstNum - this.state.lastNum),
                lastNum: "",
                operator: ""
            },()=>{
            });
        }
        else if(this.state.operator == "+"){
            this.setState({
                result: Number(this.state.firstNum) + Number(this.state.lastNum),
                display: Number(this.state.firstNum) + Number(this.state.lastNum),
                firstNum: Number(this.state.firstNum) + Number(this.state.lastNum),
                lastNum: "",
                operator: ""
            },()=>{
            });
        }
        else if(this.state.operator == "*"){
            this.setState({
                result: Number(this.state.firstNum * this.state.lastNum),
                display: Number(this.state.firstNum * this.state.lastNum),
                firstNum: Number(this.state.firstNum * this.state.lastNum),
                lastNum: "",
                operator: ""
            },()=>{
                
            });
        }
        else if(this.state.operator == "/"){
            this.setState({
                result: Number(this.state.firstNum / this.state.lastNum),
                display: Number(this.state.firstNum / this.state.lastNum),
                firstNum: Number(this.state.firstNum / this.state.lastNum),
                lastNum: "",
                operator: ""
            },()=>{
                
            });
        }
    }

    handleDecimal=(e)=>{
        if(this.state.lastNum != "" && this.state.lastNum.indexOf('.') !== 1){
            this.setState({
                lastNum: this.state.lastNum + e.target.innerText,
                display: this.state.lastNum + e.target.innerText
            })
        }
        else if(this.state.firstNum != 0 && this.state.operator != "" && this.state.lastNum ==""){
            this.setState({
                lastNum: 0+e.target.innerText,
                display: 0+e.target.innerText
            })
        }
        else if(this.state.firstNum == 0){
            this.setState({
                firstNum: this.state.firstNum + e.target.innerText,
                display: this.state.firstNum + e.target.innerText,
            },()=>{
                console.log(this.state.firstNum)
            })
        }
        else if(this.state.firstNum != 0 && this.state.firstNum.indexOf('.') !==1){
            this.setState({
                firstNum: this.state.firstNum + e.target.innerText,
                display: this.state.firstNum + e.target.innerText
            })
        }
    }
    

    render(){
        return(
            <>
                <div id="calculator">
                    <div className="display" id="display">{this.state.display}</div>
                    {/* <div className="display" id="output">{this.state.result}</div> */}
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