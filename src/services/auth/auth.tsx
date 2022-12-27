import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { _AxiosService } from "../config";
import { ILogin } from "./types";

interface AuthProviderProps {
  children: JSX.Element
}

interface AuthProviderValue {
  login(data: ILogin): void
}

const AuthContext = createContext({} as AuthProviderValue)

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate()

  const login = async (data: ILogin) => {
    try {
      const response = await _AxiosService.post('login', data)
      console.log(response)
      if (response.status === 200) {
        sessionStorage.setItem('token', response.data.data.token)
        navigate('/chat')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ login }}>
      {children}
    </AuthContext.Provider>
  )
}