
import { heroes } from '../../data/heroes';

export const getHeroById = (id) => heroes.find(heroe =>
    heroe.id = id
)

export const getHeroesByOwner = (owner) => heroes.filter(hero => hero.owner)
