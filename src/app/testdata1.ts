import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
    createDb() {
        let bookDetails = [
            {id:101,firstName:'meet',lastName:'rathod',class:"10th",age:16},
            {id:102,firstName:'kayur',lastName:'rathod',class:"8th",age:13},
            {id:103,firstName:'om',lastName:'rathod',class:"12th",age:19},
            {id:104,firstName:'utsav',lastName:'hirpara',class:"3th",age:6},
            {id:103,firstName:'raj',lastName:'rathod',class:"11th",age:18},
            {id:103,firstName:'shivam',lastName:'hirpara',class:"9th",age:14},
            {id:103,firstName:'virang',lastName:'rathod',class:"11th",age:18},
            {id:103,firstName:'parth',lastName:'rathod',class:"11th",age:16},
            {id:103,firstName:'mohit',lastName:'rathod',class:"10th",age:18},
            {id:103,firstName:'dev',lastName:'rathod',class:"6th",age:12},
            {id:103,firstName:'satish',lastName:'rathod',class:"12th",age:24}
        ];
        return {books:bookDetails};
    }
}