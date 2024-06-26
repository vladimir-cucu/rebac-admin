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
  GetGroupEntitlementsResponse,
  GetGroupIdentitiesResponse,
  GetGroupRolesResponse,
  GetGroupsResponse,
  Group,
} from "../api.schemas";

export const getGetGroupsResponseMock = (
  overrideResponse: any = {},
): GetGroupsResponse => ({
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
    id: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    name: faker.word.sample(),
    ...overrideResponse,
  })),
  ...overrideResponse,
});

export const getPostGroupsResponseMock = (
  overrideResponse: any = {},
): Group => ({
  id: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  name: faker.word.sample(),
  ...overrideResponse,
});

export const getGetGroupsItemResponseMock = (
  overrideResponse: any = {},
): GetGroupsResponse => ({
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
    id: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    name: faker.word.sample(),
    ...overrideResponse,
  })),
  ...overrideResponse,
});

export const getPutGroupsItemResponseMock = (
  overrideResponse: any = {},
): Group => ({
  id: faker.helpers.arrayElement([faker.word.sample(), undefined]),
  name: faker.word.sample(),
  ...overrideResponse,
});

export const getGetGroupsItemIdentitiesResponseMock = (
  overrideResponse: any = {},
): GetGroupIdentitiesResponse => ({
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
    addedBy: faker.word.sample(),
    certificate: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    email: faker.word.sample(),
    firstName: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    groups: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    id: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    joined: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    lastLogin: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    lastName: faker.helpers.arrayElement([faker.word.sample(), undefined]),
    permissions: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    roles: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    source: faker.word.sample(),
    ...overrideResponse,
  })),
  ...overrideResponse,
});

export const getGetGroupsItemRolesResponseMock = (
  overrideResponse: any = {},
): GetGroupRolesResponse => ({
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

export const getGetGroupsItemEntitlementsResponseMock = (
  overrideResponse: any = {},
): GetGroupEntitlementsResponse => ({
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

export const getGetGroupsMockHandler = (
  overrideResponse?: GetGroupsResponse,
) => {
  return http.get("*/groups", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getGetGroupsResponseMock(),
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

export const getPostGroupsMockHandler = (overrideResponse?: Group) => {
  return http.post("*/groups", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getPostGroupsResponseMock(),
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

export const getGetGroupsItemMockHandler = (
  overrideResponse?: GetGroupsResponse,
) => {
  return http.get("*/groups/:id", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getGetGroupsItemResponseMock(),
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

export const getPutGroupsItemMockHandler = (overrideResponse?: Group) => {
  return http.put("*/groups/:id", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getPutGroupsItemResponseMock(),
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

export const getDeleteGroupsItemMockHandler = () => {
  return http.delete("*/groups/:id", async () => {
    await delay(900);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};

export const getGetGroupsItemIdentitiesMockHandler = (
  overrideResponse?: GetGroupIdentitiesResponse,
) => {
  return http.get("*/groups/:id/identities", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetGroupsItemIdentitiesResponseMock(),
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

export const getPatchGroupsItemIdentitiesMockHandler = () => {
  return http.patch("*/groups/:id/identities", async () => {
    await delay(900);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};

export const getGetGroupsItemRolesMockHandler = (
  overrideResponse?: GetGroupRolesResponse,
) => {
  return http.get("*/groups/:id/roles", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetGroupsItemRolesResponseMock(),
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

export const getPatchGroupsItemRolesMockHandler = () => {
  return http.patch("*/groups/:id/roles", async () => {
    await delay(900);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};

export const getGetGroupsItemEntitlementsMockHandler = (
  overrideResponse?: GetGroupEntitlementsResponse,
) => {
  return http.get("*/groups/:id/entitlements", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetGroupsItemEntitlementsResponseMock(),
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

export const getPatchGroupsItemEntitlementsMockHandler = () => {
  return http.patch("*/groups/:id/entitlements", async () => {
    await delay(900);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};
export const getGroupsMock = () => [
  getGetGroupsMockHandler(),
  getPostGroupsMockHandler(),
  getGetGroupsItemMockHandler(),
  getPutGroupsItemMockHandler(),
  getDeleteGroupsItemMockHandler(),
  getGetGroupsItemIdentitiesMockHandler(),
  getPatchGroupsItemIdentitiesMockHandler(),
  getGetGroupsItemRolesMockHandler(),
  getPatchGroupsItemRolesMockHandler(),
  getGetGroupsItemEntitlementsMockHandler(),
  getPatchGroupsItemEntitlementsMockHandler(),
];
