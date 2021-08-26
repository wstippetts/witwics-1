
import './bdd_setup.js'
import './modules/clue1.test.js'
import './modules/clue2.test.js'
import './modules/clue3.test.js'
import './modules/clue4.test.js'
import './modules/clue5.test.js'

const runner = mocha.run()

runner.on("suite end", async(suite)=>{
  let solution = JSON.parse(localStorage.getItem('witwics1')) || {}
  if(suite.suites.length > 0 ){
    solution[suite.title] = solution[suite.title] || { }
    soulution[suite.title].completed = false
    const allPass = suite.suites.every(s => {
      return s.tests.length > 0 ? suiteIsPassing(s) : false
    })
    
    if(allPass){
      if(!solution[suite.title].img){
        let res = await axios.get('https://bcw-sandbox.herokuapp.com/api/witwics/1/'+suite.title)
        solution[suite.title] = res.data
      }
      solution[suite.title].complete = true
    }

    localStorage.setItem('witwics1', solution)
  }
})

/**
 * Evaluates if all tests in a suite are passing
 * @param suite {Mocha.Suite}
 * @returns boolean
*/
function suiteIsPassing(suite){
  return suite.tests.every(t => t.state === 'passed')
}
