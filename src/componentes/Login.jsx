import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Login = ({ onLoginSuccess, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'a@gmail.com' && password === '1234') {
      onLoginSuccess();
    } else {
      toast.error('Credenciales incorrectas');
    }
  };

  return (
    <div className="fixed inset-0 !bg-black/80 flex items-center justify-center z-100">
      <div className="bg-slate-500 p-8 rounded-lg w-80">
        <button 
          onClick={onClose}
          className="float-right text-gray-500 !bg-orange-300 hover:text-gray-700 hover:!bg-yellow-500 rounded-full h-6 w-6 flex items-center justify-center"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-6 text-white">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded bg-slate-400 placeholder-gray-600"
              placeholder="ejemplo@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded bg-slate-400 placeholder-gray-600"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full !bg-orange-300 hover:!bg-yellow-500 text-black font-bold py-2 px-4 rounded transition-colors"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;