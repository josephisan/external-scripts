	
	function SliderMain() {
        const [selected, setSelected]= React.useState(0);
        
       
        return (
          // <!-- start main -->
          <div>
            {"Selected is : " + selected}
          </div>
          // <!-- start main -->
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
        	<SliderMain />
        </div>
      )
    }
  }

	ReactDOM.render(
  	<App />,
    document.getElementById('app')
  )
