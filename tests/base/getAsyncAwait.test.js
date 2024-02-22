import { getImage } from "../src/functions/getAsyncAwait"

describe('Pruebas Async Await', () => { 

    test('getImage debe retornar un URL de la imagen', async() => { 

        const url = await getImage();

        expect(typeof url).toBe('string');

    })

 })