const ScoreCounter = ({currentScore, bestScore}) =>{
    return (
        <div className="scorecard">
            <div className="currentscore">
                <p>{currentScore}</p>
            </div>

            <div className="bestscore">
                <p>{bestScore}</p>
            </div>
        </div>

    )
}

export default ScoreCounter