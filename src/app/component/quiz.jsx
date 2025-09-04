"use client"
import React, { useState } from 'react'

const Quiz = ({ question }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const handleAnswerSubmit = () => {
    if (selectedAnswer === question[currentQuestion].answer) {
      setScore(prevScore => prevScore + 1)
    }

    if (currentQuestion + 1 < question.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResults(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResults(false)
  }

  return (
    <div className='container'>
      {showResults ? (
        <div className='finish'>
          <h2>Quiz Finished</h2>
          <p>Your score: {score}/{question.length}</p>
          <button className='btn2' onClick={handleRestart}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2>
            {question[currentQuestion].question}
          </h2>
          <div>
            {question[currentQuestion].option.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(option)}
                className='btn'
                style={{ backgroundColor: selectedAnswer === option ? 'lightblue' : 'white' }}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className='btn2'
            onClick={handleAnswerSubmit}
            disabled={!selectedAnswer}
          >
            Submit Answer
          </button>
        </div>
      )}
    </div>
  )
}

export default Quiz
