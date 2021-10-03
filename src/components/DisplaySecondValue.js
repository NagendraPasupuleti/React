import React from "react";
class DisplaySecondValue extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            selectedOption:''
        }

    }
    UpdateInput=(e)=>{
       this.setState({
           selectedOption:(e.target.value)
       })

    }


    render() {
        return (
            <div className='container mt-3'>
               {/* <pre>{JSON.stringify(this.state)}</pre>*/}

                <div className="row">

                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-white">
                                <h4 className='text-success'>Display TwoWay Data Binding</h4>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <select

                                        onChange={this.UpdateInput}

                                        className='form-control'>
                                        <option value='HTML'>HTML</option>
                                        <option value='CSS'>CSS</option>
                                        <option value='Bootstrap'>Bootstrap</option>
                                        <option value='Javascript'>Javascript</option>
                                        <option value='ReactJS'>ReactJS</option>
                                    </select>
                                    <div className='mt-4'>

                                        <h5 className=''>You have Selected : <span className='text-success'>{this.state.selectedOption}</span> Option</h5>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}
export default DisplaySecondValue;