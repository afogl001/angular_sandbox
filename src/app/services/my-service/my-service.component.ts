import { Component, OnInit } from '@angular/core';
import { MyService } from './my-service.service';  // Need to import your service

@Component({
  selector: 'app-services',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.css'],
  providers: [MyService] // Need to add your service as a provider
})
export class MyServiceComponent implements OnInit {

  answer: String = "If only we knew!";

  constructor(private myService: MyService) { }
  // "Name" (myService) can be anything you want
  // "Type" (MyService) must be imported class (and what's set in the "providers" portion of @Component)

  ngOnInit(): void {
    this.answer = this.myService.answerQuestion("Why do bad things happen to good people?");
  }

}
