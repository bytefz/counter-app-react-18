import { retornaArreglo } from "../../src/functions/getArr"

describe('Pruebas gerArr', () => { 
    test('Debe Retornar un string y un número', () => { 
        
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC')
        expect(numbers).toBe(123);

        //* Para testear el tipo de dato
        expect(typeof letters).toBe("string");
        expect(typeof number).toBe("number");
        
        //* Para testear el tipo de dato
        expect(letters).toEqual(expect.any(String));
    })
 })
