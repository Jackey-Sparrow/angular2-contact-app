/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {List} from './components/list/list';
import {Add} from './components/add/add';

import {Help} from './components/help/help';
import {FriendList} from './services/FriendList';

@Component({
    selector: 'app',
    viewInjector: [FriendList]
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
    constructor(){
        debugger;
    }
}


bootstrap(App, [routerInjectables]);
