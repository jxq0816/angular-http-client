import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data: any;
  title = 'app';
  constructor(private _http: Http) {
  }
  ngOnInit(): void {
    this.data = this._http.get('de/control/test')
      .subscribe(data => {
        this.data = data;
        console.log(this.data._body);
      });
  }
}
