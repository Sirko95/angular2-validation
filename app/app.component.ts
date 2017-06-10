import {Component} from '@angular/core';

export class User {
    email: string;
    password: string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {

    user: User = new User();

    addUser() {
        console.log(this.user);
    }
}