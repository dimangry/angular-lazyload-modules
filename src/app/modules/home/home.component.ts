import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    items = [
        {name: 'Item 1'},
        {name: 'Item 2'},
        {name: 'Item 3'},
        {name: 'Item 4'},
        {name: 'Item 5'},
    ]

    constructor() {
    }

    ngOnInit() {
    }

}
