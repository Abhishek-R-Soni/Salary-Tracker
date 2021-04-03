import React from 'react';
import ReactDom from 'react-dom';

class SalaryForm extends React.Component {

    state = {};

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');
        console.log(this.state);
    };
    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    render () {
        return (
            <div className="form-root">
                <div className="form-head">
                    <h1>Salary Form</h1>
                </div>

                <div className="form-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-body-date">
                            <label>
                                Select Date : <input type="date" id="date" name="date" onChange={this.handleChange} /> 
                            </label>
                        </div>

                        <div className="form-body-payment-type">
                            <p>
                            Payment Type : 

                            <label>
                                Income : <input type="radio" id="income" name="payment-type" value="Income" onChange={this.handleChange} /> 
                            </label>

                            <label>
                                Expense : <input type="radio" id="expense" name="payment-type" value="Expense" onChange={this.handleChange} /> 
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
    )}
}

export default SalaryForm;