import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(friends: Friend[]) : string[] {
    return friends.map(f =>  `${f.name} is now ${f.age + 1}`)
}

function highestExtension(colleagues: Colleague[]) {
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

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
  
  function findFriends(friends: Friend[], invocation: (f: Friend) => boolean) : string[] {
    return friends.filter(invocation).map(f => f.name)
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");

console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));
console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
console.log(older(friends[0]))
console.log(allOlder(friends))
console.log(highestExtension(colleagues.current));
