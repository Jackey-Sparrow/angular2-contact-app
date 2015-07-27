import {Component, View, NgFor} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';
import {FriendList} from '../../services/FriendList';
import {formDirectives,Control} from 'angular2/forms';

@Component({
    selector: 'component-1'
})
@View({
    templateUrl: './components/list/list.html?v=<%= VERSION %>',
    directives: [RouterLink, NgFor, formDirectives]
})
export class List {
    friend:Object;
    action:Object;
    addOrUpdate:string;

    constructor(public friendService:FriendList) {
        //default friend
        this.resetFriend();

        //action type
        this.action = {
            add: 'Add',
            update: 'Update'
        };
        //default action string is add
        this.addOrUpdate = this.action.add;
    }

    onSelect(friend) {
        this.friend = friend;
        this.addOrUpdate = this.action.update;
    }

    onAddOrUpdate() {
        switch (this.addOrUpdate) {
            case this.action.add:
                console.log(this.friend);
                this.friend.id = this.friendService.getNextFriendId();
                this.friendService.add(this.friend);
                console.log(this.friendService.get());
                this.resetFriend();
                break;
            case this.action.update:
                //console.log(this.friend);
                //do nothing, two way binding
                break;
            default:

                break;
        }
    }

    onDelete(friend) {
        this.friendService.delete(friend);
    }

    onClear() {
        this.addOrUpdate = this.action.add;
        this.resetFriend();
    }

    resetFriend() {
        this.friend = {
            id: '',
            firstName: '',
            lastName: '',
            age: ''
        };
    }
}
