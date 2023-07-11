import PropTypes from 'prop-types';

function MyComponent3({title, content, writer}) {

  return (

    <div>
      함수형 title: {title} <br/>
      함수형 content: {content} <br/>
      함수형 wirter: {writer} <br/>

    </div>

  )

}

MyComponent3.defaultProps = {
  writer : 'admin',
}

MyComponent3.propTypes = {
  title : PropTypes.string.isRequired,
  content : PropTypes.string,
  writer : PropTypes.string,
}

export default MyComponent3