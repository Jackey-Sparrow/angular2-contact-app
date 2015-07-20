import {Component, View, NgFor} from 'angular2/angular2';

import {FriendList} from '../../services/FriendList';

@Component({
    selector: 'component-2'
})
@View({
    templateUrl: './components/add/add.html?v=<%= VERSION %>',
    directives: [NgFor]
})
export class Add {
    constructor(public list:FriendList) {
        //todo: validate the form
    }

    addFriend(firstname, lastname, age) {
        var friend = {
            firstName: firstname.value,
            lastName: lastname.value,
            age: age.value
        };
        this.list.add(friend);
        firstname.value = '';
    }
}