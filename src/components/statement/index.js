import React from 'react'
import IncomeTable from "./IncomeTable";
import {connect} from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import {compose} from "redux";

class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {items} = this.props;
        
        return(
            <div>
                <h1>Statement</h1>
               
                <IncomeTable items={items}/>
            </div>
        )
    }
}; 

const mapStateToProps = (state) => {
    return {
        items: state.firestore.ordered.PaymentEntry
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'PaymentEntry'}
    ])
)(Index);