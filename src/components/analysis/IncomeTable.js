import React from "react";
import {Table} from 'antd';

export class IncomeTable extends React.Component{
    constructor(props){
      super(props);
    }  

    columns = [];
    rows = [];

    onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    }

    render(){
      if(this.props.IncomeData){
        let IncomeData = this.props.IncomeData;

        Object.keys(IncomeData[0]).map((key, i) => (
            this.columns.push({
              title:key, 
              dataIndex:key, key:key, 
              defaultSortOrder: 'ascend',
            })
        ))
        
        this.rows = IncomeData.map(row => ({ ...row }));

        return(
          <div>
              <Table dataSource={this.rows} columns={this.columns} onChange={this.onChange}/>;
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
