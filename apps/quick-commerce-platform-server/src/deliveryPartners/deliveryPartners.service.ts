import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryPartnersServiceBase } from "./base/deliveryPartners.service.base";

@Injectable()
export class DeliveryPartnersService extends DeliveryPartnersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
