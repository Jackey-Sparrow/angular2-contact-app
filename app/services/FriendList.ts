export class FriendList {
    Friends = [
        {
            id: 1,
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

    getNextFriendId() {
        var result = 1, len = this.Friends.length;
        if (!len) {
            return result;
        }
        for (var i = 0; i < len; i++) {
            var friend = this.Friends[i];
            if (friend.id > result) {
                result = friend.id;
            }
        }
        return result + 1;
    }

    delete(friend) {
        var len = this.Friends.length,
            index = this.Friends.indexOf(friend);
        if (index !== -1) {
            this.Friends.splice(index, 1);
        }
    }
}
