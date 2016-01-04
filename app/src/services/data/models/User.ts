interface iUser {
  name: string;
  email: string;
  username?: string;
  password: string;
}

export class User implements iUser {
  name:string;
  email:string;
  username:string;
  password:string;

  constructor(obj:iUser) {

  }
}
