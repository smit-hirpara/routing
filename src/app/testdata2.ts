import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

export class TestData2 implements InMemoryDbService {
    constructor() { } // 1
    createDb() {
        let studentdetails = [
            { id: 105, firstname: 'dev', lastname: 'rathod', class: '7th', age: 9 },
            { id: 106, firstname: 'virang', lastname: 'rathod', class: '10th', age: 15 },
            { id: 107, firstname: 'meet', lastname: 'rathod', class: '10th', age: 17 },
            { id: 108, firstname: 'om', lastname: 'rathod', class: '12th', age: 22 },
            { id: 109, firstname: 'kayur', lastname: 'rathod', class: '7th', age: 13 },
            { id: 110, firstname: 'raj', lastname: 'rathod', class: '11th', age: 19 },
            { id: 111, firstname: 'utsav', lastname: 'hirpara', class: '2th', age: 6 },
        ];
        let bookDetail = [
            { id: 101, name: 'Angular', owner: 'Google', category: 'ANG', country: 'U.S.A.', email: 'google@gmail.com', mobile: 9988774455 },
            { id: 102, name: 'JavaScript', owner: 'Brendan Eich', category: 'JS', country: 'Japan', email: 'JavaScript@gmail.com', mobile: 4433221100 },
            { id: 103, name: 'DotNet', owner: 'Guido van Rossum', category: 'MVC', country: 'Norve', email: 'DotNet@gmail.com', mobile: 88776655444 },
            { id: 104, name: 'Python', owner: 'Guido van Rossum', category: 'py', country: 'China', email: 'Python@gmail.com', mobile: 6655441122 },
            { id: 105, name: 'Rubby', owner: 'Yukihiro Matsumoto', category: 'RB', country: 'Korea', email: 'Rubby@gmail.com', mobile: 5544332211 },
            { id: 106, name: 'Node', owner: 'Bryan Cantrill', category: 'Node', country: 'Australia', email: 'Node@gmail.com', mobile: 4433221100 },
            { id: 107, name: 'php', owner: 'Rasmus Lerdorf', category: 'PHP', country: 'Brazil', email: 'php@gmail.com', mobile: 3322110099 },
            { id: 108, name: 'Laravel', owner: 'Taylor Otwell', category: 'LRVL', country: 'Dubai', email: 'Laravel@gmail.com', mobile: 2211009988 },
            { id: 109, name: 'React', owner: 'Jordan Walke', category: 'RCT', country: 'Russia', email: 'React@gmail.com', mobile: 1100998877 },
            { id: 110, name: 'ExpressJS', owner: 'Strongloop', category: 'EJS', country: 'London', email: 'ExpressJS@gmail.com', mobile: 9517538520 },
        ];
        let userssetails = [
            { id:1, firstname:'ABC', lastname:'abc', class:'5th', age:10}
        ];
        return { books: bookDetail,students: studentdetails, users: userssetails };
    }
}
// import { InMemoryDbService } from 'angular-in-memory-web-api';

// export class TestData2 implements InMemoryDbService {

//   constructor() { }

//   createDb() {
//     let bookDetail = [
//       { id: 101, name: 'Angular', owner: 'Google', category: 'ANG', country: 'U.S.A.', email: 'google@gmail.com', mobile: 9988774455 },
//       { id: 102, name: 'JavaScript', owner: 'Brendan Eich', category: 'JS', country: 'Japan', email: 'JavaScript@gmail.com', mobile: 4433221100 },
//       { id: 103, name: 'DotNet', owner: 'Guido van Rossum', category: 'MVC', country: 'Norve', email: 'DotNet@gmail.com', mobile: 88776655444 },
//       { id: 104, name: 'Python', owner: 'Guido van Rossum', category: 'py', country: 'China', email: 'Python@gmail.com', mobile: 6655441122 },
//       { id: 105, name: 'Rubby', owner: 'Yukihiro Matsumoto', category: 'RB', country: 'Korea', email: 'Rubby@gmail.com', mobile: 5544332211 },
//       { id: 106, name: 'Node', owner: 'Bryan Cantrill', category: 'Node', country: 'Australia', email: 'Node@gmail.com', mobile: 4433221100 },
//       { id: 107, name: 'php', owner: 'Rasmus Lerdorf', category: 'PHP', country: 'Brazil', email: 'php@gmail.com', mobile: 3322110099 },
//       { id: 108, name: 'Laravel', owner: 'Taylor Otwell', category: 'LRVL', country: 'Dubai', email: 'Laravel@gmail.com', mobile: 2211009988 },
//       { id: 109, name: 'React', owner: 'Jordan Walke', category: 'RCT', country: 'Russia', email: 'React@gmail.com', mobile: 1100998877 },
//       { id: 110, name: 'ExpressJS', owner: 'Strongloop', category: 'EJS', country: 'London', email: 'ExpressJS@gmail.com', mobile: 9517538520 },
//     ];
//     return { books: bookDetail };
//   }

// }

export class Book {
  id?: number;
  name?: string;
  owner?: string;
  state?: string;
  constructor() { }
}