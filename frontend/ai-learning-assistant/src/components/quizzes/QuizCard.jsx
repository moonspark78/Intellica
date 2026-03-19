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

      </button>
    </div>
  )
}

export default QuizCard