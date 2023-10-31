import RequestService from "../services/request.service";
import { AxiosResponse } from "axios";

export class RequestInterceptor {

    constructor() {
        this.interceptorInitialized();
    }

    public interceptorInitialized(): void {
        RequestService.interceptors.response.use(
            (res: AxiosResponse<any, any>): AxiosResponse<any, any> => {
                return res;
            },
            (error: Error) => {
                return Promise.resolve(error.message);
            }
        )
    }
}