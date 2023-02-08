import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { UserServiceService } from "../service/user-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  myObservable = of(1, 2, 3);
  public userData: any = [];
  constructor(private service: UserServiceService,private route : ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('auth')
    console.log(id);
    
    // const myObservable = of(1, 2, 3);

    // const myObserver = {
    //   next: (x: number) => console.log("Observer got a next value: " + x),
    //   error: (err: Error) => console.error("Observer got an error: " + err),
    //   complete: () => console.log("Observer got a complete notification"),
    // };

    // myObservable.subscribe(myObserver);

    const obs = new Observable((obj) =>{ obj.next(Math.random()),
      obj.error(console.error("Observer got an error",obj.error)),
      obj.complete()
    });
    console.log("Observable");
    obs.subscribe((d) => console.log(d));
    obs.subscribe((d) => console.log(d));

    const sub = new Subject();
    console.log("subject");
    sub.subscribe((d) => console.log(d));
    sub.subscribe((d) => console.log(d));
    sub.next(Math.random());
    sub.error(console.error("subject got an error"))

    const bsub = new BehaviorSubject(12);

    console.log("behaviour subject");
    bsub.subscribe((d) => console.log(d));

    bsub.next(200);
    console.log("behaviour subject2");
    bsub.subscribe((d) => console.log(d));
  }
}
