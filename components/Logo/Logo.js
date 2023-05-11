import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextSeo } from 'next-seo';

export const Logo = () => {
  return (
    <>
      <NextSeo
        title="QuizMate"
        description="QuizMate es un generador de preguntas para exámenes."
      />
      <div className="text-3xl text-center py-4 font-heading">
        QuizMate
        <FontAwesomeIcon icon={faBrain} className="text-2xl text-slate-400" />
      </div>
    </>    
  );
};
