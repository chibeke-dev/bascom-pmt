import React, { Component } from 'react'
// wrap avatars
class AvatarGroup extends Component {
  render() {
    const {children} = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default AvatarGroup
