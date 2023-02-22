import { single } from "rxjs";

export class Education {
    id?: number;
    name: string;
    institution: string;
    since: string;
    until: string;

    
    constructor (name: string, institution: string, since: string, until: string) {
        this.name = name;
        this.institution = institution;
        this.since = since;
        this.until = until;
    }
}