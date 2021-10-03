import React from 'react';
class ShowPassword extends React.Component{
    constructor(props){
        super(props);
        this.state={
            inputType:'password'
        }
    }
    EnableDisablePassword=(e)=>{
        /*if(this.state.inputType==='password'){
            this.setState({
                inputType:'text'
            })
        }
        else{
            this.setState({
                inputType:'password'
            })
        }*/
        //simplify this
        (this.state.inputType==='password') ? this.setState({
            inputType:'text'
        }): this.setState({
            inputType:'password'
        })

    }


render(){
    return(
        <div>
        <div className='container mt-3'>
            <div className='row'>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-secondary">
                            <h3 className='text-white '>Display Password</h3>
                        </div>
                        <div className="card-body">
                            <div className='form-group'>

                                <div className='input-group'>
                                    <input type={this.state.inputType} className='form-control'/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                            <input
                                                onChange={this.EnableDisablePassword}
                                                type='checkbox' className='mr-2'/>Show Password
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        </div>
    )
}

}
export default ShowPassword;