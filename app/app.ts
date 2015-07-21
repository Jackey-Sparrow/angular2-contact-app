/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';
import {httpInjectables, Http} from 'angular2/http';
import {Inject} from 'angular2/di';

import {List} from './components/list/list';
import {Add} from './components/add/add';

import {Help} from './components/help/help';
import {FriendList} from './services/FriendList';

@Component({
    selector: 'app',
    viewInjector: [FriendList, httpInjectables]
})
@RouteConfig([
    {path: '/', component: List, as: 'list'},
    {path: '/about', component: Add, as: 'add'},
    {path: '/help', component: Help, as: 'help'}
])
@View({
    templateUrl: './app.html?v=<%= VERSION %>',
    directives: [RouterOutlet, RouterLink]
})
class App {
    http:Http;
    status:int;

    constructor(@Inject(Http) http) {
        this.http = http;

        //this.http.request('data/test.json').observer(res => this.dataList = res.json());
        this.http.get('css/test.json').toRx().subscribe((res:Response) => {
            this.status = res.status;
        });
    }
}


bootstrap(App, [routerInjectables, httpInjectables]);
