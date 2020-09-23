"use strict";

function Homepage() {
  return (
    <div>
      <p>View Ballonicorn's Trading Card collection</p>
      <a href="/cards">View the Trading Cards</a>
      <img src="/static/img/balloonicorn.jpg"/>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
