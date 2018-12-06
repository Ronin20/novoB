import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  
  ngOnInit(): void {
    var config = {
      apiKey: "AIzaSyDH9FxklAvhOu2QsK4TT67OfJd328zUH_c",
      authDomain: "plano-b-d8111.firebaseapp.com",
      databaseURL: "https://plano-b-d8111.firebaseio.com",
      projectId: "plano-b-d8111",
      storageBucket: "plano-b-d8111.appspot.com",
      messagingSenderId: "307828593601"
    };
    firebase.initializeApp(config)
  }
  
  title = 'planoB';
}
