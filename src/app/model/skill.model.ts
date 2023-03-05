export class Skill {
    id?: number;
    name: string;
    percentage: string;
    img: string;

    constructor (name: string, percentage: string, img: string) {
        this.name = name;
        this.percentage = percentage;
        this.img = img;
    }
}