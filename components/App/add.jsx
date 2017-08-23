const React =require('react');
const connect = require("react-redux").connect;
const actions = require ("./actions");
const InputAge = require ("./form_age");

let age =Array(100).fill().map((v,i)=>i);
let options = age.map((d,i)=>{
    let val ={
        value:d,
        label:d,
    }
    return val
    }
);

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            add:false,
        };
        this.submit=this.submit.bind(this);
    }
    componentDidMount(){
    }
    render(){
        return <div>
            {(()=>{
                if (this.state.add){
                    return <form className="box" onSubmit={this.submit}>

                        <div className="hero is-danger">
                            {this.state.err}
                        </div>
                                  

                    <div className="field is-horizontal">
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Name" onChange={e=>this.setState({name:e.target.value,err:null})}/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Age</label>
                            <div className="control">
                            <div className="select">
                            <InputAge age={this.state.age} age_change={(age)=>{
                                this.setState({age:age,err:null})}}/>
                                </div>
                            </div>
                        </div>                                       
                        <div className="field">
                            <label className="label">Nickname</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Nickname" onChange={e=>this.setState({nickname:e.target.value,err:null})}/>
                            </div>
                        </div>   
                               
                    </div>
                    <div className="field is-grouped">
                        <p className="control">
                            <button type="submit" className="button is-primary" onSubmit={this.submit}>
                            Save
                            </button>
                        </p>
                        <p className="control">
                            <a className="button" onClick={()=>{
                                this.state=null;
                                this.setState({add:false,})}}>
                            Cancel
                            </a>
                        </p>
                    </div>
                </form>;
                }
            else {
                return <a className="button is-primary" onClick={()=>{this.setState({add:true})}}><i className="fa fa-plus" aria-hidden="true"></i>&nbsp; Add</a>
            }
            })()}
    </div>
    }
    submit(e){
        e.preventDefault();
        try{
            if (!this.state.name){
                throw "Missing Name"
            }
            else if (!this.state.age){
                throw "Missing age"
            }
            else if (!this.state.nickname){
                throw "Missing nickname"
            }
        }
        catch(err) {
            this.setState({err:err});
            return
        }
        this.props.dispatch(actions.add_new(this.state));
        this.state = null;
        this.setState({add:false})
    }
};

module.exports = connect()(Add);
