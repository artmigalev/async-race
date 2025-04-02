import { Component } from "@/component/component";
import Option from "@/utils/option/option";
import Button from "@/utils/buttons/buttons";
import "./garage.scss";
import Input from "@/utils/input/input";
import App from "@/app/app";
import Winner from "../winners/winners";
import { carCreated } from "@/api/api";
import { setSpeed, UpdateCar } from "@/functions";

export default class Garage extends Component {
    menu;
    parent;
    countCar;
    containerOptions;
    constructor(parent: App) {
        super({ className: "garage" });
        this.parent = parent;
        this.menu = this.getMenu();
        this.countCar = this.setCount();

        this.containerOptions = this.getOptionContainer();

        this.appendChildren([this.menu, this.countCar, this.containerOptions]);
    }
    getMenu() {
        const parent = this.parent;
        const containerMenu = new Component({ className: "menu" });

        const inputCreate = new Input();
        const inputUpdate = new Input();
        const btnCreatedCar = new Button("Create", () => {
            const inputName = inputCreate.getNode()() as HTMLInputElement;
            const inputColor = createdCar
            .getChild()[1]
            .getNode()() as HTMLInputElement;

            if (inputName.value !== "") {
                const car = {
                    model: inputName.value,
                    color: inputColor.value,
                    id: this.containerOptions.getChild().length+1,
                    speed:setSpeed()
                };
                carCreated(this.containerOptions, car);
            }

        });
        const btnUpdateCar = new Button("Update", () =>
            UpdateCar(updateCar, this.containerOptions),
        );
        const garage = new Button("Garage", () => console.log("hi"));
        if (this instanceof Garage) {
            garage.setAttributes("disabled", "");
        }
        const winners = new Button("Winners", () => {
            parent.getView(new Winner());
        });
        const header = new Component(
            {
                className: "header-menu",
            },
            ...[garage, winners],
        );
        const createdCar = new Component(
            {
                className: "created-car container",
            },
            ...[inputCreate, new Input().getColorInput(), btnCreatedCar],
        );
        const updateCar = new Component(
            {
                className: "update-car container",
            },
            ...[inputUpdate, new Input().getColorInput(), btnUpdateCar],
        );
        const footer = new Component(
            {
                className: "footer-menu",
            },
            ...[createdCar, updateCar],
        );
        const containerBtns = this.getBtnsContainer();
        containerMenu.appendChildren([header, footer, containerBtns]);
        // containerMenu.addListener("click", createdModelCar);
        return containerMenu;
    }
    setCount(num = 1): Component {
        const counterText = "Cars in garage:";
        const counterComponent = new Component({
            tag: "h1",
            className: "counter-car",
        });
        counterComponent.setText(`${counterText} ${num}`);
        return counterComponent;
    }
    getOptionContainer() {
        const container = new Component({
            tag: "ul",
            className: "list-options",
        });
        


        const length = container.getChild().length;
        this.countCar = this.setCount(length);
        return container;
    }
    getBtnsContainer() {
        const btnAdd = new Button("Race");
        const btnReset = new Button("Reset");
        const btnGenerate = new Button("Generate Cars");
        const btnsContainer = new Component(
            {
                className: "btns-container",
            },
            ...[btnAdd, btnReset, btnGenerate],
        );

        return btnsContainer;
    }
}
