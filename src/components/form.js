import React from 'react';
import {connect} from'react-redux';
import {saveData} from "../actions/saveDataAction";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { GoogleLogin } from 'react-google-login';

class SalaryForm extends React.Component {
    constructor(props){
        super(props);
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

        this.state = {
            currentDate: date,
            currentTime: time,
            isLoggedIn: false
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');
        console.log(this.state);
        this.props.dispatch(saveData(this.state));
        alert('Data added...')
    };
    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    responseGoogle = (response) => {
        this.setState({isLoggedIn: true});
        console.log(response);
    }

    render () {
        if(!this.state.isLoggedIn){
            return(
                <GoogleLogin
                clientId="73310373158-m6jc90t4b1dn3de6jeitktatqmtbpi8p.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            )
        }
        else{
            return (            
                <div className="form-root">
                    <div className="form-head">
                        <h1>Salary Form</h1>
                    </div>
    
                    <div className="form-body">
                        <form onSubmit={this.handleSubmit}>
    
                            <div className="form-body-payment-type">
                                <p>
                                Payment Type : 
    
                                <label>
                                    Income : <input type="radio" id="income" name="paymentType" value="Income" onChange={this.handleChange} /> 
                                </label>
    
                                <label>
                                    Expense : <input type="radio" id="expense" name="paymentType" value="Expense" onChange={this.handleChange} /> 
                                </label>
                                </p>
                            </div>
    
                            <div className="form-body-payment">
                                <label>
                                    Payment : <input type="number" id="payment" name="payment" onChange={this.handleChange} /> 
                                </label>
                            </div>
    
                            <div className="form-body-remark">
                                <label>
                                    Remark : <textarea rows="4" cols="50" id="remark" name="remark" placeholder="Remark, If any ..." onChange={this.handleChange} />
                                </label>
                            </div>
                        
                            <div className="form-body-submit">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    console.log('state');
    console.log(state);
    return {
        collection: state.firestore.ordered.PaymentEntry
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'PaymentEntry'}
    ])
)(SalaryForm);