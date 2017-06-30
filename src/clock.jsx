var Clock = React.createClass({
  render: function tick() {
    return(
    <div>
      <h3>Current (local) time: {new Date().toLocaleTimeString()}.</h3>
    </div>
  );
}
});

setInterval(function() {
  ReactDOM.render( Clock, document.getElementById("clock") );
}, 1000);