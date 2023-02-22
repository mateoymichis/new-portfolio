export class Person {
    id?: number;
    name: string;
    lastname: string;
    profession: string;
    img: string;

    constructor (name: string, lastname: string, profession: string, img: string) {
        this.name = name;
        this.lastname = lastname;
        this.profession = profession;
        this.img = img;
    }
}