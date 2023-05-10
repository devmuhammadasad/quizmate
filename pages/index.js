import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../components/Logo';
import HeroImage from '../public/hero.webp';

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative">
      <Image src={HeroImage} alt="Hero" fill className="absolute" />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm">
        <Logo />
        <p>
          Genera preguntas de examen de alta calidad en minutos con nuestra plataforma impulsada por la inteligencia artificial, que utiliza ChatGPT para generar preguntas en una variedad de temas y niveles de dificultad. ¡Regístrate ahora para mejorar la eficiencia y la calidad de tus exámenes!
        </p>
        <Link href="/post/new" className="btn text-left">
          Empezar
        </Link>
      </div>
    </div>
  );
}
