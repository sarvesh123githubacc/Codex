import { Link, useNavigate } from 'react-router-dom';
import { Heart, CircleUserRound, Settings , LogOut} from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {

  const [token, setToken] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to='/' className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600"/>
              <span className="ml-2 text-xl font-bold">CareCircle</span>
            </Link>
          </div>
          <div className="relative hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            {
              token
              ? <div>
                <button onClick={()=>{
                  setShowProfile(!showProfile)
                }}
                className="focus:outline-none"
                >
                <CircleUserRound className='size-10 text-blue-600 bg-blue-100 p-0.5 border rounded-full'/>
                </button>

                {showProfile && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
                    <Link to="/edit-profile" onClick={()=>{setShowProfile(!showProfile)}} className='flex items-center px-4 py-2 hover:bg-gray-100'>
                    <Settings className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Link>
                    <button onClick={() => {
                      setToken(false);
                      setShowProfile(false);
                      navigate("/");
                    }}
                    className="flex items-center w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100"
                    >
                    <LogOut className="w-4 h-4 mr-2" />
                      Log out
                    </button>
                  </div>
                )}
              </div>
              : <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8"><Link to='/login' className="text-gray-700 hover:text-blue-600">Login</Link>
               <Link to='/SignUp' className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Sign Up
               </Link>
               </div> 
            }
            {/* <Link to='/About' className="text-gray-700 hover:text-blue-600">About</Link> */}
            {/* <Link to='/Communities' className="text-gray-700 hover:text-blue-600">Communities</Link> */}
            {/* <Link to='/Doctors' className="text-gray-700 hover:text-blue-600">Doctors</Link> */}
            {/* <Link to='/Resources' className="text-gray-700 hover:text-blue-600">Resources</Link> */}

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
