import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Create Opearator';
  
   
ngOnInit() {
 
  //Observable from Create Method
  const obsUsingCreate = Observable.create( (observer:any) => {
    observer.next( '1' )
    observer.next( '2' )
    observer.next( '3' )

    observer.complete();
  })
  
   obsUsingCreate
     .subscribe((val:any) => console.log(val),
             (error:any) => console.log(error),
             () => console.log("complete"))
}

}
