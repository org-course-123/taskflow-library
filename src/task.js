// Task management module
class Task {
    constructor(title, description) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.status = 'todo';
        this.createdAt = new Date();
	this.priority = 'medium';
    }

    /**
     * Sets task priority.
     * @param {string} priority - The new priority: 'low', 'medium', 'high', 'urgent'.
     * @returns {boolean} True if priority was set.
    */

    updateStatus(status) {
        const validStatuses = ['todo', 'in-progress', 'done'];
        if (validStatuses.includes(status)) {
            this.status = status;
        }
    }
    // Новый метод
    setPriority(priority) {
        const validPriorities = ['low', 'medium', 'high', 'urgent'];
        if (validPriorities.includes(priority)) {
            this.priority = priority;
            return true;
        }
        return false;
    }
}

module.exports = Task;
