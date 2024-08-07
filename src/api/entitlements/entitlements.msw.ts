/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Canonical OpenFGA Administration Product Compatibility API
 * The following specification outlines the API required for the FGA administration frontend to interact with an OpenFGA instance through a products API. This is an evolving specification as reflected in the version number.

 * OpenAPI spec version: 0.0.10
 */
import { faker } from "@faker-js/faker";
import { HttpResponse, delay, http } from "msw";

import type {
  BadRequestResponse,
  DefaultResponse,
  GetEntitlementsResponse,
  NotFoundResponse,
  UnauthorizedResponse,
} from "../api.schemas";

export const getGetEntitlementsResponseMock = (
  overrideResponse: any = {},
): GetEntitlementsResponse => ({
  _links: {
    next: { href: faker.word.sample(), ...overrideResponse },
    ...overrideResponse,
  },
  _meta: {
    page: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    pageToken: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    size: faker.number.int({ min: undefined, max: undefined }),
    total: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    ...overrideResponse,
  },
  message: faker.word.sample(),
  status: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
  data: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    entitlement: faker.word.sample(),
    entity_type: faker.word.sample(),
    receiver_type: faker.word.sample(),
    ...overrideResponse,
  })),
  ...overrideResponse,
});

export const getGetEntitlementsResponseMock200 = (
  overrideResponse: any = {},
): GetEntitlementsResponse => ({
  _links: {
    next: { href: faker.word.sample(), ...overrideResponse },
    ...overrideResponse,
  },
  _meta: {
    page: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    pageToken: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    size: faker.number.int({ min: undefined, max: undefined }),
    total: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    ...overrideResponse,
  },
  message: faker.word.sample(),
  status: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
  data: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    entitlement: faker.word.sample(),
    entity_type: faker.word.sample(),
    receiver_type: faker.word.sample(),
    ...overrideResponse,
  })),
  ...overrideResponse,
});

export const getGetEntitlementsResponseMock400 = (
  overrideResponse: any = {},
): BadRequestResponse => ({
  _links: {
    next: { href: faker.word.sample(), ...overrideResponse },
    ...overrideResponse,
  },
  _meta: {
    page: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    pageToken: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    size: faker.number.int({ min: undefined, max: undefined }),
    total: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    ...overrideResponse,
  },
  message: faker.word.sample(),
  status: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
});

export const getGetEntitlementsResponseMock401 = (
  overrideResponse: any = {},
): UnauthorizedResponse => ({
  _links: {
    next: { href: faker.word.sample(), ...overrideResponse },
    ...overrideResponse,
  },
  _meta: {
    page: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    pageToken: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    size: faker.number.int({ min: undefined, max: undefined }),
    total: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    ...overrideResponse,
  },
  message: faker.word.sample(),
  status: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
});

export const getGetEntitlementsResponseMock404 = (
  overrideResponse: any = {},
): NotFoundResponse => ({
  _links: {
    next: { href: faker.word.sample(), ...overrideResponse },
    ...overrideResponse,
  },
  _meta: {
    page: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    pageToken: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    size: faker.number.int({ min: undefined, max: undefined }),
    total: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    ...overrideResponse,
  },
  message: faker.word.sample(),
  status: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
});

export const getGetEntitlementsResponseMockDefault = (
  overrideResponse: any = {},
): DefaultResponse => ({
  _links: {
    next: { href: faker.word.sample(), ...overrideResponse },
    ...overrideResponse,
  },
  _meta: {
    page: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    pageToken: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    size: faker.number.int({ min: undefined, max: undefined }),
    total: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    ...overrideResponse,
  },
  message: faker.word.sample(),
  status: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
});

export const getGetRawEntitlementsResponseMock = (): string =>
  faker.word.sample();

export const getGetRawEntitlementsResponseMock200 = (): string =>
  faker.word.sample();

export const getGetRawEntitlementsResponseMock400 = (
  overrideResponse: any = {},
): BadRequestResponse => ({
  _links: {
    next: { href: faker.word.sample(), ...overrideResponse },
    ...overrideResponse,
  },
  _meta: {
    page: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    pageToken: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    size: faker.number.int({ min: undefined, max: undefined }),
    total: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    ...overrideResponse,
  },
  message: faker.word.sample(),
  status: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
});

export const getGetRawEntitlementsResponseMock401 = (
  overrideResponse: any = {},
): UnauthorizedResponse => ({
  _links: {
    next: { href: faker.word.sample(), ...overrideResponse },
    ...overrideResponse,
  },
  _meta: {
    page: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    pageToken: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    size: faker.number.int({ min: undefined, max: undefined }),
    total: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    ...overrideResponse,
  },
  message: faker.word.sample(),
  status: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
});

