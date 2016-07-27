var React=require('react');
var Mail=require('./Mail');
var MailList = React.createClass({
  render: function() {
  var MailData =  this.props.mailData.map(function(mail) {
      return(
        <Mail mail1={mail} key={mail.msg_id}></Mail>
      );
    }.bind(this));
    return (
      <div>
        {MailData}
      </div>
    );
  }
});
module.exports=MailList;
