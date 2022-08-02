import { useState, createContext, useContext, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState({
    signupError: '',
    loginError: '',
  });
  const navigate = useNavigate();

  const signup = (email, password) => {
    setError({ ...error, signupError: '' });
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate('/'))
      .catch((error) => {
        if (error.code === 'auth/weak-password') {
          setError({ ...error, signupError: 'Es muy corta' });
        } else {
          setError({ ...error, signupError: error.message });
        }
      });
  };

  const login = (email, password) => {
    setError({ ...error, loginError: '' });
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate('/'))
      .catch((error) => setError({ ...error, loginError: error.message }));
  };

  const logout = () => {
    signOut(auth);
    navigate('/login');
  };

  const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(() => navigate('/'))
      .catch((error) => console.log(error));
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(() => currentUser);
      setLoading(false);
    });
  }, []);

  return <AuthContext.Provider value={{ user, error, loading, signup, login, logout, googleLogin, resetPassword }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
