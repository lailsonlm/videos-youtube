import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

interface CardPostProps {
  title: string;
  subtitle: string;
  author: string;
  createdAt: string;
  urlImage: string;
  slug: string;
}

export function CardPost({ author, createdAt, subtitle, title, urlImage, slug }: CardPostProps) {
  return (
    <Link 
      href={`/post/${slug}`}
      className="w-full sm:max-w-[352px] h-full flex flex-col items-center justify-between gap-2 sm:gap-4 hover:brightness-75 transition-all"
    >
      <div className='flex w-full h-[200px] sm:h-[234px] relative rounded-2xl overflow-hidden'>
        <Image 
          src={urlImage}
          alt=""
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className='flex w-full flex-1 flex-col justify-between gap-1 sm:gap-2'>
        <h1 className='font-bold text-lg sm:text-xl text-blue-600'>{title}</h1>
        <p className='text-zinc-600 hidden md:flex flex-1 text-justify lg:text-left text-sm'>{subtitle}</p>

        <div>
          <p className='font-bold text-zinc-900 text-sm md:text-base'>{author}</p>
          <p className='text-zinc-600 text-xs md:text-sm'>{format(new Date(createdAt), "dd 'de' MMM 'de' yyyy", { locale: ptBR })}</p>
        </div>
      </div>
    </Link>
  )
}