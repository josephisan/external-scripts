	
	function Card(props) {
  	return (
    	<div className="card">
      	Helllo world from script
  		</div>
    );
  }
  class App extends React.Component {
  	constructor() {
    	super();

			this.state = {
      
      }
    }

  	render() {
    	return (
      	<div>
        	<Card />
        </div>
      )
    }
  }

	ReactDOM.render(
  	<App />,
    document.getElementById('app')
  )
