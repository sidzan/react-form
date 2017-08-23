
const React             = require("react");

const Router            = require('react-router-dom').BrowserRouter;
const Route             = require('react-router-dom').Route;
const Switch            = require('react-router-dom').Switch;



//Custom Components//
const Home              = require('../App/home');
// const Example           = require('../example/home');
const Layout            = require("../layout");



const Routes = React.createClass({
    render:function(){
        return <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
             </Layout>
        </Router>
    }
})


module.exports = Routes
