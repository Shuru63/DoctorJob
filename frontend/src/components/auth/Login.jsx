import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Login = () => {
    const [visible, setVisible] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState("");
    
    const { loading,user } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const submitHandler = async (e) => {
        e.preventDefault();
        if(!email || !password || !role){
            toast.error("fill all the required"); 
        }
        
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`api/v1/user/login`, { email, password, role }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    }
    useEffect(()=>{
        if(user){
            navigate("/");
        }
    },[])
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto margin-section '>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Login</h1>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="patel@gmail.com"
                        />
                    </div>

                    <div className='log-userpassword my-2 '>
                                <Label>Password</Label>
                            <Input type={visible ? 'password' : 'text'} placeholder='enter password' onChange={(e) => setPassword(e.target.value)} />
                            <div className='password-eye' onClick={() => setVisible((prev) => !prev)}>
                                {
                                    visible?
                                        <span class="material-symbols-outlined">
                                            visibility_off
                                        </span> : <span class="material-symbols-outlined">
                                            visibility
                                        </span>
                                }

                            </div>
                        </div>
                    <div className='flex items-center justify-between'>
                    <div className="flex items-center space-x-2">
                            <Label>Role</Label>
                            <select
                                name="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="border border-gray-300 rounded-md px-2 py-1"
                            >
                                <option value="">Select Role</option>
                                <option value="student">Student</option>
                                <option value="recruiter">Recruiter</option>
                            </select>
                        </div>
                    </div>
                    <Button type="submit" className="w-full my-4">
                        {loading ? "Please wait..." : "Signup"}
                    </Button>
                    <span className='text-sm'>Don't have an account? <Link to="/signup" className='text-blue-600'>Signup</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login