import { apiRequest } from "../actions/Api";

import { LOGIN } from "../actions/Auth";

const SERVER_URL = `https://61m46.sse.codesandbox.io`;

export const appMiddleware = () => (next) => (action) => {
    next(action);

    switch (action.type) {
        case LOGIN: {
            next(
                apiRequest({
                    url: `${SERVER_URL}/login`,

                    method: "POST",

                    data: action.payload,
                })
            );

            break;
        }

        default:
            break;
    }
};
