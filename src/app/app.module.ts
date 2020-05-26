import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// import the service:
import { BookService } from './services/book.service';

// import HttpClient:
import { HttpClientModule } from '@angular/common/http';

// import in-memory-web-api:
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './testdata';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
              BrowserModule,
              // import all the modules:
              HttpClientModule,
              InMemoryWebApiModule.forRoot(TestData)
           ],

  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
