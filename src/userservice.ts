import * as jwt from "jsonwebtoken";
import * as request from "request";



export interface ILoginFbParams {
    fbAccesstoken: string
    jat: string
    baseUri: string
}

export interface ILoginFbResult {
    uid: number
    fbid: number
    username: string
    email: string
    active: boolean
    verify: boolean
    verifyAt: Date
    displayname: string
    roles: string[]
    jut: string
}
export async function loginFb(params: ILoginFbParams) {
    return new Promise<ILoginFbResult>((resolve, reject) => {
        request({
            url: params.baseUri + "/login/fb",
            method: 'POST',
            headers: {
                authorization: 'Bearer ' + params.jat
            },
            json: { accesstoken: params.fbAccesstoken }
        }, function (err, httpResponse, body) {
            if (err) {
                return reject(err);
            }
            if (body.error || body.errors) {
                return reject(body.error || body.errors);
            }

            if (httpResponse.statusCode == 200) {
                return resolve(body);
            }
            reject(body);
        });
    });
}



export interface IProfileParams {
    uid: number
    jat: string
    baseUri: string
}

export interface IProfileResult {
    uid: number
    fb: number
    username: string
    email: string
    active: boolean
    verify: boolean
    verifyAt: Date
    displayname: string
    roles: string[]
    createdAt: Date
    profile: {
        firstname: string
        lastname: string
        gender: number
        ageRangeMin: number
        ageRangeMax: number
        timezone: number
        locale: number
    }
}
export async function profile(params: IProfileParams) {
    return new Promise<IProfileResult>((resolve, reject) => {
        request({
            url: `${params.baseUri}/user/${params.uid}/profile`,
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + params.jat
            },
            json: true
        }, function (err, httpResponse, body) {
            if (err) {
                return reject(err);
            }
            if (body.error || body.errors) {
                return reject(body.error || body.errors);
            }

            if (httpResponse.statusCode == 200) {
                return resolve(body);
            }
            reject(body);

        });
    });
}