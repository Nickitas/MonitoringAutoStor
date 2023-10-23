import { methodDefault } from "./defaultAPI";

export const getDistance = async () => methodDefault('analyze/data_analyze/?start_point=k1&end_point=k2&warehouse=1', {
    method: 'GET',
});