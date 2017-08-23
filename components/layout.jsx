const React =require('react');
import Nav from './App/navigation';

class Layout extends React.Component {
    render(){
        return <div>
            <Nav/>
            <div className="container" style={{marginTop:80}}>
                {this.props.children}
            </div>
            <div style={{marginTop:80}}>
            </div>
    </div>
    }
};

module.exports = Layout;
