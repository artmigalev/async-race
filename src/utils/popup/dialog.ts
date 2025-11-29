import { Component, Nodes } from "@/component/component";

import "./dialog.scss";

const dialog: Nodes = {
    tag: "dialog",
    className: "dialog",
};
type winner = {
    model: string;
    color: string;
    id: number;
    speed: number;
};

export default class Popup extends Component {
    popup;
    constructor(winner: winner) {
        super(dialog);
        this.popup = this.getView(winner);
    }
    getView(win: winner) {
        const body = new Component({ className: "popup-body" });
        const text = new Component({ tag: "h2", className: "popup-text" });
        text.setText(`Winner !!!!!!!! \n ${win.model} ${win.speed}`);
        body.append(text);
        this.append(body);
    }
}
