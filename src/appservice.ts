import * as jwt from "jsonwebtoken";
import * as request from "request";
//import * as bluebird from "bluebird";


export interface IJat {
    payload: {
        app: number,
        name: string, // only jat
        userly: { enable: boolean }
        mailer: { enable: boolean }
        resource: { enable: boolean }
        smser: { enable: boolean }
    },
    jat: string
}

export function genJCT(appId: number, keyPrivate: string, keyPassphrase: string) {
    let payload = {
        name: 'jct',
        app: appId
    };
    let secret: any = {
        key: keyPrivate, passphrase: keyPassphrase
    };
    let options = { algorithm: 'RS256' }
    return jwt.sign(payload, secret, options);
}
export async function getJAT(baseUri: string, appId: number, jct: string) {
    let url = baseUri + "/" + appId;



    return new Promise<IJat>((resolve, reject) => {
        request({
            url,
            method: 'POST',
            json: { jct }
        }, function (err, httpResponse, body) {

            if (err) {
                return reject(err);
            }
            if (body.payload && body.payload.name === "jat" && body.jat) {
                resolve(body);
            } else {
                reject(Error("jat format error"));
            }
        });
    });
}