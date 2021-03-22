import { Rental } from "./rental";

export interface RentalDetail extends Rental{
    carName:string,
    brandName:string,
    userName:string,
    customerName:string
}