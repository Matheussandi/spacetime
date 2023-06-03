import Image from 'next/image'
import Logo from '../assets/spacetime-logo.svg'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="my-3 space-y-5 md:my-0">
      <Image src={Logo} alt="NLW Spacetime" />

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-xl font-bold leading-tight text-gray-50 lg:text-5xl">
          Sua cápsula do tempo
        </h1>
        <p className="text-md leading-relaxed lg:text-lg">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      <Link
        className="inline-block rounded-full bg-green-500 px-5 py-3 text-center font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
        href="/memories/new"
      >
        CADASTRAR LEMBRANÇA
      </Link>
    </div>
  )
}
