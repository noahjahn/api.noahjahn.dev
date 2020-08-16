function Error (property = null, error, message = null) {
    if (property) {
        this.property = property;
    }
    if (error) {
        this.error = error;
    }
    if (message) {
        this.message = message;
    }
}

module.exports = Error;