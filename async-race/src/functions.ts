import { Component } from "./component/component";
import Option from "./utils/option/option";
import Popup from "./utils/popup/dialog";
interface UpdateCarParams {
    getChild(): Array<{ getNode(): () => HTMLInputElement }>;
}

interface GarageComponent extends Component {
    getChild(): Option[];
}

export function UpdateCar(
    params: UpdateCarParams,
    garage: GarageComponent | Component,
): void {
    const arrCars = garage.getChild() as Option[];
    const car = arrCars.find((car) => car.carSelect === true);
    if (!car) return;

    const name = params.getChild()[0].getNode()() as HTMLInputElement;
    const color = params.getChild()[1].getNode()() as HTMLInputElement;

    if (name.value !== "") {
        const titleCar = car.getChild()[0].getChild()[2];
        titleCar.getNode()().textContent = name.value;
    }

    console.log(car);

    const svgCar = car.getChild()[1].getChild()[0].getNode()();
    const pathElement = svgCar.querySelector("path") as SVGPathElement;

    if (pathElement) {
        pathElement.style.fill = color.value;
    }
}

export function moveCar(option: Option) {
    const car = option.getChild()[1].getChild()[0].getNode()();
    const finish = option.getNode()().clientWidth;
    option.run = true;
    const speed = option.speed;

    let start: number | undefined;
    let stop;
    let progress: number;

    function animate(timeStamp: number | undefined) {
        if (!start || progress > finish) start = timeStamp;
        if (timeStamp !== undefined && start !== undefined) {
            progress = (timeStamp - start) / speed;
        }
        car.style.left = progress + "%";
        stop = window.requestAnimationFrame(animate);
        if (progress >= 85) {
            const winner = {
                model: option.model,
                color: option.color,
                id: option.id,
                speed: option.speed,
            };
            cancelAnimationFrame(stop);

            if (!document.body.querySelector("dialog")) {
                const popup = new Popup(
                    winner,
                ).getNode()() as HTMLDialogElement;
                document.body.appendChild(popup);
                popup.showModal();
            }
        }
    }
    requestAnimationFrame(animate);
}
export function setSpeed() {
    const randomSpeed = Number((Math.random() * 100).toFixed(2));
    if (randomSpeed < 10) {
        return setSpeed();
    }
    return randomSpeed;
}

export function generatedCars(garage: Component) {
    let count = 0;
    const arrCars = Array.from({ length: 100 }, () => {
        const option = {
            model: `a${count++}`,
            color: `#F00${count++}`,
            id: count++,
            speed: setSpeed(),
        };

        return new Option(option);
    });

    garage.appendChildren(arrCars);
}
export function runAllCars(garage: Component) {
    const cars = garage.getChild() as Option[];
    cars.forEach((car) => moveCar(car));
}
export function restartAllCars(garage: Component) {
    let cars = garage.getChild() as Option[];
    if (cars.length === 0) {
        alert("Please add CAR");
    } else {
        cars.forEach((car) => {
            const icon = car.getChild()[1].getChild()[0].getNode()();

            icon.style.left = "0";
        });
    }
}
