import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, BookOpen, Sparkles, TrendingUp } from 'lucide-react';
import moment from 'moment';


const FlashcardSetCard = ({ flashcardSet }) => {

  const navigate = useNavigate();

  const handleStudyNow = () => {
    navigate(`/documents/${flashcardSet.documentId._id}/flashcards`);
  };

  const reviewedCount = flashcardSet.cards.filter(card => card.lastReviewed).length;
  const totalCount = flashcardSet.cards.length;
  const progressPercent = totalCount > 0 ? Math.round((reviewedCount / totalCount) * 100) : 0;

  return <div
    className=''
    onClick={handleStudyNow}
  >
    <div className="">
      {/* Icon and Title */}
      <div className="">
        <div className="">
          <BookOpen className='' size={24} />
        </div>
        <div className="">
          <h3 className="" title={flashcardSet?.documentId?.title}>
            {flashcardSet?.documentId?.title}
          </h3>
          <p className=''> 
            Created {moment(flashcardSet.createdAt).fromNow()} 
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="">
        <div className="">
          <span className=''>
            {totalCount} {totalCount === 1 ? 'Card' : 'Cards'}
          </span>
        </div>
        {reviewedCount > 0 && (
          <div className="">
            <TrendingUp className='' strokeWidth={2.5}/>
            <span className=''>
              {progressPercent}% 
            </span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {totalCount > 0 && (
        <div className="">
          <div className="">
            <span className=''>
              Progress
            </span>
            <span className=''>
              {reviewedCount} / {totalCount} Reviewed
            </span>
          </div>
          <div className="">
            <div
              className=""
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}
    </div>

    {/* Study Button */}
    <div className="">
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleStudyNow();
        }}
        className=''
      >
        <span className=''>
          <Sparkles className='' strokeWidth={2.5}/>
          Study Now
        </span>
        <div className=''/>
      </button>
    </div>
  </div>
}

export default FlashcardSetCard