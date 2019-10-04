import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './style.scss'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      doughnuts: null
    }
  }

  componentDidMount() {
    console.log('component did indeed mount')
    axios.get('https://ga-doughnuts.herokuapp.com/donuts')
      .then(res => this.setState({ doughnuts: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log('i have rendered')
    console.log(this.state.doughnuts)
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
          <ul id="donuts">
          </ul>
        </main>
      </>
    )
  }


}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)