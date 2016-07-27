var React=require('react');
var MailDb=require('./MailDb');
var MailListDb = React.createClass({
  render: function() {
  var MailData =  this.props.mailData.map(function(mail) {
    console.log("map"+JSON.stringify(mail));
      return(

        <MailDb mail1={mail} key={mail._id}></MailDb>
      );
    }.bind(this));
    return (
      <div>
        {MailData}
      </div>
    );
  }
});
module.exports=MailListDb;
