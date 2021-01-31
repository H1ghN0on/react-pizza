import React from 'react';



import { Header } from './components';
import { Home, Cart }  from './pages';
import { Route } from 'react-router-dom';


function App() {
  

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
       <Route path="/" exact component={Home} />
       <Route path="/cart" component={Cart} exact />
     </div>
    </div>
  )
}

export default App;


/*class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
         <Route path="/" exact render={() => <Home items={this.props.items} />} />
         <Route path="/cart" component={Cart} exact />
       </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    items: state.pizzas.items,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)), 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);*/
