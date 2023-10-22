import { methodDefault } from "./defaultAPI";

export const getWarehouse = async () => methodDefault('warehouses', {
    method: 'GET',
});