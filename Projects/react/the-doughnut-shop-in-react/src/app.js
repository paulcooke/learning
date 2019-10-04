import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './style.scss'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      doughnuts: null,
      error: null
    }
  }

  componentDidMount() {
    console.log('I mounted')
    axios.get('https://ga-doughnuts.herokuapp.com/donuts') 
      .then(res => this.setState({ doughnuts: res.data }))
      .catch(err => this.setState({ error: err.message }))
  }

  render() {
    console.log('I rendered', this.state)
    const { doughnuts, error } = this.state
    return (
      <>
        <main>
          <h1>React Doughnut Shop</h1>
          <form id="new-donut">
            <input type="text" name='flavor' id="flavor" placeholder="What type of donut?" />
            <select name="style" id="style">
              <option value="Old Fashioned">Old Fashioned</option>
              <option value="Cake">Cake</option>
              <option value="French Cruller">French Cruller</option>
              <option value="Yeast">Yeast</option>
            </select>
            <input type="submit" value='Save My Doughnut' />
          </form>
          {!doughnuts && !error && <h1>Loading...</h1>}
          {error && <h1>something went wrong, please refresh the page</h1>}
          {doughnuts &&
            <ul id="donuts">
            </ul>
          }
        </main>
      </>
    )
  }


}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)