import { DeliveryPartnersWhereInput } from "./DeliveryPartnersWhereInput";
import { DeliveryPartnersOrderByInput } from "./DeliveryPartnersOrderByInput";

export type DeliveryPartnersFindManyArgs = {
  where?: DeliveryPartnersWhereInput;
  orderBy?: Array<DeliveryPartnersOrderByInput>;
  skip?: number;
  take?: number;
};
