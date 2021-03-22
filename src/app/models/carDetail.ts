import { Car } from "./car";

export interface CarDetails extends Car{
    carName:string,
    brandName:string,
    colorName:string
}