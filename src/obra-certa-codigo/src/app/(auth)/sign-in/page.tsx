'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (email === 'obracerta@email.com' && senha === '123456') {
      setErro('');

      localStorage.setItem('usuarioLogado', JSON.stringify({ email }));

      router.push('/dashboard');
    } else {
      setErro('Email ou senha incorretos.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="flex w-full max-w-4xl rounded-lg shadow-lg bg-card border border-border overflow-hidden">
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6 text-center">Bem vindo de volta!</h1>

          <div className="space-y-4">
            <h2>Email</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <h2>Senha</h2>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <h3 className="text-sm text-black hover:underline cursor-pointer mt-2">
              Esqueceu sua senha? Clique aqui!
            </h3>

            {erro && (
              <p className="text-destructive text-sm font-medium">{erro}</p>
            )}

            <Button
              variant="default"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition"
              onClick={handleLogin}
            >
              Entrar
            </Button>
          </div>
        </div>

      
        <div className="w-1/2 bg-gray-200">
        
         <img
         src="/obracerta_v3_1.svg"
         alt="Logo Obra Certa"
         className="w-full h-full object-contain p-8"
         />

         
        </div>
      </div>
    </div>
  );
}



