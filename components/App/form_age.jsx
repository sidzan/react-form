const React = require('react');
const Add = require("./add");
var Select = require('react-select');

let age =Array(100).fill().map((v,i)=>i);
let options = age.map((d,i)=>{
    let val ={
        value:d,
        label:d,
    }
    return val
    }
);

class InputAge extends React.Component {
    render(){
        return <Select
                name="form-field-name"
                value={this.props.age}
                options={options}
                onChange={e=>
                    {
                        this.props.age_change(e.value)
                    }
                }
                style={{width:150}}
                />
 
    }
}
module.exports=(InputAge);
