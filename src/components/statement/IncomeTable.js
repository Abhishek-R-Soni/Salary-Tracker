import React from "react";
import MaterialTable from "material-table";

class IncomeTable extends React.Component{
    render(){
        console.log('Income Table Data');
        console.log(this.props.items);

        let columns = [];

        if(this.props.items){
            Object.keys(this.props.items[0]).map((key, i) => (
                columns.push({title:key, field:key})
            ))
            
            var data = this.props.items.map(o => ({ ...o }));
        }

        console.log('Row');
        console.log(data);

        console.log('Col');
        console.log(columns);

        if(this.props.items){
            return (
                <div>
                    <MaterialTable 
                        title="Income Table"
                        data = {data}
                        columns = {columns}
                        options = {{
                            exportButton: true,
                        }}
                    />
                </div>
            )  
        }
        return(
            <div>
                Nothing...
            </div>
        )
    }
}

export default IncomeTable;