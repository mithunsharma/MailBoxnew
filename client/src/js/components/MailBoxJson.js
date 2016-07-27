var React=require('react');
var Mail=require('./Mail');
var Mailjson=require('./Mail.json');
var MailList=require('./MailList');
var MailBoxJson = React.createClass({
  getInitialState:function()
  {
    return {mailData:[]};
  },getallmails: function(){
  this.setState({mailData:Mailjson.allmail});



},componentWillMount: function(){
  this.getallmails();
}
,

render: function() {


      return(
        <div className="MailBox">


         <MailList mailData={this.state.mailData} />

        </div>
  );
}
});
module.exports=MailBoxJson;
