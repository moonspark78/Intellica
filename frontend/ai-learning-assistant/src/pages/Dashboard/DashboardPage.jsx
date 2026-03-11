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
        const data = await progressService.getDashboardData();
        console.log("Data___getDashbordData", data);

        setDashboardData(data.data);
      } catch (error) {
        toast.error('Failed to fetch dashboard data.')
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  },[])




  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage