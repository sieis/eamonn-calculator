// button 

class KeyButon extends React.Component{
    constructor(props){
        super(props);

        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        let display=document.getElementById("display");
        let output=document.getElementById("output");
        if(this.props.value == "AC"){
            display.innerText=""
            output.innerText=""
        }
        else{
            let newText=this.props.value
            display.innerHTML += newText
        }
    }
    render(){
        return(
            <button onClick={this.handleClick} id={this.props.id}>{this.props.value}</button>
        )
    }
}

// main APP
class App extends React.Component{
    constructor(props){
        super(props);

        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
    }

    render(){
        return(
            <>
            <div id="calculator">
                <div class="display" id="display">0</div>
                <div class="display" id="output">FUTURE OUTPUT</div>
                <div id="operators">
                    <KeyButon id="clear" value="AC"/>
                    <KeyButon id="divide" value="/"/>
                    <KeyButon id="multiply" value="x"/>
                    <KeyButon id="nine" value="9"/>
                    <KeyButon id="eight" value="8"/>
                    <KeyButon id="seven" value="7"/>
                    <KeyButon id="subtract" value="-"/>
                    <KeyButon id="six" value="6"/>
                    <KeyButon id="five" value="5"/>
                    <KeyButon id="four" value="4"/>
                    <KeyButon id="add" value="+"/>
                    <KeyButon id="three" value="3"/>
                    <KeyButon id="two" value="2"/>
                    <KeyButon id="one" value="1"/>
                    <KeyButon id="equals" value="="/>
                    <KeyButon id="zero" value="0"/>
                    <KeyButon id="decimal" value="."/>
                </div>
            </div>
            </>
        )
    }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)