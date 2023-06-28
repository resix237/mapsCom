import Inpunt from '@/components/Inpunt';
import { useCallback, useState } from 'react';
import axios from 'axios';
import { signIn } from 'next-auth/react';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [variant, setVariant] = useState("login");

    const toggleVariant = useCallback(() => {
        setVariant((current) => current === "login" ? "register" : "login");
    }, [])

    const register = useCallback(async () => {
        try {
            await axios.post("/api/auth/register", {
                email,
                name,
                password
            });
        } catch (err) {
            console.log(err);
        }

    }, [email, name, password])
    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl: '/'
            });
        }
        catch (err) {
            console.log(err);
        }

    }, [email, password]);
    return (
        <div className="h-full w-full relative bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover bg-center  ">
            <div className="bg-black w-full h-full lg:bg-opacity-50  ">
                <nav className=' px-12 py-5 '>
                    <img src="/images/logo.png" alt="logo" className='h-12' />
                </nav>
                <div className="flex justify-center">
                    <div className=' bg-black bg-opacity-70 px-16 py-16 mt-2 self-center lg:w-2/5 lg:max-w-md rounded-none w-full '>
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === "login" ? "Sign in" : "Register"}

                        </h2>
                        <div className='flex flex-col gap-4'>
                            {variant === "register" && (
                                <Inpunt id="name" value={name} label="Username" onChange={(event: any) => setName(event.target.value)} />
                            )}
                            <Inpunt id="email" type="email" value={email} label="Email" onChange={(event: any) => setEmail(event.target.value)} />
                            <Inpunt id="password" type="password" value={password} label="Password" onChange={(event: any) => setPassword(event.target.value)} />
                        </div>
                        <button onClick={variant === "login" ? login : register} className=" bg-red-600 text-white py-3 rounded-md hover:bg-red-700 w-full mt-10 transition ">
                            {variant === "login" ? "Login" : "Sign up "}
                        </button>
                        <p className=' text-neutral-500 mt-12'>
                            {variant === "login" ? " First time using Netflix?" : "Already have an account"}
                            <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer '>
                                {variant === "login" ? "Create and account" : "Login"}
                            </span>

                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Auth;
