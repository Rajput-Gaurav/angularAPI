import { Component } from '@angular/core';
import { Saiyan } from './shared/saiyan';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SAIYAN DATA';

  // create a variable:
  Saiyandata :Saiyan[];

  // create a constructor and inject the service:
  constructor(private saiyanService : BookService){}

  // create ngOnInit method:
  ngOnInit(){
    // call the method in ngOnInit:
    this.getSaiyandata();
  }

  // create a functioin to get the data from service:
  getSaiyandata(){
    this.saiyanService.getSaiyanData()
    // use subscribe too get the response from observable:
    .subscribe(saiyans => this.Saiyandata = saiyans);
  }
}
