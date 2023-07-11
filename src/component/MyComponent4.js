import React from 'react';


class MyComponent4 extends React.Component {

  render() {

    const {title, content, writer} = this.props;

    return(
      <div>
        클래스형 title: {title}<br/>
        클래스형 content {content}<br/>
        클래스형 writer {writer} <br/>

      </div>
    ) 

  }

}

export default MyComponent4