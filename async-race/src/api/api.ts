import { Component } from "@/component/component";
import Option from "@/utils/option/option";

export function carCreated(list: Component,option): void {
    list.append(new Option(option));
}
