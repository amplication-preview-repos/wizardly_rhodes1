import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeliveryPartnersService } from "./deliveryPartners.service";
import { DeliveryPartnersControllerBase } from "./base/deliveryPartners.controller.base";

@swagger.ApiTags("deliveryPartners")
@common.Controller("deliveryPartners")
export class DeliveryPartnersController extends DeliveryPartnersControllerBase {
  constructor(protected readonly service: DeliveryPartnersService) {
    super(service);
  }
}
