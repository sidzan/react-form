const React = require("react");
const Add = require("./add");
const connect = require("react-redux").connect;
const InputAge = require ("./form_age");
const actions = require ("./actions");

class Home extends React.Component {
    render(){
        var tableData = JSON.parse(localStorage.getItem("users")) || [];
        return <div>
            <table className="table is-bordered is-striped is-narrow is-fullwidth">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Nickname</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((d,i)=>{
                        return <TableRow vals={d} key={i} index={i} {...this.props}/>;
                    })}
                </tbody>
            </table>
            <Add/>
        </div>;
    }
}

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit:false,
        };
        this.submit=this.submit.bind(this);
        this.init=this.init.bind(this);
        this.delete=this.delete.bind(this);

    }   
    init(d){
        if (!d){
            d = this.props.vals;
        }
        this.setState({
            age:d.age,
            name:d.name,
            nickname:d.nickname,
        });
    } 
    componentDidMount(){
        this.init(this.props.vals);
    }
    componentWillReceiveProps(nextProps){
        this.init(nextProps.vals);
    }
    render(){
        let d=this.state;
        return <tr>
            <td>
                {this.state.edit?<input className={"input"} type="text" defaultValue={d.name} onChange={e=>this.setState({name:e.target.value})}/>:d.name}
            </td>
            <td>{this.state.edit?<InputAge age={d.age} age_change={(age)=>this.setState({age:age})}/>:d.age}</td>
            <td>{this.state.edit?<input className={"input"} type="text" defaultValue={d.nickname} onChange={e=>this.setState({nickname:e.target.value})}/>:d.nickname}</td>
            <td>
                    {(()=>{
                        if (this.state.edit)
                        {
                            return <div className="field is-grouped">
                            <p className="control">
                                <a className="button is-primary" onClick={this.submit.bind(this,this.props.index)}>
                                    Save
                                </a>
                            </p>                             
                            <p className="control">
                                <a className="button" onClick={()=>{this.setState({edit:false},()=>this.init());}}>
                                Cancel
                                </a>
                            </p>
                            </div>;
                        }
                        else {
                            return <div className="field is-grouped">
                                <p className="control">
                                    <a className="button is-primary" onClick={()=>{this.setState({edit:true});}}>
                                        Edit
                                    </a>
                                </p>
                            <p className="control">
                                <a className="button is-danger" onClick={this.delete.bind(this,this.props.index)}>
                                Delete
                                </a>
                            </p>
                        </div>;
                        }
                    })()}
            </td>
        </tr>; 
    }
    submit(index){
        this.props.dispatch(actions.update(index,this.state,()=>{
            this.setState({edit:false});
        }
        ));

    }
    delete(index){
        this.props.dispatch(actions.delete_line(index));        
    }
}

TableRow.propTypes = {
    vals: React.PropTypes.object.isRequired,
    dispatch:React.PropTypes.func.isRequired,
    index:React.PropTypes.number.isRequired,
};

var select =function(state){
    return {
        changing:state.todos.add_new,
    };
};
module.exports = connect(select)(Home);
