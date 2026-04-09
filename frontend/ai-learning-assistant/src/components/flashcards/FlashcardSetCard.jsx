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
    className='group relative bg-white/80 backdrop-blur-xl border-2 border-slate-200 hover:border-emerald-300 rounded-2xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/10 flex flex-col justify-between'
    onClick={handleStudyNow}
  >
    <div className="space-y-4">
      {/* Icon and Title */}
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
          <BookOpen className='w-6 h-6 text-emerald-600' size={24} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-slate-900 line-clamp-2 mb-1" title={flashcardSet?.documentId?.title}>
            {flashcardSet?.documentId?.title}
          </h3>
          <p className='text-xs font-medium text-slate-500 uppercase tracking-wide'> 
            Created {moment(flashcardSet.createdAt).fromNow()} 
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-3 pt-2">
        <div className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">
          <span className='text-sm font-semibold text-slate-700'>
            {totalCount} {totalCount === 1 ? 'Card' : 'Cards'}
          </span>
        </div>
        {reviewedCount > 0 && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg">
            <TrendingUp className='w-3.5 h-3.5 text-emerald-600' strokeWidth={2.5}/>
            <span className='text-sm font-semibold text-emerald-700'>
              {progressPercent}% 
            </span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      {totalCount > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className='text-xs font-medium text-slate-600'>
              Progress
            </span>
            <span className='text-xs font-medium text-slate-700'>
              {reviewedCount} / {totalCount} Reviewed
            </span>
          </div>
          <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}
    </div>

    {/* Study Button */}
    <div className="mt-6 pt-4 border-t border-slate-100">
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




    {/* Avatar */}
    <div className="">
      <div className=""></div>
    </div>
  </div>
}

export default FlashcardSetCard