function queryDB(tx) {
    tx.executeSql('SELECT * FROM MEMBER', [], querySuccess, errorCB);
}

function querySuccess(tx, results) {
    alert("Returned rows = " + results.rows.length);
    // this will be true since it was a select statement and so rowsAffected was 0
    if (!results.rowsAffected) {
        alert('No rows affected!');
        return false;
    }
    // for an insert statement, this property will return the ID of the last inserted row
    alert("Last inserted row ID = " + results.insertId);
}

function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}

var db = window.openDatabase("Database", "1.0", "Membery, 200000);
db.transaction(queryDB, errorCB);