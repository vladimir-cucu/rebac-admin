/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * Canonical OpenFGA Administration Product Compatibility API
 * The following specification outlines the API required for the FGA administration frontend to interact with an OpenFGA instance through a products API. This is an evolving specification as reflected in the version number.

 * OpenAPI spec version: 0.0.10
 */
import { faker } from "@faker-js/faker";
import { HttpResponse, delay, http } from "msw";

import type {
  GetRoleEntitlementsResponse,
  GetRolesResponse,
  Role,
} from "../api.schemas";

export const getGetRolesResponseMock = (
  overrideResponse: any = {},
): GetRolesResponse => ({
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
    entitlements: faker.helpers.arrayElement([
      Array.from(
        { length: faker.number.int({ min: 1, max: 10 }) },
        (_, i) => i + 1,
      ).map(() => ({
        entitlement: faker.helpers.arrayElement([
          faker.word.sample(),
          undefined,
        ]),
        entity: faker.helpers.arrayElement([
          {
            id: faker.word.sample(),
            type: faker.word.sample(),
            ...overrideResponse,
          },
          undefined,
        ]),
        resource: faker.helpers.arrayElement([faker.word.sample(), undefined]),
        ...overrideResponse,
      })),
      undefined,
    ]),
    id: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    name: faker.word.sample(),
    ...overrideResponse,
  })),
  ...overrideResponse,
});

export const getPostRolesResponseMock = (overrideResponse: any = {}): Role[] =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    entitlements: faker.helpers.arrayElement([
      Array.from(
        { length: faker.number.int({ min: 1, max: 10 }) },
        (_, i) => i + 1,
      ).map(() => ({
        entitlement: faker.helpers.arrayElement([
          faker.word.sample(),
          undefined,
        ]),
        entity: faker.helpers.arrayElement([
          {
            id: faker.word.sample(),
            type: faker.word.sample(),
            ...overrideResponse,
          },
          undefined,
        ]),
        resource: faker.helpers.arrayElement([faker.word.sample(), undefined]),
        ...overrideResponse,
      })),
      undefined,
    ]),
    id: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    name: faker.word.sample(),
    ...overrideResponse,
  }));

export const getGetRolesItemResponseMock = (
  overrideResponse: any = {},
): Role => ({
  entitlements: faker.helpers.arrayElement([
    Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      entitlement: faker.helpers.arrayElement([faker.word.sample(), undefined]),
      entity: faker.helpers.arrayElement([
        {
          id: faker.word.sample(),
          type: faker.word.sample(),
          ...overrideResponse,
        },
        undefined,
      ]),
      resource: faker.helpers.arrayElement([faker.word.sample(), undefined]),
      ...overrideResponse,
    })),
    undefined,
  ]),
  id: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  name: faker.word.sample(),
  ...overrideResponse,
});

export const getPutRolesItemResponseMock = (
  overrideResponse: any = {},
): Role => ({
  entitlements: faker.helpers.arrayElement([
    Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      entitlement: faker.helpers.arrayElement([faker.word.sample(), undefined]),
      entity: faker.helpers.arrayElement([
        {
          id: faker.word.sample(),
          type: faker.word.sample(),
          ...overrideResponse,
        },
        undefined,
      ]),
      resource: faker.helpers.arrayElement([faker.word.sample(), undefined]),
      ...overrideResponse,
    })),
    undefined,
  ]),
  id: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  name: faker.word.sample(),
  ...overrideResponse,
});

export const getGetRolesItemEntitlementsResponseMock = (
  overrideResponse: any = {},
): GetRoleEntitlementsResponse => ({
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
    entitlement_type: faker.word.sample(),
    entity_name: faker.word.sample(),
    entity_type: faker.word.sample(),
    ...overrideResponse,
  })),
  ...overrideResponse,
});

export const getGetRolesMockHandler = (overrideResponse?: GetRolesResponse) => {
  return http.get("*/roles", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getGetRolesResponseMock(),
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

export const getPostRolesMockHandler = (overrideResponse?: Role[]) => {
  return http.post("*/roles", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getPostRolesResponseMock(),
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

export const getGetRolesItemMockHandler = (overrideResponse?: Role) => {
  return http.get("*/roles/:id", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getGetRolesItemResponseMock(),
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

export const getPutRolesItemMockHandler = (overrideResponse?: Role) => {
  return http.put("*/roles/:id", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getPutRolesItemResponseMock(),
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

export const getDeleteRolesItemMockHandler = () => {
  return http.delete("*/roles/:id", async () => {
    await delay(900);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};

export const getGetRolesItemEntitlementsMockHandler = (
  overrideResponse?: GetRoleEntitlementsResponse,
) => {
  return http.get("*/roles/:id/entitlements", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetRolesItemEntitlementsResponseMock(),
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

export const getPatchRolesItemEntitlementsMockHandler = () => {
  return http.patch("*/roles/:id/entitlements", async () => {
    await delay(900);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};
export const getRolesMock = () => [
  getGetRolesMockHandler(),
  getPostRolesMockHandler(),
  getGetRolesItemMockHandler(),
  getPutRolesItemMockHandler(),
  getDeleteRolesItemMockHandler(),
  getGetRolesItemEntitlementsMockHandler(),
  getPatchRolesItemEntitlementsMockHandler(),
];
