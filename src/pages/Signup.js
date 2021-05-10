import  React from 'react'

class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            name: '',
            pwd: ''
        }
    }
    createUser = () =>{
        const newUserObj = {
            email: this.state.email,
            name: this.state.name,
            pwd: this.state.pwd,
        }
        this.props.addUser(newUserObj)
    }
    render(){
        return (
        <div className="p-login">
            <h1> Sign up to My Recipe Book</h1>
            <div>
            <input type="email" placeholder="email" onChange={(e)=>this.setState({email:e.target.value})}/>
            </div>
            <div>
            <input type="text" placeholder="name" onChange={(e)=>this.setState({name:e.target.value})}/>
            </div>
            <div>
            <input type="password" placeholder="password" onChange={(e)=>this.setState({pwd:e.target.value})}/>
            </div>
            <button onClick={this.createUser}>Sign up!</button> 
        </div>
        )}
}

export default Signup;