import React from "react"
import {Link} from "react-router-dom"
import { Trash2, Play, BarChart2, Award } from "lucide-react"
import { moment } from 'moment';



const QuizCard = ({quiz, onDelete}) => {
  return (
    <div className="">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(quiz)
        }}
        className=""
      >
        <Trash2 className="" strokeWidth={2}/>
      </button>

      <div className="">
        {/* Status Badge */}
        <div className="">
          <div className="">
            <Award className="" strokeWidth={2.5}/>
            <span className="">Score: {quiz?.score}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizCard