import {Component, View, NgFor} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {FriendList} from '../../services/FriendList';

@Component({
    selector: 'component-1'
})
@View({
    templateUrl: './components/list/list.html?v=<%= VERSION %>',
    directives: [RouterLink, NgFor]
})
export class List {
    constructor(public list:FriendList){
    }
}
