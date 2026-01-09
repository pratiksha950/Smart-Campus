import { useState } from 'react'
import { ArrowRight } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import Question from './../../configs/aboutus/questions.js'

const startIndex = 0;
const endIndex = Question.length - 5;

const randomIndex = Math.floor(Math.random() * (endIndex - startIndex + 1)) + startIndex;

const questionSet = Question.slice(randomIndex, randomIndex + 5);

function Quizapp() {

  const [questionIndex, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const currentQuestion = questionSet[questionIndex];

  const [styleOption, setStyleOption] = useState({
    0: {},
    1: {},
    2: {},
    3: {}
  })

  const checkAnswer = (selectOption, idx) => {
    if (currentQuestion.answer === selectOption) {
      toast.success("Correct Answer");
      setStyleOption({
        ...styleOption,
        [idx]: { backgroundColor: 'green', color: 'white' }
      })
    } else {
      toast.error(`Wrong Answer! The correct answer is: ${currentQuestion.answer}`);
      setStyleOption({
        ...styleOption,
        [idx]: { backgroundColor: 'red', color: 'white' }
      })
    }

    if (currentQuestion.answer === selectOption) {
      setScore(score + 1);
    }
  }

  return (
    <>
    <h1 className='text-center text-3xl font-bold mt-10 mb-3'>Quiz App</h1>
    <div className='bg-white p-6 rounded-xl shadow relative md:mx-20 mx-5'>
      <div className='container'>
        <p className='text-2xl mb-4'>Question: {questionIndex + 1}</p>

        <p className='text-xl'>* {currentQuestion.question}</p>

        <div >
          {currentQuestion.options.map((option, idx) => {
            return <div key={idx} className='border rounded-lg px-5 py-1 m-2 cursor-pointer' onClick={() => {
              checkAnswer(option, idx)
            }}
              style={styleOption[idx]}
            >{option}</div>
          })}
        </div>

        <p className='text-center font-semibold my-5'>Score: {score}/{questionSet.length}</p>

<div className=''>
        <ArrowRight className='absolute right-0 bottom-0 size-10' onClick={() => {
          if (questionIndex < questionSet.length - 1) {
            setQuestion(questionIndex + 1)
            setStyleOption({
              0: {},
              1: {},
              2: {},
              3: {}
            });
          } else {
            toast.success(`Congratulation your Score is: ${(score)}/${(questionSet.length)}`);
          }
        }}
        />
        </div>
      </div>
      <Toaster />
    </div>
    </>
  )
}

export default Quizapp
