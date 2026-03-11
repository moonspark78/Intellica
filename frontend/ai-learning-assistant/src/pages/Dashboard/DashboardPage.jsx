import React, { useEffect, useState } from "react"
import Spinner from "../../components/common/Spinner"
import progressService from '../../services/progressService';
import toast from "react-hot-toast";
import { FileText, BookOpen, BrainCircuit, TrendingUp, Clock } from "lucide-react";

const DashboardPage = () => {

  const [dashboardData, setDashboardData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        
      } catch (error) {
        
      }
    };
  },[])




  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage