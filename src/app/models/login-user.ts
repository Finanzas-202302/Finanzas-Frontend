export class LoginUser {
    userEmail: string;
    userPassword: string;

    constructor(userEmail: string, userPassword: string) {
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }
}