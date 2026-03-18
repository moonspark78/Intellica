import React from 'react';
import { Plus, FileText } from 'lucide-react';


const EmptyState = ({title, description,buttonText, onActionClick}) => {
  return (
    <div className=''>
        <div className="">
            <FileText className='' strokeWidth={2}/>
        </div>
        <h3 className=''>{title}</h3>
        <p className=''>{description}</p>
        {buttonText && onActionClick && (
            <button
                onClick={onActionClick}
            >

            </button>
        )}
    </div>
  )
}

export default EmptyState