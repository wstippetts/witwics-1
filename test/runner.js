import './bdd_setup.js'
import './modules/clue1.test.js'
import './modules/clue2.test.js'
import './modules/clue3.test.js'
import './modules/clue4.test.js'
import './modules/clue5.test.js'

const runner = mocha.run()
let solved = 0
runner.on("suite end", async(suite)=>{
  let solution = JSON.parse(localStorage.getItem('witwics1')) || {}
  if(!suite.title.startsWith('clue')){ return }
  solution = await checkSolution(solution, suite)
  if(!solution[suite.title].completed){return}
  showSolution(solution[suite.title], suite)
  solved++
  if(solved === 5){
    const mochaElem = document.getElementById('mocha')
    mochaElem.classList.add('completed')
    document.body.appendChild(createSuccessElem())
    setTimeout(()=>{
      let confetti = new ConfettiGenerator();
      confetti.render();
    }, 500) 
  }
})


function showSolution(solution, suite){
  const sectionLink = document.querySelector(`li.suite h1 a[href="/?grep=${suite.title}"]`)
  if(!sectionLink){return}
  const suiteElem = sectionLink?.parentElement?.parentElement
  suiteElem.classList.add('completed')
  const solutionElem = document.createElement('div')
  solutionElem.className = 'solution ' + suite.title
  solutionElem.innerHTML = /*html*/`
  <div>
  <div class="solution-img">
      <span class="paper-clip"></span>
      <img src="${solution.img}">
      </div>
      <div class="solution-type">
        <sup>${solution.type}</sup>
        <h3>${solution.name}</h3>
      </div>
  </div>
  `
  suiteElem.appendChild(solutionElem)
}

async function checkSolution(solution, suite) {
  solution[suite.title] = solution[suite.title] || {}
  solution[suite.title].completed = suiteFileIsPassing(suite)

  if (solution[suite.title].completed && !solution[suite.title].img) {
    let clue = await setClueData(suite, solution[suite.title])
    solution = JSON.parse(localStorage.getItem('witwics1')) || {}
    solution[suite.title] = clue
  }
  localStorage.setItem('witwics1', JSON.stringify(solution))
  return solution
}

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


function createSuccessElem(){
  const div = document.createElement('div')
  div.className = 'success'
  div.innerHTML = /*html*/`
    <canvas id="confetti-holder"></canvas>
    <div class="thank-you">
      <h4>Thank you GumShoe</h4>
      <p>Your work has stopped Carmen from achieving her goals.</p>
    </div>
    <p class="thank-you alert">⚠ Unfortunately, she alluded capture so we'll <em>see you</em> on the next mission!</p>
  `
  return div
}