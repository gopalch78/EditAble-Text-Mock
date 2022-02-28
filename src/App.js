import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {editableText: '', isClicked: false}

  onClickButtonEditOrSave = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  onChangeSearchInput = event => {
    this.setState({
      editableText: event.target.value,
    })
  }

  render() {
    const {editableText, isClicked} = this.state
    return (
      <>
        <div>
          <div>
            <h1>Editable Text Input</h1>
            <div>
              {isClicked ? (
                <p>{editableText}</p>
              ) : (
                <input
                  onChange={this.onChangeSearchInput}
                  value={editableText}
                />
              )}
              <button type="button" onClick={this.onClickButtonEditOrSave}>
                {isClicked ? <span>Edit</span> : <span>Save</span>}
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
