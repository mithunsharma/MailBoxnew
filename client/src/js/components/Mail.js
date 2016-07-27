var React=require('react');

var Mail = React.createClass({
  getInitialState:function()
  {
    var html = atob(this.props.mail1.Msg_data.replace(/-/g, '+').replace(/_/g, '/'));
      return {matter:html,  showModal : false};
  },handleShowModal: function(){
    console.log("show");
    this.setState({showModal : true})
  },
  handleHideModal : function(){
    console.log("hide false");
    this.setState({showModal : false})
  },
  render: function() {
    return (
      <div className="Mail" >
      <div className="row">

    <div className="col-md-12 mailb" >
    <form >
    <h5>ID:{this.props.mail1.msg_id}</h5>
  <h4>Snippet:</h4><p>{this.props.mail1.Msg_snippet}</p>
    <a id="modal-808820" href="#modal-container-808820" onMouseDown={this.handleShowModal} role="button" class="btn" data-toggle="modal">Read more</a>

     {this.state.showModal?<UpdateModal handleHideModal={this.handleHideModal} mdata={this.props.mail1}/>:null}


    </form>
    </div>
    </div>
    </div>
    );
  }
});
module.exports=Mail;
