import { CarDetails } from "./carDetail";
import { ResponseModel } from "./responseModel";

export interface CarResponseModel extends ResponseModel{
    data:CarDetails[]
}