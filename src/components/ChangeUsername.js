import React from "react";
class ChangeUsername extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username:{
                name:''
            }
        }

    }
    ChangeName=(e)=>{
        this.setState({
            username:{
                name:e.target.value,

            }
        })

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card bg-dark text-white text-center ">
                                <h3 className='font-weight-bold'><u>Change Username</u></h3>
                                <div className="card-body rgba-blue-grey-light">
                                    <form className='form-inline'>
                                        <div className='form-group'>


                                            <input
                                                value={this.state.username.name}
                                                onChange={this.ChangeName}
                                                type="text"
                                                className='form-control mr-5'/>


                                            <input
                                                value={this.state.username.name}
                                                type="text" className='form-control ml-5'/>

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
export default ChangeUsername