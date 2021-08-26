
import './bdd_setup.js'
import './modules/clue1.test.js'
import './modules/clue2.test.js'
import './modules/clue3.test.js'
import './modules/clue4.test.js'
import './modules/clue5.test.js'

const runner = mocha.run()

runner.on("suite end", (suite)=>{
  if(suite.suites.length > 0 ){
    const allPass = suite.suites.every(s => {
      return s.tests.length > 0 ? suiteIsPassing(s) : false
    })
    if(allPass){
      console.log(suite.title,'suite done')
      // call api here
    }
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
