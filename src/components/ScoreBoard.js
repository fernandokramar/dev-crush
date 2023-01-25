const ScoreBoard = ({ score }) => {
  return (
    <div className="score-board" style={{ height: "50px", width: "50px", marginLeft: "30px"}} >
      <h1>{score}</h1>
    </div>
  )
}

export default ScoreBoard