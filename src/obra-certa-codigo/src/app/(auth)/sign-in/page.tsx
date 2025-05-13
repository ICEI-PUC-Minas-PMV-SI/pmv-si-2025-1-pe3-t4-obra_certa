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
      router.push('/dashboard');
    } else {
      setErro('Email ou senha incorretos.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-card border border-border">
        <h1 className="text-3xl font-bold mb-6 text-center">Acesso ao Sistema</h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full px-4 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary"
          />

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
    </div>
  );
}


