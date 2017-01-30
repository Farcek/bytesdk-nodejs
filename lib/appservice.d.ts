export interface IJat {
    payload: {
        app: number;
        name: string;
        userly: {
            enable: boolean;
        };
        mailer: {
            enable: boolean;
        };
        resource: {
            enable: boolean;
        };
        smser: {
            enable: boolean;
        };
    };
    jat: string;
}
export declare function genJCT(appId: number, keyPrivate: string, keyPassphrase: string): string;
export declare function getJAT(baseUri: string, appId: number, jct: string): Promise<IJat>;
