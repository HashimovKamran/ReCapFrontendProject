import { RentalDetail } from "./rentalDetail";
import { ResponseModel } from "./responseModel";

export interface RentalResponseModel extends ResponseModel{
    data:RentalDetail[]
}