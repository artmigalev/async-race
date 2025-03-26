import { Component } from "@/component/component";

export default class Button extends Component {
    constructor(text: string) {
        super({
            tag: "button",
            className: "button",
        });
        this.setText(text);
    }
}
