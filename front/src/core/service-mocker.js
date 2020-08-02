// @packages
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// @scripts
import { config } from '../config';

import {
    createMockResponse,
    decodeBase64String,
    getMockParams
} from '../util';

const mockedFunctions = {
    mockSecurityLoginSvc: (mockAdapter) => {
        const url = config.services.security.login;

        mockAdapter.onPost(url).reply((call) => {
            const { email, password } = getMockParams(call);
            const { loginEmail, loginPassword } = config.settings.serviceMocker;

            const success =
                (email === loginEmail) &&
                (password === decodeBase64String(loginPassword));

            return createMockResponse({
                data: success ? config.mockData.securityLogin : null,
                httpCode: success ? 200 : 401
            });
        });
    },
    mockEmployeeGetAllSvc: (mockAdapter) => {
        const url = config.services.employee.getAll;

        mockAdapter.onGet(url).reply(() => createMockResponse({
            data: config.mockData.employee,
            httpCode: 200
        }));
    }
};

export const initializeServiceMocker = (store) => {
    if (config.settings.serviceMocker.isEnabled) {
        const mockAdapter = new MockAdapter(
            axios, {
                delayResponse: config.settings.serviceMocker.delayResponse
            }
        );

        const serviceMocker = {
            replyWithMockData: () => {
                mockAdapter.reset();
                const exclude = config.settings.serviceMocker.exclude || [];
                Object.keys(mockedFunctions).forEach((name) => {
                    if (!exclude.some(item => item === name)) {
                        mockedFunctions[name](mockAdapter, store);
                    }
                });
                mockAdapter.onAny().passThrough();
            },
            replyWithNetworkError: () => {
                mockAdapter.reset();
                mockAdapter.onAny().networkError();
            }
        };

        serviceMocker.replyWithMockData();
        return serviceMocker;
    }

    return null;
};
