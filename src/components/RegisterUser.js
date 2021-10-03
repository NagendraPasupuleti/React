import React from "react";
class RegisterUser extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            register:{
                username:'',
                password:'',
                email:'',
                dob:'',
                designation:'',


            }
        }

    }
    ChangeInputField=(e)=>{
        this.setState({
           register:{
               ...this.state.register,
               [e.target.name]:e.target.value
           }

        })
    }
    Submitform=(e)=>{
        e.preventDefault();

        console.log('Registered successfully....');
        console.log(this.state.register)

    }

    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state.register)}</pre>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header text-white bg-success">
                                    <h3>Register Here</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.Submitform}>
                                        <div className='form-group'>
                                            <input name='username'
                                                   value={this.state.username}
                                                   onChange={this.ChangeInputField}
                                                type='text'className='form-control' placeholder=' Enter your Username'/>

                                        </div>
                                        <div className='form-group'>
                                            <input
                                                name='password'
                                                value={this.state.password}
                                                onChange={this.ChangeInputField}
                                                type='password'className='form-control' placeholder=' Enter your Password'/>

                                        </div>

                                        <div className='form-group'>
                                            <input
                                                name='email'
                                                value={this.state.email}
                                                onChange={this.ChangeInputField}
                                                type='email'className='form-control' placeholder=' Enter your Email'/>

                                        </div>

                                        <div className='form-group'>
                                            <input name='dob'
                                                   value={this.state.dob}
                                                   onChange={this.ChangeInputField}
                                                type='date'className='form-control' placeholder=' Date of birth'/>

                                        </div>
                                        <div className='form-group'>
                                            <select
                                                name='designation'
                                                value={this.state.designation}
                                                onChange={this.ChangeInputField}
                                                className='form-control'>
                                                <option value="" className='bg-success text-white'>Select Your Designation</option>
                                                <option value="Jr.Software Developer ">Jr.Software Developer </option>
                                                <option value="Software Developer">Software Developer </option>
                                                <option value="Sr.Software Engineer"> Sr.Software Engineer</option>
                                                </select>
                                        </div>
                                        <div>
                                            <input type='submit' value='Register' className='btn btn-info ml-5' />
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
export default RegisterUser;