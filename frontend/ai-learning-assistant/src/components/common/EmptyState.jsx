import React from 'react';
import { Plus, FileText } from 'lucide-react';


const EmptyState = ({title, description,buttonText, onActionClick}) => {
  return (
    <div className='flex flex-col items-center justify-center py-16 px-6 text-center bg-linear-to-br from-slate-50/50 to-white border-2 border-dashed border-slate-200 rounded-3xl'>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-slate-100 to-slate-200/50 mb-6">
            <FileText className='' strokeWidth={2}/>
        </div>
        <h3 className=''>{title}</h3>
        <p className=''>{description}</p>
        {buttonText && onActionClick && (
            <button
                onClick={onActionClick}
                className=''
            >
                <span className=''>
                    <Plus className='' strokeWidth={2.5}/>
                    {buttonText}
                </span>
                <div className=''/>
            </button>
        )}
    </div>
  )
}

export default EmptyState