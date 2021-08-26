describe("clue2", () => {
   describe("largerNum Function", () => {
      let largerNum = window["largerNum"]
      it("Returns the larger number", () => {
         chai.assert.strictEqual(largerNum(10, 4), 10, "Be sure to return the larger of the two numbers")
         chai.assert.strictEqual(largerNum(18, 20), 20, "Be sure to return the larger of the two numbeers")

      })
   })
   describe("crimeGrader Function", () => {
      let crimeGrader = window["crimeGrader"]
      it("returns a string", () => {
         chai.assert.isString(crimeGrader(23, 25), "Return type must be a string.")
      })
      it("returns the correct letter grade", () => {
         chai.assert.strictEqual(crimeGrader(23, 25).toUpperCase(), "A", "Return can only be either 'A', 'B', 'C', 'D', 'F'.")
      })
      it("letter grade is case sensitive", () => {
         chai.assert.strictEqual(crimeGrader(19, 25), "C", "Letter grade must be capitalized.")
      })
   })
   describe("timeOfDay", () => {
      let timeOfDay = window["timeOfDay"]
      it("Function should return a string", () => {
         chai.assert.isString(timeOfDay(5), "Be sure to return time of day")
      })
      it("Function should return 'morning during' the morning hours", () => {
         chai.assert.isTrue(timeOfDay(5).toLowerCase() == "morning" && timeOfDay(11).toLowerCase() == "morning" && timeOfDay(7).toLowerCase() == "morning", "Be sure to return 'Morning' between (and including) the hours 5 and 11")
      })
      it("Function should return 'afternoon' during afternoon hours", () => {
         chai.assert.isTrue(timeOfDay(13).toLowerCase() == "afternoon" && timeOfDay(12).toLowerCase() == "afternoon" && timeOfDay(17).toLowerCase() == "afternoon", "Be sure to return 'afternoon' between (and including) the hours 12 and 17")
      })
      it("Function should return 'evening' for evening hours", () => {
         chai.assert.isTrue(timeOfDay(18).toLowerCase() == "evening" && timeOfDay(20).toLowerCase() == "evening" && timeOfDay(21).toLowerCase() == "evening", "Be sure to return 'evening' between the hours of 22 - 24 and 1 - 4")
      })
      it("Function should return 'night' for nightime hours between 22 and 24", () => {
         chai.assert.isTrue(timeOfDay(22).toLowerCase() == "night" && timeOfDay(23).toLowerCase() == "night" && timeOfDay(24).toLowerCase() == "night", "Be sure to return 'night' between (and including) the hours 22 and 24")
      })
      it("Function should return 'night' for nighttime hours between 1 and 4", () => {
         chai.assert.isTrue(timeOfDay(1).toLowerCase() == "night" && timeOfDay(3).toLowerCase() == "night" && timeOfDay(4).toLowerCase() == "night", "Be sure to return 'night' between (and including) the hours 1 and 4")
      })

   })
   describe("isSuspicious Function", () => {
      let isSuspicious = window["isSuspicious"]
      it("Should return a string", () => {
         chai.assert.isString(isSuspicious(98), "Be sure to return a string")
      })
      it("Should return 'not suspicious' if temp is under or equal to 98.6", () => {
         chai.assert.isTrue(isSuspicious(98).toLowerCase() == "not suspicious", "Be sure to return 'not suspicious' is temp is below 98.6")
         chai.assert.isTrue(isSuspicious(75).toLowerCase() == "not suspicious")
         chai.assert.isTrue(isSuspicious(98.6).toLowerCase() == "not suspicious", "Be sure to return 'not suspicious' if temp is equal to 98.6")
      })
      it("Should return 'suspicious' if temp is above 98.6", () => {
         chai.assert.isTrue(isSuspicious(98.7).toLowerCase() == "suspicious", "Be sure to return 'suspicious' if the temp is above 98.6")
         chai.assert.isTrue(isSuspicious(101).toLowerCase() == "suspicious", "Be sure to return 'suspicious' if temp is above 98.6")
      })
      it("Should return 'very suspicious'", () => {
         chai.assert.isTrue(isSuspicious(103).toLowerCase() == "very suspicious", "Be sure to return 'very suspicious' if temp is at or above 103")
         chai.assert.isTrue(isSuspicious(110).toLowerCase() == 'very suspicious', "Be sure to return 'very suspicious' if temp is at or above 103")
      })
   })
   describe("isStopped Function", () => {
      let isStopped = window["isStopped"]
      let movingCar = {
         moving: true
      }
      let stoppedCar = {
         moving: false
      }
      it("Should return a boolean value", () => {
         chai.assert.isBoolean(isStopped(movingCar), "Be sure to return a boolean value")
      })
      it("Should return false if the car object is  moving", () => {
         chai.assert.strictEqual(isStopped(movingCar), false, "Be sure to return false if the car is moving")
      })
      it("Should return true if the car is not moving", () => {
         chai.assert.strictEqual(isStopped(stoppedCar), true, "Be sure to return true if the car is stopped")
      })
   })
   describe("attemptCapture Function", () => {
      let attemptCapture = window["attemptCapture"]
      let criminal1 = {
         atHome: false,
         asleep: true,
      }
      let criminal2 = {
         atHome: true,
         asleep: false,
      }
      let criminal3 = {
         atHome: true,
         asleep: true
      }
      it("Should return false if the one of the properties is false", () => {
         chai.assert.isTrue(attemptCapture(criminal1) == false && attemptCapture(criminal2) == false, "Be sure to return false if the dish is not yours or it is not dirty")
      })
      it("Should return true if the suspect is home and is asleep", () => {
         chai.assert.strictEqual(attemptCapture(criminal3), true, "Be sure to return true if the dish is yours and it is dirty")
      })
   })
})

