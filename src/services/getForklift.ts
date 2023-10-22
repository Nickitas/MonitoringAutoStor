import { methodDefault } from "./defaultAPI";

export const getForklifts = async () => methodDefault('forklifts', {
    method: 'GET',
});

