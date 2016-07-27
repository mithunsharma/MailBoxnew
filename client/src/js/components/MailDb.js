var React=require('react');
var MailDb = React.createClass({
  getInitialState:function()
  {
    console.log("mdb"+this.props.mail1);

    return {};
  },
  render: function() {
    return (
      <div className="Mail" >
      <div className="row">

    <div className="col-md-12 mailb" >
    <form >

    <h5 >ID:{this.props.mail1.msg_id}</h5>
    <h4>Snippet:</h4><p>{this.props.mail1.Msg_snippet}</p>

    </form>
    </div>
    </div>
    </div>
    );
  }
});
module.exports=MailDb;
