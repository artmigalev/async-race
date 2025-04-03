import { carCreated } from "./api/api";
import { Component } from "./component/component";
import Garage from "./pages/garage/garage";
import Option from "./utils/option/option";

export function UpdateCar(params, garage: Component) {
    const arrCars = garage.getChild();
    const car = arrCars.find((car) => car.carSelect === true);
    const name = params.getChild()[0].getNode()() as HTMLInputElement;
    const color = params.getChild()[1].getNode()() as HTMLInputElement;
    if (name.value !== "") {
        const titleCar = car.getChild()[0].getChild()[2];
        titleCar.getNode()().textContent = name.value;
    }
    console.log(car);
    const svgCar = car.getChild()[1].getChild()[0].getNode()();

    svgCar.querySelector("path").style.fill = color.value;
}

export function moveCar(option: Option) {
    const car = option.getChild()[1].getChild()[0].getNode()();
    const finish = option.getNode()().clientWidth;
    option.run = true;
    const speed = option.speed;

    let start;
    let stop;
    let progress: number;

    function animate(timeStamp) {
        if (!start || progress > finish) start = timeStamp;
        progress = (timeStamp - start) / speed;
        car.style.left = progress + "%";
        stop = window.requestAnimationFrame(animate);
        if (progress >= 85) {
            cancelAnimationFrame(stop);
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
    const arrCars = Array.from({ length: 100 }, (v, i) => {
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

            icon.style.left = 0;
        });
    }
}
