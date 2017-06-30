function clock_tick() {
  const element = (
    <div>
      <h3> Current (local) time is: {new Date().toLocaleTimeString()}.</h3>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('clock')
  );
}

setInterval(clock_tick, 1000);