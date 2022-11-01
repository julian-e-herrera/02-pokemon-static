import { pokeApi } from '../api'
import { Pokemon } from '../interfaces'

export const getPokemonInfo = async (nameOrId: string) => {

  try {
    
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)
    return {
      sprites: data.sprites,
      id: data.id,
      name: data.name,
    }
  } catch (error) {
    return null
  }

}
