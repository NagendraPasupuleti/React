import React from "react";
class SmsApp extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            count:0
        }

    }
    UpdateInput=(e)=>{
        this.setState({

            count:(e.target.value.length)
        })
    }


    render() {
        return (
            <div className='container mt-3'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <h2>SMS Application</h2>
                            </div>
                            <div className="card-body">
                                <textarea
                                    onChange={this.UpdateInput}
                                    className='form-control' rows='5' maxLength='100'/>
                            </div>
                            <h3 className='text-center'>The Characters remaining is : <span className='text-primary'>{this.state.count} </span>/100</h3>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}
export default SmsApp;