import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import { User, Mail, Lock } from 'lucide-react';



const ProfilePage = () => {

  const [loading, setLoading] = useState(true);
  const [passwordLoading, setPasswordLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");


  return (
    <div>
      <PageHeader title="Profile Settings" />

      <div className="space-y-8">
        {/* User Information Display */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-6">
          <h3 className='text-lg font-semibold text-neutral-900 mb-4'>
            User Information
          </h3>
          <div className="">
            <div>
              <label className="">
                Username
              </label>
              <div className="">
                <div className="">
                  <User className='' />
                </div>
                <p className="">
                  {username}
                </p>
              </div>
            </div>
            <div>
              <label className="">
                Email Adress
              </label>
              <div className="">
                <div className="">
                  <Mail className="" />
                </div>
                <p className="">
                  {email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage