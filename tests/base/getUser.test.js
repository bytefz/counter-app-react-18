import { getUser, getUsuarioActivo } from "../src/functions/getUser"

describe('Test getUser', () => {

    test('getFunction has to return an Object', () => { 
        
        const valueToGet = {
            uid: 'ABC123',
            username: 'Hola'
        };
        const user = getUser();

        expect(valueToGet).toEqual(user);

    })


    test('getUsuarioActivo has to return an Object', () => { 
        
        const name = "Franzua";

        const valueToGet = {
            uid: 'ABC123',
            username: name
        };

        const user = getUsuarioActivo(name);

        //* Se usa con Objects
        expect(valueToGet).toEqual(user);

    })

})
