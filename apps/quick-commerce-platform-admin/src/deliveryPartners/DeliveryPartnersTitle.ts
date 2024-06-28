import { DeliveryPartners as TDeliveryPartners } from "../api/deliveryPartners/DeliveryPartners";

export const DELIVERYPARTNERS_TITLE_FIELD = "id";

export const DeliveryPartnersTitle = (record: TDeliveryPartners): string => {
  return record.id?.toString() || String(record.id);
};
