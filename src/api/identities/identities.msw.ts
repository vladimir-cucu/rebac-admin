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
  GetIdentitiesResponse,
  GetIdentityEntitlementsResponse,
  GetIdentityGroupsResponse,
  GetIdentityRolesResponse,
  Identity,
} from "../api.schemas";

export const getGetIdentitiesResponseMock = (
  overrideResponse: any = {},
): GetIdentitiesResponse => ({
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

export const getPostIdentitiesResponseMock = (
  overrideResponse: any = {},
): Identity => ({
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
});

export const getGetIdentitiesItemResponseMock = (
  overrideResponse: any = {},
): Identity => ({
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
});

export const getPutIdentitiesItemResponseMock = (
  overrideResponse: any = {},
): Identity => ({
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
});

export const getGetIdentitiesItemGroupsResponseMock = (
  overrideResponse: any = {},
): GetIdentityGroupsResponse => ({
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

export const getGetIdentitiesItemRolesResponseMock = (
  overrideResponse: any = {},
): GetIdentityRolesResponse => ({
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

export const getGetIdentitiesItemEntitlementsResponseMock = (
  overrideResponse: any = {},
): GetIdentityEntitlementsResponse => ({
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

export const getGetIdentitiesMockHandler = (
  overrideResponse?: GetIdentitiesResponse,
) => {
  return http.get("*/identities", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getGetIdentitiesResponseMock(),
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

export const getPostIdentitiesMockHandler = (overrideResponse?: Identity) => {
  return http.post("*/identities", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse ? overrideResponse : getPostIdentitiesResponseMock(),
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

export const getGetIdentitiesItemMockHandler = (
  overrideResponse?: Identity,
) => {
  return http.get("*/identities/:id", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetIdentitiesItemResponseMock(),
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

export const getPutIdentitiesItemMockHandler = (
  overrideResponse?: Identity,
) => {
  return http.put("*/identities/:id", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getPutIdentitiesItemResponseMock(),
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

export const getDeleteIdentitiesItemMockHandler = () => {
  return http.delete("*/identities/:id", async () => {
    await delay(900);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};

export const getGetIdentitiesItemGroupsMockHandler = (
  overrideResponse?: GetIdentityGroupsResponse,
) => {
  return http.get("*/identities/:id/groups", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetIdentitiesItemGroupsResponseMock(),
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

export const getPatchIdentitiesItemGroupsMockHandler = () => {
  return http.patch("*/identities/:id/groups", async () => {
    await delay(900);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};

export const getGetIdentitiesItemRolesMockHandler = (
  overrideResponse?: GetIdentityRolesResponse,
) => {
  return http.get("*/identities/:id/roles", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetIdentitiesItemRolesResponseMock(),
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

export const getPatchIdentitiesItemRolesMockHandler = () => {
  return http.patch("*/identities/:id/roles", async () => {
    await delay(900);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};

export const getGetIdentitiesItemEntitlementsMockHandler = (
  overrideResponse?: GetIdentityEntitlementsResponse,
) => {
  return http.get("*/identities/:id/entitlements", async () => {
    await delay(900);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetIdentitiesItemEntitlementsResponseMock(),
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

export const getPatchIdentitiesItemEntitlementsMockHandler = () => {
  return http.patch("*/identities/:id/entitlements", async () => {
    await delay(900);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  });
};
export const getIdentitiesMock = () => [
  getGetIdentitiesMockHandler(),
  getPostIdentitiesMockHandler(),
  getGetIdentitiesItemMockHandler(),
  getPutIdentitiesItemMockHandler(),
  getDeleteIdentitiesItemMockHandler(),
  getGetIdentitiesItemGroupsMockHandler(),
  getPatchIdentitiesItemGroupsMockHandler(),
  getGetIdentitiesItemRolesMockHandler(),
  getPatchIdentitiesItemRolesMockHandler(),
  getGetIdentitiesItemEntitlementsMockHandler(),
  getPatchIdentitiesItemEntitlementsMockHandler(),
];
