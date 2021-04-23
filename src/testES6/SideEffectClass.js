import React from 'react'

class SideEffectClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        document.title = `You click ${this.state.count} times`
    }
    componentDidUpdate(){
        document.title = `You click ${this.state.count} times`
    }
    render(){
    return (
        <div>
            <button onClick = {() =>{this.setState({count: this.state.count+1})}}>click here</button>
        </div>
    )
}}

export default SideEffectClass
