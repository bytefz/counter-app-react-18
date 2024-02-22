import { getSaludo } from "../src/functions/getName";

describe('Pruebas template-string', () => { 
    test('getSaludo debe retornar "Hola Fernando"', () => { 
        
        const name = "Fernando";
        const message = getSaludo(name)

        expect(message).toBe(`Hola ${name}`);

     })
 })
