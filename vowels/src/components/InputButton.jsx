function InputButton(props) {
    // get value of user input
    const handleWord = () => {
        let userInput = document.getElementById('user-input')
        if (userInput) {
          // need .value
          props.handleSubmit(userInput.value)
        }
      }
    return (
        <div>
            <input id='user-input' type="text" placeholder='Enter word' />
            <button onClick={handleWord}>Submit</button>
        </div>
    )
}

export default InputButton