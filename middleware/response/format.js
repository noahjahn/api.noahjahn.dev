const Error = require('./error')

function Format (data = "", errors = null) {
    this.data = data;
    if (errors) {
        this.errors = errors;
    }

    this.setData = (data) => {
        this.data = data;
    };
    this.setErrors = (errors) => {
        this.errors = errors;
    };
    this.appendError = (error) => {
        if (error instanceof Error) {
            if (this.errors) {
                if (! Array.isArray(this.errors)) {
                    let tempError = this.errors;
                    this.errors = [];
                    this.errors.push(tempError);
                }
                this.errors.push(error);
            } else {
                this.errors = [];
                this.errors.push(error);
            }
        } else {
            throw TypeError(`Response.Error object expected; Type ${typeof error} received.`)
        }
    }
}

module.exports = Format;