export const getGetRawEntitlementsResponseMock404 = (
  overrideResponse: any = {},
): NotFoundResponse => ({
  _links: {
    next: { href: faker.word.sample(), ...overrideResponse },
    ...overrideResponse,
  },
  _meta: {
    page: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    pageToken: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    size: faker.number.int({ min: undefined, max: undefined }),
    total: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    ...overrideResponse,
  },
  message: faker.word.sample(),
  status: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
});

export const getGetRawEntitlementsResponseMockDefault = (
  overrideResponse: any = {},
): DefaultResponse => ({
  _links: {
    next: { href: faker.word.sample(), ...overrideResponse },
    ...overrideResponse,
  },
  _meta: {
    page: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    pageToken: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    size: faker.number.int({ min: undefined, max: undefined }),
    total: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    ...overrideResponse,
  },
  message: faker.word.sample(),
  status: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
});

export const getGetEntitlementsMockHandler = (
  overrideResponse?: GetEntitlementsResponse,
) => {
  return http.get("*/entitlements", async () => {
    await delay((() => (process.env.NODE_ENV === "development" ? 1e3 : 10))());
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? overrideResponse
          : getGetEntitlementsResponseMock(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getGetEntitlementsMockHandler200 = (
  overrideResponse?: GetEntitlementsResponse,
) => {
  return http.get("*/entitlements", async () => {
    await delay((() => (process.env.NODE_ENV === "development" ? 1e3 : 10))());
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? overrideResponse
          : getGetEntitlementsResponseMock200(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getGetEntitlementsMockHandler400 = (
  overrideResponse?: BadRequestResponse,
) => {
  return http.get("*/entitlements", async () => {
    await delay((() => (process.env.NODE_ENV === "development" ? 1e3 : 10))());
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? overrideResponse
          : getGetEntitlementsResponseMock400(),
      ),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getGetEntitlementsMockHandler401 = (
  overrideResponse?: UnauthorizedResponse,
) => {
  return http.get("*/entitlements", async () => {
    await delay((() => (process.env.NODE_ENV === "development" ? 1e3 : 10))());
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? overrideResponse
          : getGetEntitlementsResponseMock401(),
      ),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getGetEntitlementsMockHandler404 = (
  overrideResponse?: NotFoundResponse,
) => {
  return http.get("*/entitlements", async () => {
    await delay((() => (process.env.NODE_ENV === "development" ? 1e3 : 10))());
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? overrideResponse
          : getGetEntitlementsResponseMock404(),
      ),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getGetEntitlementsMockHandlerDefault = (
  overrideResponse?: DefaultResponse,
) => {
  return http.get("*/entitlements", async () => {
    await delay((() => (process.env.NODE_ENV === "development" ? 1e3 : 10))());
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? overrideResponse
          : getGetEntitlementsResponseMockDefault(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getGetRawEntitlementsMockHandler = () => {
  return http.get("*/entitlements/raw", async () => {
    await delay((() => (process.env.NODE_ENV === "development" ? 1e3 : 10))());
    return new HttpResponse(getGetRawEntitlementsResponseMock(), {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  });
};

export const getGetRawEntitlementsMockHandler200 = () => {
  return http.get("*/entitlements/raw", async () => {
    await delay((() => (process.env.NODE_ENV === "development" ? 1e3 : 10))());
    return new HttpResponse(getGetRawEntitlementsResponseMock200(), {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  });
};

export const getGetRawEntitlementsMockHandler400 = (
  overrideResponse?: BadRequestResponse,
) => {
  return http.get("*/entitlements/raw", async () => {
    await delay((() => (process.env.NODE_ENV === "development" ? 1e3 : 10))());
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? overrideResponse
          : getGetRawEntitlementsResponseMock400(),
      ),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getGetRawEntitlementsMockHandler401 = (
  overrideResponse?: UnauthorizedResponse,
) => {
  return http.get("*/entitlements/raw", async () => {
    await delay((() => (process.env.NODE_ENV === "development" ? 1e3 : 10))());
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? overrideResponse
          : getGetRawEntitlementsResponseMock401(),
      ),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getGetRawEntitlementsMockHandler404 = (
  overrideResponse?: NotFoundResponse,
) => {
  return http.get("*/entitlements/raw", async () => {
    await delay((() => (process.env.NODE_ENV === "development" ? 1e3 : 10))());
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? overrideResponse
          : getGetRawEntitlementsResponseMock404(),
      ),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};

export const getGetRawEntitlementsMockHandlerDefault = (
  overrideResponse?: DefaultResponse,
) => {
  return http.get("*/entitlements/raw", async () => {
    await delay((() => (process.env.NODE_ENV === "development" ? 1e3 : 10))());
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? overrideResponse
          : getGetRawEntitlementsResponseMockDefault(),
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
};
export const getEntitlementsMock = () => [
  getGetEntitlementsMockHandler(),
  getGetRawEntitlementsMockHandler(),
];
