import * as app from "./appservice";
import * as user from "./userservice";
export interface IByteSdkOptions {
    /**
     * base uri
     */
    uri: string;
    appId: number;
    key: {
        private: string;
        public: string;
        passphrase: string;
    };
    appBaseUri: string;
    userBaseUri: string;
}
export declare class ByteSdk {
    private options;
    constructor(options: IByteSdkOptions);
    genJCT(): string;
    private _jat;
    getJAT(): Promise<app.IJat>;
    userLoginFb(fbAccesstoken: string): Promise<user.ILoginFbResult>;
    userProfile(uid: number): Promise<user.IProfileResult>;
}
