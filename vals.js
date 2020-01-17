exports.fields = {
    hostname:  "remotemysql.com",
    username: "XzK89Sy4bz",
    password: "x278LLHytt",
    dbname: function(){
        return this.username;
    }
};