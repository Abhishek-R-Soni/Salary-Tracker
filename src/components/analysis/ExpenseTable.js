import React from "react";
import {Table} from 'antd';

export class ExpenseTable extends React.Component{
    constructor(props){
      super(props);
    }  

    columns = [];
    rows = [];

    render(){
      if(this.props.ExpenseData){
        let ExpenseData = this.props.ExpenseData;

        Object.keys(ExpenseData[0]).map((key, i) => (
            this.columns.push({title:key, dataIndex:key, key:key})
        ))
        
        this.rows = ExpenseData.map(row => ({ ...row }));

        return(
          <div>
              <Table dataSource={this.rows} columns={this.columns} />;
          </div>
        )
      }
      else{
        return(
          <h3>Loading...</h3>
        )
      }
    }
}
