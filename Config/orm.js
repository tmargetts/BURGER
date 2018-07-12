var connection = require('./connection.js');


// Create helper function to generate syntax for MySQL ?
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// Create helper function to generate syntax for MySQL =
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}

// Create ORM to run query to burgers_db
var orm = {
    // Function that returns all table entries
    selectAll: function(tableInput, cb) {
        // Create query string to SELECT * FROM database table
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
                cb(result);
        });
    },

    // insertOne will insert table entry
    insertOne: function(table, cols, vals, cb) {
        // Query string that inserts a single row into the table
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // updateOne will update table entry
    updateOne: function(table, objColVals, condition, cb) {
        // Query string that updates a single entry in the table
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;