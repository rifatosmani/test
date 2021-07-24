const Pool = require("pg").Pool;

const pool = new Pool({
    user:"vxlxzmggsrfsuv",
    password:"60ea6fca19341abf9357952a08b668cc190da8340cac9f56f7e61e2338db8ac4",
    database:"d7k66n69k9l1vf",
    host:"ec2-54-195-246-55.eu-west-1.compute.amazonaws.com",
    port:5432,

    ssl: {require:true,
        rejectUnauthorized: false
      }
});

module.exports=pool;