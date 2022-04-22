class User{
    id = null;
    username = null;
    password = null;
    role = "joueur"

    constructor(id, username, password, role){
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
    }
}

export class PlayerModel extends User{
    score = 0;
    constructor(id, username, password, score){
        super(id, username, password);
        this.score = score;
    }
}

export class AdminModel extends User{
    constructor(id, username, password){
        super(id, username, password);
    }
}