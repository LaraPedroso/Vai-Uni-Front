import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, } = useForm();
  const onSubmit = data => console.log(data);

  return (
      <>
        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
        </div>
      </>
  );
}