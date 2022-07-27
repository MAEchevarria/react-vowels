function OutputLabel(props) {
    // logic to evaluate each letter for vowel
    // each letter is pushed to list as an inline element with or without highligh css class
    const highlightVowels = () => {
        let letters = []

        for (let i = 0; i < props.word.length; i++) {
            let regExp = /[aeiou]/i
            if (regExp.test(props.word[i])) {
                letters.push(<span className="highlight">{ props.word[i] }</span>)
            }
            else {
                letters.push(<span>{ props.word[i] }</span>)
            }
        }
        
        return letters
    }

    return (
        <p>Is this your word? { highlightVowels() }</p>
    )
}

export default OutputLabel