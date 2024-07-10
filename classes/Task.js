const models = require("../models");

class Task {

    constructor(data) {
        this.id = data.id || null;
        this.title = data.title;
        this.description = data.description || null;
        this.date = data.date;
        this.isCompleted = data.isCompleted || false;
        this.isImportant = data.isImportant || false;
        this.createdAt = data.createdAt || new Date().toISOString();
        this.updatedAt = data.updatedAt || new Date().toISOString();
        this.userId = data.userId;
    }

    async createTask(data) {
        return models.Task.addTask(data);
    }

    async updateTaskStatus(data) {
        return models.Task.updateTaskStatus(data);
    }

    async updateTaskImportance(data) {
        return models.Task.updateTaskImportance(data);
    }

    async fetchAllTasks() {
        return models.Task.fetchAllTasks();
    }

    async deleteTask(id) {
        return models.Task.deleteTaskById(id);
    }

}

module.exports = Task;
