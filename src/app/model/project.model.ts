export class Project {
    id?: number;
    name: string;
    description: string;
    img: string;
    link: string;

    constructor (name: string, description: string, img: string, link: string) {
        this.name = name;
        this.description = description;
        this.img = img;
        this.link = link;
    }
}