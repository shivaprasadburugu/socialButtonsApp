const Button = props => {
  //  Write your code here.
  const {className,buttonText} = props;
  return <button className = {button ${className}}>${buttonText}</button>

}

const element = (
  //  Write your code here.
  <div className = "social-button-container">
      <h1 className = "heading">SOCIAL BUTTONS</h1>
      <div className = "buttons-container">
          <Button className = "button-like" buttonText = "Like" />
          <Button className = "button-comment" buttonText = "Comment" />
          <Button className = "button-share" buttonText = "Share" />

      </div>
  </div>

)

ReactDOM.render(element, document.getElementById('root'))
