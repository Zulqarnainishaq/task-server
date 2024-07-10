const pool = require("../configurations/db_connection");

module.exports = {
    addTask: async function(data) {
        const sql = `INSERT INTO task (title, description, date, isCompleted, isImportant) 
                     VALUES (?, ?, ?, ?, ?);`;
        console.log(`addTask with sql ${sql} and data `);
        console.log(data);
        const res= await pool.query(sql, [
            data.title, 
            data.description, 
            data.date, 
            data.completed, 
            data.important, 
        ]);
        return res;
    },
    updateTaskStatus: async function(data) {
     const sql = `update task set isCompleted =${data.isCompleted} 
        where id = ${data.id};`;
        console.log(`updateTaskStatus with sql ${sql}`);
        const res = await pool.query(sql);
        return res;
    },
    updateTaskImportance: async function(data) {
        const sql = `update task set isImportant =${data.isImportant} 
        where id = ${data.id};`;
        console.log(`updateTaskImportance with sql ${sql}`);
        const res = await pool.query(sql);
        return res;
    },
    fetchAllTasks: async function() {
        const sql = `SELECT * FROM task`;
        console.log(`fetchAllTasks with sql ${sql}`);
        const res = await pool.query(sql);
        return res;
    },
    deleteTaskById: async function(id) {
        const sql = `delete from task where id = ${id}`;
        console.log(`deleteTaskById sql ${sql}`);
        const res = await pool.query(sql);
        return res;
    } 
};
