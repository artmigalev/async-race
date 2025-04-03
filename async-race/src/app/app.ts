import { Component } from "@/component/component";
import "./app.scss";
import Garage from "@/pages/garage/garage";
import Popup from "@/utils/popup/dialog";
export default class App extends Component {
    popup
    constructor() {
        super({ tag: "div", className: "app" });
        this.popup = new Popup()
        const garage = new Garage(this);
        this.append(garage);
        this.append(this.popup);
        document.body.append(this.getNode()());
    }

    getView(page: Component) {
        this.removeChildren();
        this.append(page);
    }
}
