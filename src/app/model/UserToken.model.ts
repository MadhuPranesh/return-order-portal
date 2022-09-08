export class UserToken {
    public userName: string;
    public token: string;
  
    constructor(userName: string, token: string) {
      (this.userName = userName), (this.token = token);
    }
  }
  