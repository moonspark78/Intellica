import React from 'react';
import { Plus, FileText } from 'lucide-react';


const EmptyState = ({title, description,buttonText, onActionClick}) => {
  return (
    <div className=''>
        <div className="">
            <FileText className='' strokeWidth={2}/>
        </div>
    </div>
  )
}

export default EmptyState