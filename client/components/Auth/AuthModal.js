
import { useState, useEffect } from 'react';
import Link from "next/link";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useRouter } from "next/router";
import useRequest from "../../hooks/useRequest";

export default function AuthModal({ isOpen, onClose }) {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect(() => {
  //   setIsClient(true);
  //   console.log("se está montando el modal de autenticación");
  // }, [isOpen]);

  
  
  const { sendRequest, errors } = useRequest({
      url: "/api/users/signIn",
      method: "post",
      body: { email, password },
      onSuccess: () => {
          router.push("/");
      },
  });

  //if (!isOpen ) return null;

  const onSubmit = async (e) => {
        e.preventDefault();

        await sendRequest();
        setIsLogin(!isLogin);
        onClose(); // Close modal after login/signup
    };

  return (
    
    <Dialog open={isOpen} onClose={onClose} >
      {/* Modal Container */}
      <div className="modal-auth"> {/* //// importante  */}
      <div className="container">  
        <DialogPanel className="panel">
          <DialogTitle className="title">
            {isLogin ? 'Login to your account' : 'Create a new account'}
          </DialogTitle>

          <form className="form" onSubmit={onSubmit}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                className="input"
                
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="button" >
              {isLogin ? 'Sign up' : 'Login'}
            </button>

            <p className="toggleText">
              {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}                          
              <button className="toggleButton">
                {isLogin ? 'Sign up' : 'Login'}
              </button>              
            </p>
            {errors}
          </form>
        </DialogPanel>
      </div>
      </div>
    </Dialog>
  );
}

