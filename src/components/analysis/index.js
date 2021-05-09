import React from 'react'
import {IncomeTable} from "./IncomeTable";
import {ExpenseTable} from "./ExpenseTable";
import {compose} from "redux";
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.module.css';

class index extends React.Component {
    constructor(props){
        super(props);
        console.log('analysis');
        console.log(this.props.items);
    }
    render(){
        if(this.props.items){
            let rows = this.props.items;
            let incomeData  = rows.filter(row => row.paymentType === "Income");
            let expenseData = rows.filter(row => row.paymentType === "Expense");
    
            return(
                <div>
                    <h1>Analysis</h1>
        
                    <div className="row">
                        <div className="column">
                            <h3>Income Table</h3>
                            <IncomeTable IncomeData={incomeData}/> 
                        </div>
                        <div className="column">
                            <h3>Expense Table</h3>  
                            <ExpenseTable ExpenseData={expenseData}/> 
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="column">
                            <h3>Income Table</h3>
                            <IncomeTable items={this.props.items}/> 
                        </div>
                        <div className="column">
                            <h3>Expense Table</h3>  
                            <IncomeTable items={this.props.items}/> 
                        </div>
                    </div>
                </div>
            )    
        }
        else{
            return(
                <div>
                    <h3>Loading...</h3>
                </div>
            )
        }
    }
};

const mapStateToProps = (state) => {
    return{
        items: state.firestore.ordered.PaymentEntry
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'PaymentEntry'}
    ])
)(index);