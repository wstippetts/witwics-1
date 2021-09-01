describe("clue5", () => {
  let carmen = window['carmen']
  describe("Carmen Object", () => {
    it("Has a name property", () => {
      chai.assert.isString(carmen.name, "Be sure to use the string data type")
    })
    it("Has a heightInInches property", () => {
      chai.assert.isNumber(carmen.heightInInches, "Be sure to use a numerical data type")
    })
    it("Has a captured property", () => {
      chai.assert.isBoolean(carmen.captured, "Be sure to use a boolean value")
    })
    it("Has an outfit property", () => {
      chai.assert.isArray(carmen.outfit, "Be sure to use the array data type")
    })
    it("outfit at least 4 things", () => {
      chai.assert.isTrue(carmen.outfit.length >= 4, "We need to know more about her outfit")
    })
  })
  describe("isCaptured Function", () => {
    let isCaptured = window["isCaptured"]
    it("Function uses dot notation to return the isCaptured on carmen object", () => {
      carmen.captured = false
      chai.assert.isTrue(isCaptured() == carmen.captured, "Be sure to use dot notation")
    })
  })

  describe("updateValue Function", () => {
    let updateValue = window["updateValue"]
    let ticket = window["ticket"]
    it("Function should change the ticket's airline property", () => {
      ticket.airline = 'aim care'
      updateValue('airline', 'acme air')
      chai.assert.strictEqual(ticket.airline, "acme air", "Be sure to change the key's value using bracket notation")
    })
    it("Function should change the ticket's flightNumber property", () => {
      ticket.flightNumber = 317
      updateValue('flightNumber', 137)
      chai.assert.strictEqual(ticket.flightNumber, 137, "Be sure to change the key's value using bracket notation")
    })
    it("Function should change the ticket's firstClass property", () => {
      ticket.firstClass = false
      updateValue('firstClass', true)
      chai.assert.isTrue(ticket.firstClass, "Be sure to change the key's value using bracket notation")
    })
  })
  describe("flightStatus Function", () => {
    let flightStatus = window["flightStatus"]
    let ticket = window["ticket"]
    it("The function should create a property called status", () => {
      flightStatus('departed')
      chai.assert.isDefined(ticket.status, "Be sure to use dot or bracket notation to create the 'status' property on the ticket object")
    })
    it("The function should set the value of the flights's status property", () => {
      flightStatus('arrived')
      chai.assert.strictEqual(ticket.status, 'arrived', "Be sure to set the value of the status property to the provided status using dot or bracket notation")
    })
  })
  describe("removeId", () => {
    let ticket = window["ticket"]
    let removeId = window["removeId"]
    it("Removes the 'id' property from the ticket object", () => {
      ticket.id = '59ee052546081123d0e21843'
      removeId()
      chai.assert.isUndefined(ticket.id, "Be sure to delete the 'id' property")
    })
  })
})

