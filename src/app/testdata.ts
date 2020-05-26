// import InMemoryDbService from angular web api:
import { InMemoryDbService } from 'angular-in-memory-web-api';

// create a class and implements on InMemoryDbService:
export class TestData implements InMemoryDbService {

    // create a mothod for generate api data:
    createDb(){
        
        let saiyanDetails =[

            {id :101, name: 'Goku', Form: 'UI'},
            {id :102, name: 'Vegeta', Form: 'SSG Blue'},
            {id :103, name: 'Beerus', Form: 'God of Destruction'},
            {id :104, name: 'Whis', Form: 'Angel'},
            {id :105, name: 'Gohan', Form: 'SSG'}
        ];

        // return the data:
        return {saiyans:saiyanDetails};
    }
}