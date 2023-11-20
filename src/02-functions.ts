import {Friend, Colleague } from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(friends: Friend[]) : string[] {
    return friends.map(f =>  `${f.name} is now ${f.age + 1}`)
}

function highestExtension(colleagues: Colleague[]): Colleague {
    const result = colleagues.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[colleagues.length - 1];
}

function addColleague(
    colleagues: Colleague[],
    name: string,
    department: string,
    email: string
    ) {
    const newColleague: Colleague = {
        name,
        department,
        contact: {
        email,
        extension: highestExtension(colleagues).contact.extension + 1,
        },
    };
    colleagues.push(newColleague);
}
 
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

console.log(older(friends[0]))
console.log(allOlder(friends))
console.log(highestExtension(colleagues.current));
