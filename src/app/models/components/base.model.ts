export namespace BaseNameSpace {
    export interface Params {
        api_key: string;
        [key: string]: any,
    }

    export interface PostConfig {
        params: Params;
        url: string;
        body: any;
    }

    export interface GetConfig {
        params: Params;
        url: string;
    }
}