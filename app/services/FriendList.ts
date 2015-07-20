export class FriendList {
    Friends = [
        {
            firstName: 'Jackey1',
            lastName: 'Li',
            age: 25
        }
    ];

    get() {
        return this.Friends;
    }

    add(value:Object) {
        this.Friends.push(value);
    }
}
