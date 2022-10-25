import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { FavoritePokemons } from '../../components/pokemon'
import { localFavorites } from '../../utils'

const FavoritesPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons)
  }, [])

  return (
    <Layout title="Pokemons -Favoritos">
      {favoritesPokemons.length === 0 ? <NoFavorites /> : <FavoritePokemons pokemons={favoritesPokemons} />}
    </Layout>
  )
}

export default FavoritesPage
