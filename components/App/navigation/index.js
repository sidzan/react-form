const React = require ("react");
// import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

class Nav extends React.Component {

    render(){     
        // const { match, location, history } = this.props;            
        return (
            <nav className="nav has-shadow">
                <div className="container">
                    <div className="nav-left"> 
                    <a className="nav-item">
                       Zanroo
                    </a>
                    </div>
                    <span className="nav-toggle">

                    </span>
                    <div className="nav-right nav-menu">
                    <a className="nav-item is-tab">
                        <figure className="image is-16x16" style={{marginRight: 8}}>
                        <img src="http://bulma.io/images/jgthms.png"/>
                        </figure>
                        Hello!
                    </a>
                    </div>
                </div>
            </nav>   
        );
    }
  
}

Nav.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
module.exports =withRouter(Nav);