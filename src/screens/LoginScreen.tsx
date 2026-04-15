import React from 'react';
import '../index.css';
import { Button } from '../components/Button';
import { TextInput } from '../components/TextInput';

/**
 * LoginScreen Component
 * 
 * Pantalla de inicio de sesión premium basada en el diseño de Figma.
 * Utiliza los componentes base (TextInput, Button) para mantener la consistencia.
 */
export const LoginScreen: React.FC = () => {
  return (
    <div className="flex h-screen w-full bg-neutral-flat-white overflow-hidden">
      {/* Lado Izquierdo: Splash con imagen abstracta */}
      <div className="hidden lg:flex flex-1 relative items-center justify-center p-12 overflow-hidden bg-seidor-main">
        {/* Imagen generada como fondo */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")' }}
        />
        
        {/* Elementos decorativos (Light beams) */}
        <div className="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] bg-blue-400/20 blur-[120px] rounded-full rotate-45 transform" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[100%] h-[100%] bg-indigo-900/40 blur-[150px] rounded-full -rotate-12 transform" />

        {/* Contenido Splash */}
        <div className="relative z-10 flex flex-col items-center text-center text-white max-w-lg">
           <div className="w-24 h-24 mb-8 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
              <div className="w-12 h-12 bg-white rounded-full animate-pulse shadow-[0_0_30px_rgba(255,255,255,0.5)]" />
           </div>
           <h1 className="font-poppins font-extrabold text-[40px] leading-tight mb-4 tracking-tight drop-shadow-lg">
             Bienvenido a la Experiencia Caral
           </h1>
           <p className="font-poppins text-lg opacity-80 font-medium">
             Gestione sus proyectos con la precisión de Analytics y la elegancia de nuestro sistema de diseño.
           </p>
        </div>
      </div>

      {/* Lado Derecho: Formulario de Login */}
      <div className="flex-[0.8] lg:flex-[1] xl:flex-[0.7] bg-neutral-body flex flex-col items-center justify-center px-6 sm:px-12 py-12">
        <div className="w-full max-w-[509px] flex flex-col gap-10">
          
          {/* Logo y Encabezado */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-seidor-main rounded-lg flex items-center justify-center shadow-lg transform -rotate-12">
                <div className="w-6 h-6 bg-white rounded-sm" />
              </div>
              <h2 className="font-poppins font-extrabold text-[48px] text-neutral-900 tracking-tight leading-none">
                Log in
              </h2>
            </div>
            
            <div className="flex items-center gap-2 font-poppins text-p">
              <span className="text-neutral-800">¿No tienes una cuenta?</span>
              <a href="#" className="font-semibold text-info-main hover:underline transition-all">
                Crea una ahora
              </a>
            </div>
          </div>

          {/* Formulario */}
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-5">
              <TextInput 
                label="Usuario o Email" 
                placeholder="usuario@empresa.com"
                className="w-full"
              />
              <div className="flex flex-col gap-2">
                <TextInput 
                  label="Contraseña" 
                  type="password"
                  placeholder="********"
                  className="w-full"
                />
                <div className="flex justify-end">
                  <a href="#" className="font-poppins text-small text-info-main hover:underline">
                    ¿Olvidaste tu cuenta?
                  </a>
                </div>
              </div>
            </div>

            <Button 
              className="h-[52px] w-full text-lg shadow-xl shadow-seidor-main/20 mt-4"
              onClick={() => {}}
            >
              Iniciar Sesión
            </Button>
          </form>

          {/* Footer de la pantalla */}
          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="w-full h-px bg-neutral-800/10" />
            <p className="font-poppins text-small text-neutral-800 text-center">
              Al continuar en el sitio usted acepta nuestra{' '}
              <a href="#" className="font-semibold text-info-main hover:underline">
                Política de Privacidad
              </a>
            </p>
            
            {/* Logo de Seidor Analytics Bottom */}
            <div className="mt-4 flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 cursor-default">
              <span className="font-poppins font-black text-xl italic text-seidor-main">SEIDOR</span>
              <span className="font-poppins font-light text-xl tracking-widest uppercase">ANALYTICS</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
