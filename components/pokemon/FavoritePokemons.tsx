import { Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon'

type Props = {
  pokemons: number[]
}

export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start" direction="row">
      {pokemons.map((id) => (
        <FavoriteCardPokemon key={id} pokemonId={id} />
      ))}
    </Grid.Container>
  )
}
