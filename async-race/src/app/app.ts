import { Component } from "@/component/component";
import "./app.scss";
import Garage from "@/pages/garage/garage";
export default class App extends Component {
  constructor() {
    super({ tag: "div", className: "app" });
    const garage =new Garage();
    this.append(garage)
    document.body.append(this.getNode()());
  }

  getView() {}
}
