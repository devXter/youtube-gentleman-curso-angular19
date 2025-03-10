// Qués es Typescript: Es Javascript con esteroides
// Javascript tiene tipos? => Sí, pero tiene tipado dinámico esto para poder optimizar la ejecución de javascript
// Typescript tiene tipado estrícto

// Primitivos string | boolean | number

// Interface
// funciona como un contrato que no se puede romper

// La diferencia entre una clase y una interfaz es que la interfaz no puede tener lógica.
interface User {
    name: string;
    getName: () => string;
    setName: (name: string) => void;
}

class UserClass {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
       this.name = name;
    }
}


const user: User = {
    name: 'en-blanco',
    getName: (): string => {return 'Pepe'},
    setName: (name: string) => {}
}

const userClass: UserClass = new UserClass('Fran');

interface Alumno {
    lejago: string;
}

type UserType = User & Alumno;



