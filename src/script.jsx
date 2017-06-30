var Random = React.createClass({
  getInitialState: function() {
    return { message: "Hello World!" };
  },
  onClick: function() {
    var messages = ["Hello World!", "Hello Planet!", "Hello Universe!"];
    var randomMessage = messages[Math.floor(Math.random() * 3)];
    this.setState({ message: randomMessage });
  },
  render: function() {
    return (
      <div>
        <MessageView message={this.state.message} />
        <h1> <input type="button" onClick={this.onClick} value="Change Message" /> </h1>
      </div>
    );
  }
});

var MessageView = React.createClass({
  render: function() {
    return <p>{this.props.message}</p>;
  }
});

var Clock = React.createClass({
  render: function tick() {
  const element = (
    <div>
      <h3>Current (local) time: {new Date().toLocaleTimeString()}.</h3>
    </div>
  );
  setInterval(tick, 1000);
}
});
ReactDOM.render(Clock, document.getElementById("clock"));
ReactDOM.render(<Random/>, document.getElementById("greeting"));
