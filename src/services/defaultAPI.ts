//#region получение параметров из ссылки
export const getQueryParams = (name: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get(name);
    return value
}
//#endregion

//#region ссылка к API
export const API_URL: string = "https://betnetix.host/api/v1/web49e1b2b6640f3f1739f5dc5bb5489/webclient.php";
//#endregion

//#region Токен к API
export const API_TOKEN: string = "e17418f1e0d8219250590d7d613f6335";
//#endregion

//#region Платформа
export const PLATFORM: number = 4;
//#endregion

//#region Токен пальзователя
export const USER_TOKEN: string = getQueryParams("user_token") || "";
//#endregion

//#region ID пальзователя
export const USER_ID: number = Number(getQueryParams("user_id") || "-1");
//#endregion

//#region API_KEY
export const API_KEY: string = getQueryParams("api_key") || "";
//#endregion

//#region Интерфейс методов
export interface PropsMethodDefault {
    section: "partner" | "auth" | "event",
    action: "auth" | "sce_list" | "events_web",
    body: Record<string, any>
};
//#endregion

//#region Ответ по умолчанию
export interface ResponseDefault {
    state: 1 | 0
};
//#endregion

//#region Замена регистра
export const replaceRegister = (data: string) => {
    let result = ""
    for (let i = 0; i < data.length; i++) {
        const v = data[i];
        if (data[i] == v.toLocaleLowerCase()) {
            result += v.toLocaleUpperCase()
        } else {
            result += v.toLocaleLowerCase()
        }
    }
    return result;
}
//#endregion

//#region Закодировать данные
export const encodeData = (data: string) => {
    return replaceRegister(window.btoa(data));
}
//#endregion

//#region Декодировать данные
export const decodeData = (data: string) => {
    return window.atob(replaceRegister(data))
}
//#endregion

//#region Метод по умолчанию
export const methodDefault = ({ section, action, body }: PropsMethodDefault) => {
    let user_id_str = localStorage.getItem("user_id");
    let user_id = -1;
    let code = `${section}_${action}`;
    if (user_id_str && "partner_auth" != code) {
        user_id = Number(user_id_str);
    }
    let auth_token = "partner_auth" != code ? localStorage.getItem("auth_token") || "" : "";
    const form = new FormData();
    const data = JSON.stringify({
        section,
        action,
        web_token: API_TOKEN,
        platform: PLATFORM,
        auth_token,
        user_id,
        partner_data: {
            user_id: USER_ID,
            user_token: USER_TOKEN,
            api_key: API_KEY
        },
        ...body
    })
    console.log(data);
    form.append("data", encodeData(data))
    return fetch(API_URL, {
        method: "POST",
        body: form
    }).then(e => e.text()).then(e => {
        return JSON.parse(decodeData(e))
    }).catch(e => {
        console.error(e)
        return { state: 0 }
    })
}
//#endregion