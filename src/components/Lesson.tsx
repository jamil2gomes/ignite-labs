
import {CheckCircle, Lock} from 'phosphor-react';
import { format, isPast } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export default function Lesson(props:LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);

  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  return (
    <div>
      <a href="#">
        <span className="text-gray-300">{availableDateFormatted}</span>
        <div className="rounded border border-gray-500 p-4 mt-2">
          <header className="flex items-center justify-between">
            
           {
             isLessonAvailable ? (
              <span className='text-sm font-medium text-blue-500 flex items-center gap-2'>
              <CheckCircle size={20}/>
              Conteudo Liberado
            </span>
             ) :
             (
              <span className='text-sm font-medium text-orange-500 flex items-center gap-2'>
              <Lock size={20}/>
              Em breve
            </span>
             )
           }
            <span className="text-xs rounded px-2 py-[2px] text-white border border-green-300">
              {
                props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"
              }
            </span>

          </header>

          <strong className="block text-gray-200 mt-5">
            {props.title}
          </strong>
        </div>
      </a>
    </div>
  )
}
