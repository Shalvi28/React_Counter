import React from 'react';

class Card extends React.Component{
    constructor() {
        super();
        this.state = {
            count:0
        }
    }
        Increment(){
            this.setState({
                count: this.state.count+1
            })
        }

        Decrement() {
            this.setState({
                count:this.state.count-1
            })
        }
    
    render() {
        return (
            <>
            <h2>Count: {this.state.count}</h2>
            <button onClick={()=> {this.Increment()}}>Increment</button>
            <button onClick={()=>{this.Decrement()}}>Decrement</button>
            </>
        )
    }
}


export default Card;