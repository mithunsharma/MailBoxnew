var React=require('react');
var {render}=require('react-dom');
var {browserHistory, Route, Router, IndexRoute}=require('react-router');
var NavBarComponent=require('./components/NavBarComponent');
var MailBox=require('./components/MailBox');
var SentBox=require('./components/SentBox');
var Home=require('./components/Home');
var MailBoxJson=require('./components/MailBoxJson');
var MainComponent=React.createClass({

render:function(){
  return(
    <div className="MainComponent">
      <NavBarComponent />
      <br/><br/><br/>
      {this.props.children}
    </div>
);
}
});

  render(
    <Router history={browserHistory}>
    <Route path="/" component={MainComponent}>
    <IndexRoute component={Home} />
    <Route path="minbox" component={MailBoxJson} />
   <Route path="inbox" component={MailBox} />
    <Route path="sentbox" component={SentBox} />

    </Route>
    </Router>
    ,document.getElementById('app'));
