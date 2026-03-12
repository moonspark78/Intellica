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
      const data = await documentService.getDocuments();
    } catch (error) {
      toast.error("Failed to fetch documents.")
      console.error(error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadFile(file);
      setUploadTitle(file.name.remplace(/\.[^/.]+$/, ""));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!uploadFile || !uploadTitle) {
      toast.error("Please provide a title and select a file.");
      return;
    }
    setUploading(true);
    const formData = new FormData();
    formData.append("file", uploadFile);
    formData.append("title", uploadTitle);

    try {
      await documentService.uploadDocument(formData);
      toast.success("Document uploaded successfully!")
      setIsUploadModalOpen(false)
    } catch (error) {
      toast.error(error.message || "Upload failed.")
    } finally {
      setUploading(false);
    }
  };


  return (
    <div>DocumentListPage</div>
  )
}

export default DocumentListPage