import { methodDefault } from "./defaultAPI";

export const getTrackingWarehouses = async (currentWarehouse: number) => methodDefault(`tracking/warehouses/${currentWarehouse}/map`, {
    method: 'GET',
});