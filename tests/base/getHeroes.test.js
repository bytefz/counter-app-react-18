import { heroes } from "../data/heroes";
import { getHeroById, getHeroesByOwner } from "../src/functions/getHeroes";

describe('Pruebas en getHeroes', () => {

    test('getHeroeByI debe retornar un heroe por Id', () => {

        const id = 1;
        const hero = getHeroById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })

    });

    test('getHeroeByI debe retornar undefined si no existe', () => {

        const id = 100;
        const hero = getHeroById(id);

        expect(hero).toBeFalsy();

    });

    test('getHeroesByOwner debe retornar los heroes de DC', () => {

        const owner = 'DC';
        const hero = getHeroesByOwner(owner);

        expect(heroes.length).toBe(3);
        expect(heroes).toEqual([{
            id: 1, name: 'Batman', owner: 'DC',
        },
        {
            id: 3, name: 'Superman', owner: 'DC',
        },
        {
            id: 4, name: 'Flash', owner: 'DC',
        },
        ]);

        expect(heroes).toEqual(heroes.filter(hero => {
            hero.owner === owner
        }))

    });

})
