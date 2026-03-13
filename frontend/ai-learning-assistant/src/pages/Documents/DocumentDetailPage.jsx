import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import documentService from '../../services/documentService'
import Spinner from '../../components/common/Spinner'
import toast from 'react-hot-toast'
import { ArrowLeft, ExternalLink } from 'lucide-react'

const DocumentDetailPage = () => {

  const {id} = useParams();
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Content");

  useEffect(() => {
    const fetchDocumentDetails = async () => {
      try {
        const data = await documentService.getDocumentById(id);
        setDocument(data);
      } catch (error) {
        toast.error("Failed to fetch document details.")
        console.error(error);
      } finally {
        setLoading(false)
      }
    };
    fetchDocumentDetails();
  }, [id])

  // Helper function to get the full PDF URL
  const getPdfUrl = () => {
    if (!document?.data?.filePath) return null;

    const filePath = document.data.filePath;

    if (filePath.startsWith('http://') || filePath.startsWith('https://')) {
      return filePath;
    }

    const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:8000";
    return `${baseUrl}${filePath.startsWith('/') ? '' : '/'}${filePath}`;
  };

  const renderContent = () => {
    if (loading) {
      return <Spinner/>
    }
    if (!document || !document.data || !document.data.filePath) {
      return <div className="">PDF not available.</div>
    }

    const pdfUrl = getPdfUrl();

    return (
      <div className="">
        <div className="">
          <span className=''>Document Viewer</span>
          <a 
            href=""
          >
            <ExternalLink size={16}/>
            Open in new tab
          </a>
        </div>
        <div className="">
          <iframe 
            src={pdfUrl} 
            frameborder="0"
            className=''
            title='PDF Viewer'
            style={{
              colorScheme: "light"
            }}
          />
        </div>
      </div>
    );
  };

  const renderChat = () => {
    return "renderChat"
  };

  const renderAIActions = () => {
    return "renderAIActions"
  };

  return (
    <div>DocumentDetailPage</div>
  )
}

export default DocumentDetailPage