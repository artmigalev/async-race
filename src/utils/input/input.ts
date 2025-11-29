import { Component } from "@/component/component";
import "./input.scss";
const input = {
    tag: "input",
    className: "input",
};

export default class Input extends Component {
    constructor() {
        super(input);
    }
    getColorInput() {
        const colorInput = new Component({
            tag: "input",
            className: "color-input",
        });
        colorInput.setAttributes("type", "color");
        colorInput.setAttributes("value", "#0000");
        return colorInput;
    }
}
