import { Component } from "@/component/component";
import "./buttons.scss";
const btn = {
    tag: "button",
    className: "button",
};
export default class Button extends Component {
    constructor(text: string, clk: () => void) {
        super(btn);
        this.setText(text);
        this.addListener("click", clk);
    }
}
