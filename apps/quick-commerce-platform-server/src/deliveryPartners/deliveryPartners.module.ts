import { Module } from "@nestjs/common";
import { DeliveryPartnersModuleBase } from "./base/deliveryPartners.module.base";
import { DeliveryPartnersService } from "./deliveryPartners.service";
import { DeliveryPartnersController } from "./deliveryPartners.controller";
import { DeliveryPartnersResolver } from "./deliveryPartners.resolver";

@Module({
  imports: [DeliveryPartnersModuleBase],
  controllers: [DeliveryPartnersController],
  providers: [DeliveryPartnersService, DeliveryPartnersResolver],
  exports: [DeliveryPartnersService],
})
export class DeliveryPartnersModule {}
