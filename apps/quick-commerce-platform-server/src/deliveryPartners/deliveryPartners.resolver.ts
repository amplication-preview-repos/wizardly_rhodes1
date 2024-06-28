import * as graphql from "@nestjs/graphql";
import { DeliveryPartnersResolverBase } from "./base/deliveryPartners.resolver.base";
import { DeliveryPartners } from "./base/DeliveryPartners";
import { DeliveryPartnersService } from "./deliveryPartners.service";

@graphql.Resolver(() => DeliveryPartners)
export class DeliveryPartnersResolver extends DeliveryPartnersResolverBase {
  constructor(protected readonly service: DeliveryPartnersService) {
    super(service);
  }
}
