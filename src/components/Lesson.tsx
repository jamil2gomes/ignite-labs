
import {CheckCircle, Lock} from 'phosphor-react';
import { format, isPast } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export default function Lesson(props:LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const {slug} =  useParams<{slug:string}>();

  const isActive = slug === props.slug;


  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  return (
    <div>
      <Link to={`/event/lesson/${props.slug}`}className="group">
        <span className="text-gray-300">{availableDateFormatted}</span>
        <div 
        className={
          classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500',{
           'bg-green-500': isActive
         })}
         >
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

          <strong className={
            classNames("block mt-5",{
              'text-white': isActive,
              'text-gray-200': !isActive
            })
          }>
            {props.title}
          </strong>
        </div>
      </Link>
    </div>
  )
}
