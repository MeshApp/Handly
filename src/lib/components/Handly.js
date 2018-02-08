import React from 'react'
import PropTypes from 'prop-types'

class Handly extends React.Component{

  handleSplit(text, regex){
    if(!text || text === '')
      return ''
      
    return (
      <p>
        {text.split(regex).reduce((prev, current, index) => {
          if(!index)
            return [current]
    
          return prev.concat(
            current.match(regex) ?
            <a 
              key={index}
              href={`https://twitter.com/hashtag/${current}?src=hash`} 
              target='_blank' 
              rel='noopener noreferrer'>
                {current}
            </a> :
            current
          )
        }, [])}
      </p>
    )
  }

  render(){
    return this.handleSplit(this.props.string, /(^|\s)(#[a-z\d-]+)/g)
  }
}

Handly.propTypes = {
  string: PropTypes.string.isRequired
}

export default Handly