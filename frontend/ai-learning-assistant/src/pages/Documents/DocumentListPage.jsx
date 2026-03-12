import React, {useEffect, useState} from 'react'
import { Plus, Upload, Trash2, FileText, X } from "lucide-react";
import toast from "react-hot-toast";

import documentService from '../../services/documentService';
import Spinner from '../../components/common/Spinner';


const DocumentListPage = () => {

  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  // State for upload modal
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadFile,setUploadFile] = useState(null);
  const [uploadTitle,setUploadTitle] = useState("");
  const [uploading,setUploading] = useState(false);

  const fetchDocuments = async () => {
    try {
      
    } catch (error) {
      
    }
  };


  return (
    <div>DocumentListPage</div>
  )
}

export default DocumentListPage