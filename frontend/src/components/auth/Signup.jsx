import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';

const Signup = () => {
    const [password, setPassword] = useState(true)
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [cFile, setCfile] = useState('');
   
    const [userType, setUserType] = useState(""); // Using state for userType
    const { loading, user } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
   

    const submitHandler = async (e) => {
        e.preventDefault();
        if(!fname || !email || !inputPassword || !userType ||!phone){
            toast.error("fill all the required"); 
        }
        try {
            // Dispatch= loading state
            dispatch(setLoading(true));
    
            const formData = new FormData();
            formData.append("fullname", fname);
            formData.append("email", email);
            formData.append("password", inputPassword);
            formData.append("role", userType);
            formData.append("phoneNumber", phone);
            if (cFile) {
                formData.append("file", cFile); 
            }
            const res = await axios.post(
                `/api/v1/user/register`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    withCredentials: true,
                }
            );
    
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/login");
            }
        } catch (error) {
            
            console.error("Error during registration:", error);
            if (error.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Something went wrong. Please try again later.");
            }
        } finally {
            dispatch(setLoading(false));
        }
    };
    
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center max-w-7xl mx-auto margin-section">
                <form
                    onSubmit={submitHandler}
                    className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
                >
                    <h1 className="font-bold text-xl mb-5">Sign Up</h1>
                    <div className="my-2">
                        <Label>Full Name</Label>
                        <Input
                            type="text"
                            name="fullname"
                            onChange={(e) => setFname(e.target.value)}
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="my-2">
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                    <div className="my-2">
                        <Label>Phone Number</Label>
                        <Input
                            type="text"
                            name="phoneNumber"
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone Number"
                        />
                    </div>
                    <div className='log-userpassword my-2 '>
                                <Label>Password</Label>
                            <Input type={password ? 'password' : 'text'} placeholder='enter password' onChange={(e) => setInputPassword(e.target.value)} />
                            <div className='password-eye' onClick={() => setPassword((prev) => !prev)}>
                                {
                                    password ?
                                        <span class="material-symbols-outlined">
                                            visibility_off
                                        </span> : <span class="material-symbols-outlined">
                                            visibility
                                        </span>
                                }

                            </div>
                        </div>
                    <div className="flex items-center justify-between my-5">
                        <div className="flex items-center space-x-2">
                            <Label>Role</Label>
                            <select
                                name="role"
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                                className="border border-gray-300 rounded-md px-2 py-1"
                            >
                                <option value="">Select Role</option>
                                <option value="student">Student</option>
                                <option value="recruiter">Recruiter</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <Label>Profile</Label>
                            <Input
                                accept="image/*"
                                type="file"
                                onChange={(e) => setCfile(e.target.files[0])}
                                className="cursor-pointer"
                            />
                        </div>
                    </div>
                    <Button type="submit" className="w-full my-4">
                        {loading ? "Please wait..." : "Signup"}
                    </Button>
                    <span className="text-sm">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600">
                            Login
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Signup;
