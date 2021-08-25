describe("objects.js", () => {
  let carmen
  try {
    carmen = carmen
  } catch (e) { console.error(e) }
  let testCarmen
  try {
    testCarmen = carmen
  } catch (e) { console.error(e) }
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
      chai.assert.isTrue(dog.likes.length >= 4, "We need to know more about her outfit")
    })
    describe("isCaptured Function", () => {
      let isCaptured = window["isCapured"]
      it("Function uses dot notation to return the isCaptured on carmen object", () => {
        carmen.captured = false
        chai.assert.isTrue(isCaptured() == carmen.captured, "Be sure to use dot notation")
      })
    })
  })

  describe("The Cat Challenges", () => {
    describe("renameCat Function", () => {
      let renameCat = window["renameCat"]
      it("Function should return the cat's new name", () => {
        chai.assert.strictEqual(renameCat(), "Kevin", "Be sure to name the cat Kevin")
      })
      it("Function should reassign the cat's name", () => {
        chai.assert.isTrue(testCat.name === "Kevin", "Be sure to reassign the value of the cat's name to Kevin")
      })
    })
    describe("colorTheCat Function", () => {
      let colorTheCat = window["colorTheCat"]
      it("The function should return a string", () => {
        chai.assert.isString(colorTheCat(),
          "Be sure to return a string value")
      })
      it("The function should create a property called color", () => {
        chai.assert.isDefined(testCat.color, "Be sure to use dot or bracket notation to create the color property on the cat object")
      })
      it("The function should return the value of the cat's color property", () => {
        chai.assert.isTrue(testCat.color && colorTheCat() === testCat.color, "Be sure to return the value of the color property using dot or bracket notation")
      })
    })
    describe("Deleting properties", () => {
      it("The whiskers property should be deleted off the Cat object", () => {
        chai.assert.isUndefined(testCat.whiskers, "Be sure to delete the property")
      })
    })
    describe("returnIndex Function", () => {
      let returnIndex = window["returnIndex"]
      let testArray = {
        likes: ['a', 'b', 'c', 'd', 'e', 'f']
      }
      it("The function should return the 4 item in the likes array on the cat object", () => {
        chai.assert.strictEqual(returnIndex(testCat), testCat.likes[3], "Be sure to return the value at the proper index")
        chai.assert.strictEqual(returnIndex(testArray), testArray.likes[3], "Be sure to return the value at the proper index")
      })
    })
  })
})

