import './bdd_setup.js'
import './modules/clue1.test.js'
import './modules/clue2.test.js'
import './modules/clue3.test.js'
import './modules/clue4.test.js'
import './modules/clue5.test.js'

const runner = mocha.run()

runner.on("suite end", async(suite)=>{
  let solution = JSON.parse(localStorage.getItem('witwics1')) || {}
  
  if(suite.title.startsWith('clue')){
    solution[suite.title] = solution[suite.title] || { }
    solution[suite.title].completed = suiteFileIsPassing(suite)
    if(solution[suite.title].completed && !solution[suite.title].img){
        let clue = await setClueData(suite, solution[suite.title])
        solution = JSON.parse(localStorage.getItem('witwics1')) || {}
        solution[suite.title] = clue
    }
    localStorage.setItem('witwics1', JSON.stringify(solution))
  }
})


async function setClueData(suite, clue) {
  const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/witwics/1/' + suite.title)
  clue = {...clue, ...res.data}
  return clue
}

/**
 * Evaluates a file of suites to determine if all are passing
 * @param suiteFile {Mocha.Suite}
*/
function suiteFileIsPassing(suiteFile){
  return suiteFile.suites.every(s => {
    return s.tests.length > 0 ? suiteIsPassing(s) : false
  })
}


/**
 * Evaluates if all tests in a suite are passing
 * @param suite {Mocha.Suite}
 * @returns boolean
*/
function suiteIsPassing(suite){
  return suite.tests.every(t => t.state === 'passed')
}
