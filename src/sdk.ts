import * as jwt from "jsonwebtoken";
import * as request from "request";
import * as app from "./appservice";
import * as user from "./userservice";

export interface IByteSdkOptions {
    /**
     * base uri
     */
    uri: string
    appId: number
    key: {
        private: string
        public: string
        passphrase: string
    },
    appBaseUri: string
    userBaseUri: string
}

export class ByteSdk {
    constructor(private options: IByteSdkOptions) {

    }

    genJCT(): string {
        return app.genJCT(this.options.appId, this.options.key.private, this.options.key.passphrase);
    }

    private _jat: app.IJat
    async getJAT() {
        if (this._jat) return this._jat;

        let jct = this.genJCT();

        this._jat = await app.getJAT(this.options.appBaseUri, this.options.appId, jct);

        return this._jat;
    }


    async userLoginFb(fbAccesstoken: string) {
        let jat = await this.getJAT();

        return user.loginFb({
            fbAccesstoken,
            baseUri: this.options.userBaseUri,
            jat: jat.jat
        });
    }
    async userProfile(uid: number) {
        let jat = await this.getJAT();

        return user.profile({
            uid,
            baseUri: this.options.userBaseUri,
            jat: jat.jat
        });
    }
}