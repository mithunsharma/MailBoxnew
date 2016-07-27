var React=require('react');
var Mail=require('./Mail');
var MailListDb=require('./MailListDb');
var MailBox = React.createClass({
  getInitialState:function()
  {
    return {mailData:[]};
  },getallmails: function(){
   console.log("ajax");
 $.ajax({
   url:"http://localhost:8080/mails",
   type:"GET",
   datatype:"json",
   success:function(data)
   {
   console.log("got "+data);
   this.setState({mailData:data});

   }.bind(this),
   error:function(err){
     console.error(err.toString());
   }.bind(this)

 });

},componentWillMount: function(){
  this.getallmails();
}
,

render: function() {


      return(
        <div className="MailBox">


         <MailListDb mailData={this.state.mailData} />

        </div>
  );
}
});
module.exports=MailBox;
