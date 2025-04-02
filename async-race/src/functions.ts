import { Component } from "./component/component";

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

export function moveCar(car, finish, speed = 10) {
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
    const randomSpeed =Number( (Math.random() * 100).toFixed(2));
    if (randomSpeed < 10) {
        return setSpeed();
    }
    return randomSpeed
}
