import React from "react";
class LoginForm extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',

        }

    }
    /*ChangeUsername=(e)=>{
        this.setState({
            username:e.target.value,
        })
    }
    ChangePassword=(e)=>{
        this.setState({
            password:e.target.value,
        })
    }
*/
    ChangeInput=(e)=>{
        this.setState({
            [e.target.name] : e.target.value,
        })

    }
    Submitform=(e)=>{
        e.preventDefault();
        console.log('Your form is submitted')
        console.log(this.state)

    }







    render() {
        return (
            <div>

                <pre>{JSON.stringify(this.state)}</pre>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header text-white" id='card-header'>
                                    <h3>Form Handling</h3>

                                </div>
                                <div className="card-body text-white">
                                    <form action="" className='form-inline' onSubmit={this.Submitform}>
                                        <div className='form-group'>
                                            <input
                                                name='username'
                                                value={this.state.username}
                                                onChange={this.ChangeInput}
                                                type="text"
                                                   className='mr-2' placeholder='username'/>
                                            <input
                                                name='password'
                                                value={this.state.password}
                                                onChange={this.ChangeInput}

                                                type="password" placeholder='password' className='mr-3'/>
                                            <input type="submit" value='Login' className='btn-sm btn-info'/>

                                        </div>


                                    </form>


                                </div>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        );
    }
}
export default LoginForm;