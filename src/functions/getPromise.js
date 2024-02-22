import { getHeroById } from './getHeroes';


export const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroById(id);
            (p1) ? resolve(p1) : reject('No se pudo encontrar el héore');
        }, 1000);
    })
}
