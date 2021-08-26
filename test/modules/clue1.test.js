describe("clue1", () => {
  describe("LetterAtPosition Function", () => {
    let letterAtPos = window['letterAtPosition']
    it("it works with one character", () => {
      chai.assert.strictEqual(letterAtPos("i", 0), "i")
    })

    it("Works with more than one character input", () => {
      chai.assert.strictEqual(letterAtPos("hello i call myself joan", 9), "a")
    })
  })

  describe("Concat Function", () => {
    let concat = window['concat']
    it("Will join two strings with the default seperator", () => {
      chai.assert.strictEqual(concat("Javascript", "is awesome!"), "Javascript is awesome!")
    })

    it("Will accept the optional seperator", () => {
      chai.assert.strictEqual(concat("JavaScript", "is Awesome!!!", ", "), "JavaScript, is Awesome!!!")
    })
  })

  describe("Capitalizer Function", () => {
    let capitalizer = window['capitalizer']
    it("Returns a string", () => {
      chai.assert.isString(capitalizer("string", 1))
    })

    it("Capitalizes the character at the target position", () => {
      chai.assert.strictEqual(capitalizer("bananana", 2), "N")
    })

    it("Works with any length of string", () => {
      chai.assert.strictEqual(capitalizer("How much wood could a woodchuck chuck if a woodchuck could chuck wood", 22), "W")
    })

  })

  describe("messageContainsPhrase Function", () => {
    let messageContainsPhrase = window['messageContainsPhrase']
    it("returns a boolean value", ()=>{
      chai.assert.isBoolean(messageContainsPhrase('Hello World','o'), 'Be sure to return a bool value')
    })
    it("finds a single letter in a message", ()=>{
      chai.assert.isTrue(messageContainsPhrase('Hello World','o'), 'be sure to return true with the the message contains the the phrase')
    })
    it("finds a phrase in a message", ()=>{
      chai.assert.isTrue(messageContainsPhrase('It\'s dangerous to go alone, take this.','go alone'), 'should work on phrases including spaces')
    })
    it("returns false if phrase not found", ()=>{
      chai.assert.isFalse(messageContainsPhrase('It\'s dangerous to go alone, take this.','zelda'), 'should return false if the phrase does not exist in the message')
    })
    it("is not case sensitive", ()=>{
      chai.assert.isFalse(messageContainsPhrase('Welcome to Jurassic Park', 'jurassic'), 'should return true if the phrase is in the message despite casing')
    })
  })
})