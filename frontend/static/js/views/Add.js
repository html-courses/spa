import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Add Post");
    }

    async getHtml() {
        return `
            <h1>Add Post</h1>
            <p>You are viewing the posts!</p>
        `;
    }
}