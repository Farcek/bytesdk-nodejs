export interface ILoginFbParams {
    fbAccesstoken: string;
    jat: string;
    baseUri: string;
}
export interface ILoginFbResult {
    uid: number;
    fbid: number;
    username: string;
    email: string;
    active: boolean;
    verify: boolean;
    verifyAt: Date;
    displayname: string;
    roles: string[];
    jut: string;
}
export declare function loginFb(params: ILoginFbParams): Promise<ILoginFbResult>;
export interface IProfileParams {
    uid: number;
    jat: string;
    baseUri: string;
}
export interface IProfileResult {
    uid: number;
    fb: number;
    username: string;
    email: string;
    active: boolean;
    verify: boolean;
    verifyAt: Date;
    displayname: string;
    roles: string[];
    createdAt: Date;
    profile: {
        firstname: string;
        lastname: string;
        gender: number;
        ageRangeMin: number;
        ageRangeMax: number;
        timezone: number;
        locale: number;
    };
}
export declare function profile(params: IProfileParams): Promise<IProfileResult>;
