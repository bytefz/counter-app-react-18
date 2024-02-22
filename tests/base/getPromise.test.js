import { getHeroByIdAsync } from "../src/functions/getPromise";

describe('Pruebas en Promesas', () => { 
    
    test('getHeroByIdAsync debe retornar un heroe', (done) => { 

        const id = 1;
        getHeroByIdAsync(id)
            .then( hero =>{
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC',
                    
                })
                done();
            })

    });

    test('getHeroByIdAsync debe retornar un error si heroe no existe', (done) => { 

        const id = 100;
        getHeroByIdAsync(id)
            .catch( err => {
                expect(err).toBe(`No se pudo encontrar el héore`)
                done();
            });

     });
 })

