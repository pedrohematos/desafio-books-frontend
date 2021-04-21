import axios from "axios";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [storageUser, setStorageUser, removeStorageUser] = useLocalStorage(
    "@authApp: user"
  );
  const [storageToken, setStorageToken, removeStorageToken] = useLocalStorage(
    "@authApp: token"
  );

  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState(false);

  const [auth, setAuth] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (storageUser && storageToken) {
      setAuth(storageUser);
      setToken(storageToken);
    }
  }, []);

  const signIn = async (authData) => {
    axios
      .post("https://books.ioasys.com.br/api/v1/auth/sign-in", authData)
      .then((response) => {
        if (response.data) {
          setAuth(response.data);
          setStorageUser(response.data);
          setStorageToken(response.headers.authorization);
          setToken(response.headers.authorization);
          setAuthError(false);
          setLoading(false);
        }
      })
      .catch((error) => {
        if (error) {
          setAuthError(true);
          setLoading(false);
        }
      });
  };

  const signOut = useCallback(() => {
    removeStorageToken();
    removeStorageUser();
    setAuth(null);
    setToken(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!auth,
        auth,
        token,
        setAuth,
        signIn,
        signOut,
        loading,
        setLoading,
        authError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
