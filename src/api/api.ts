import { Component } from "@/component/component";
import Option, { option } from "@/utils/option/option";

export function carCreated(list: Component, option: option): void {
    list.append(new Option(option));
}
