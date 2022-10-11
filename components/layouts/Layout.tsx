import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui/Navbar'

type Props = {
  children?: React.ReactNode
  title?: string
}
export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name="autor" content="Julian Herrera" />
        <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
        <meta name="keywords " content={` ${title} ,pokemos,pokedex`} />
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
