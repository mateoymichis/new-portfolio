export class Experience {
    id?: number;
    name: string;
    company: string;
    since: string;
    until: string;

    
    constructor (name: string, company: string, since: string, until: string) {
        this.name = name;
        this.company = company;
        this.since = since;
        this.until = until;
    }
}