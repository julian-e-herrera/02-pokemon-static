import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui/Navbar'

type Props = {
  children?: React.ReactNode
  title?: string
}

const origin = typeof window === 'undefined' ? '' : window.location.origin
export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name="autor" content="Julian Herrera" />
        <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
        <meta name="keywords " content={` ${title} ,pokemos,pokedex`} />

        <meta property="og:title" content={`Informacion sobre el pokemon ${title}`} />
        <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  )
}
