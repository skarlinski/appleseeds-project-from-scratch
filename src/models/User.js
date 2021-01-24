class User{
    constructor(userObj) {
        this.fname = userObj.get('fname');
        this.lname = userObj.get('lname');
        this.email = userObj.get('email');
        this.id    = userObj.id;
        
    }
}
export default User;