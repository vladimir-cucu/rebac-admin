/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Canonical OpenFGA Administration Product Compatibility API
 * The following specification outlines the API required for the FGA administration frontend to interact with an OpenFGA instance through a products API. This is an evolving specification as reflected in the version number.

 * OpenAPI spec version: 0.0.10
 */
import { useMutation, useQuery } from "@tanstack/react-query";
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { customInstance } from "../../api-utils/mutator/custom-instance";
import type { ErrorType } from "../../api-utils/mutator/custom-instance";
import type {
  BadRequestResponse,
  DefaultResponse,
  GetIdentitiesItemEntitlementsParams,
  GetIdentitiesItemGroupsParams,
  GetIdentitiesItemRolesParams,
  GetIdentitiesParams,
  GetIdentitiesResponse,
  GetIdentityEntitlementsResponse,
  GetIdentityGroupsResponse,
  GetIdentityRolesResponse,
  Identity,
  IdentityEntitlementsPatchRequestBody,
  IdentityGroupsPatchRequestBody,
  IdentityRolesPatchRequestBody,
  NotFoundResponse,
  UnauthorizedResponse,
} from "../api.schemas";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * Get list of identities.
 * @summary Get list of identities.
 */
export const getIdentities = (
  params?: GetIdentitiesParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<GetIdentitiesResponse>(
    { url: `/identities`, method: "GET", params, signal },
    options,
  );
};

export const getGetIdentitiesQueryKey = (params?: GetIdentitiesParams) => {
  return [`/identities`, ...(params ? [params] : [])] as const;
};

export const getGetIdentitiesQueryOptions = <
  TData = Awaited<ReturnType<typeof getIdentities>>,
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  params?: GetIdentitiesParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getIdentities>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetIdentitiesQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getIdentities>>> = ({
    signal,
  }) => getIdentities(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getIdentities>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetIdentitiesQueryResult = NonNullable<
  Awaited<ReturnType<typeof getIdentities>>
>;
export type GetIdentitiesQueryError = ErrorType<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary Get list of identities.
 */
export const useGetIdentities = <
  TData = Awaited<ReturnType<typeof getIdentities>>,
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  params?: GetIdentitiesParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getIdentities>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetIdentitiesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Add an identity.
 * @summary Add an identity.
 */
export const postIdentities = (
  identity: Identity,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<Identity>(
    {
      url: `/identities`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: identity,
    },
    options,
  );
};

export const getPostIdentitiesMutationOptions = <
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postIdentities>>,
    TError,
    { data: Identity },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postIdentities>>,
  TError,
  { data: Identity },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postIdentities>>,
    { data: Identity }
  > = (props) => {
    const { data } = props ?? {};

    return postIdentities(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostIdentitiesMutationResult = NonNullable<
  Awaited<ReturnType<typeof postIdentities>>
>;
export type PostIdentitiesMutationBody = Identity;
export type PostIdentitiesMutationError = ErrorType<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary Add an identity.
 */
export const usePostIdentities = <
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postIdentities>>,
    TError,
    { data: Identity },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof postIdentities>>,
  TError,
  { data: Identity },
  TContext
> => {
  const mutationOptions = getPostIdentitiesMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * Get a single identity.
 * @summary Get a single identity.
 */
export const getIdentitiesItem = (
  id: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<Identity>(
    { url: `/identities/${id}`, method: "GET", signal },
    options,
  );
};

export const getGetIdentitiesItemQueryKey = (id: string) => {
  return [`/identities/${id}`] as const;
};

export const getGetIdentitiesItemQueryOptions = <
  TData = Awaited<ReturnType<typeof getIdentitiesItem>>,
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getIdentitiesItem>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetIdentitiesItemQueryKey(id);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getIdentitiesItem>>
  > = ({ signal }) => getIdentitiesItem(id, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getIdentitiesItem>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetIdentitiesItemQueryResult = NonNullable<
  Awaited<ReturnType<typeof getIdentitiesItem>>
>;
export type GetIdentitiesItemQueryError = ErrorType<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary Get a single identity.
 */
export const useGetIdentitiesItem = <
  TData = Awaited<ReturnType<typeof getIdentitiesItem>>,
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getIdentitiesItem>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetIdentitiesItemQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Update an identity.
 * @summary Update an identity.
 */
export const putIdentitiesItem = (
  id: string,
  identity: Identity,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<Identity>(
    {
      url: `/identities/${id}`,
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      data: identity,
    },
    options,
  );
};

export const getPutIdentitiesItemMutationOptions = <
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof putIdentitiesItem>>,
    TError,
    { id: string; data: Identity },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof putIdentitiesItem>>,
  TError,
  { id: string; data: Identity },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof putIdentitiesItem>>,
    { id: string; data: Identity }
  > = (props) => {
    const { id, data } = props ?? {};

    return putIdentitiesItem(id, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PutIdentitiesItemMutationResult = NonNullable<
  Awaited<ReturnType<typeof putIdentitiesItem>>
>;
export type PutIdentitiesItemMutationBody = Identity;
export type PutIdentitiesItemMutationError = ErrorType<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary Update an identity.
 */
export const usePutIdentitiesItem = <
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof putIdentitiesItem>>,
    TError,
    { id: string; data: Identity },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof putIdentitiesItem>>,
  TError,
  { id: string; data: Identity },
  TContext
> => {
  const mutationOptions = getPutIdentitiesItemMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * Remove an identity.
 * @summary Remove an identity.
 */
export const deleteIdentitiesItem = (
  id: string,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    { url: `/identities/${id}`, method: "DELETE" },
    options,
  );
};

export const getDeleteIdentitiesItemMutationOptions = <
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteIdentitiesItem>>,
    TError,
    { id: string },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteIdentitiesItem>>,
  TError,
  { id: string },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteIdentitiesItem>>,
    { id: string }
  > = (props) => {
    const { id } = props ?? {};

    return deleteIdentitiesItem(id, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type DeleteIdentitiesItemMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteIdentitiesItem>>
>;

export type DeleteIdentitiesItemMutationError = ErrorType<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary Remove an identity.
 */
export const useDeleteIdentitiesItem = <
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteIdentitiesItem>>,
    TError,
    { id: string },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteIdentitiesItem>>,
  TError,
  { id: string },
  TContext
> => {
  const mutationOptions = getDeleteIdentitiesItemMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * List groups the identity is a member of.
 * @summary List groups the identity is a member of.
 */
export const getIdentitiesItemGroups = (
  id: string,
  params?: GetIdentitiesItemGroupsParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<GetIdentityGroupsResponse>(
    { url: `/identities/${id}/groups`, method: "GET", params, signal },
    options,
  );
};

export const getGetIdentitiesItemGroupsQueryKey = (
  id: string,
  params?: GetIdentitiesItemGroupsParams,
) => {
  return [`/identities/${id}/groups`, ...(params ? [params] : [])] as const;
};

export const getGetIdentitiesItemGroupsQueryOptions = <
  TData = Awaited<ReturnType<typeof getIdentitiesItemGroups>>,
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  id: string,
  params?: GetIdentitiesItemGroupsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getIdentitiesItemGroups>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetIdentitiesItemGroupsQueryKey(id, params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getIdentitiesItemGroups>>
  > = ({ signal }) =>
    getIdentitiesItemGroups(id, params, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getIdentitiesItemGroups>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetIdentitiesItemGroupsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getIdentitiesItemGroups>>
>;
export type GetIdentitiesItemGroupsQueryError = ErrorType<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary List groups the identity is a member of.
 */
export const useGetIdentitiesItemGroups = <
  TData = Awaited<ReturnType<typeof getIdentitiesItemGroups>>,
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  id: string,
  params?: GetIdentitiesItemGroupsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getIdentitiesItemGroups>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetIdentitiesItemGroupsQueryOptions(
    id,
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Add or remove the identity to/from groups.
 * @summary Add or remove the identity to/from groups.
 */
export const patchIdentitiesItemGroups = (
  id: string,
  identityGroupsPatchRequestBody: IdentityGroupsPatchRequestBody,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    {
      url: `/identities/${id}/groups`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: identityGroupsPatchRequestBody,
    },
    options,
  );
};

export const getPatchIdentitiesItemGroupsMutationOptions = <
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchIdentitiesItemGroups>>,
    TError,
    { id: string; data: IdentityGroupsPatchRequestBody },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof patchIdentitiesItemGroups>>,
  TError,
  { id: string; data: IdentityGroupsPatchRequestBody },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof patchIdentitiesItemGroups>>,
    { id: string; data: IdentityGroupsPatchRequestBody }
  > = (props) => {
    const { id, data } = props ?? {};

    return patchIdentitiesItemGroups(id, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PatchIdentitiesItemGroupsMutationResult = NonNullable<
  Awaited<ReturnType<typeof patchIdentitiesItemGroups>>
>;
export type PatchIdentitiesItemGroupsMutationBody =
  IdentityGroupsPatchRequestBody;
export type PatchIdentitiesItemGroupsMutationError = ErrorType<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary Add or remove the identity to/from groups.
 */
export const usePatchIdentitiesItemGroups = <
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchIdentitiesItemGroups>>,
    TError,
    { id: string; data: IdentityGroupsPatchRequestBody },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof patchIdentitiesItemGroups>>,
  TError,
  { id: string; data: IdentityGroupsPatchRequestBody },
  TContext
> => {
  const mutationOptions = getPatchIdentitiesItemGroupsMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * List roles assigned to the identity.
 * @summary List roles assigned to the identity.
 */
export const getIdentitiesItemRoles = (
  id: string,
  params?: GetIdentitiesItemRolesParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<GetIdentityRolesResponse>(
    { url: `/identities/${id}/roles`, method: "GET", params, signal },
    options,
  );
};

export const getGetIdentitiesItemRolesQueryKey = (
  id: string,
  params?: GetIdentitiesItemRolesParams,
) => {
  return [`/identities/${id}/roles`, ...(params ? [params] : [])] as const;
};

export const getGetIdentitiesItemRolesQueryOptions = <
  TData = Awaited<ReturnType<typeof getIdentitiesItemRoles>>,
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  id: string,
  params?: GetIdentitiesItemRolesParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getIdentitiesItemRoles>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetIdentitiesItemRolesQueryKey(id, params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getIdentitiesItemRoles>>
  > = ({ signal }) =>
    getIdentitiesItemRoles(id, params, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getIdentitiesItemRoles>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetIdentitiesItemRolesQueryResult = NonNullable<
  Awaited<ReturnType<typeof getIdentitiesItemRoles>>
>;
export type GetIdentitiesItemRolesQueryError = ErrorType<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary List roles assigned to the identity.
 */
export const useGetIdentitiesItemRoles = <
  TData = Awaited<ReturnType<typeof getIdentitiesItemRoles>>,
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  id: string,
  params?: GetIdentitiesItemRolesParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getIdentitiesItemRoles>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetIdentitiesItemRolesQueryOptions(
    id,
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Add or remove the identity to/from roles.
 * @summary Add or remove the identity to/from roles.
 */
export const patchIdentitiesItemRoles = (
  id: string,
  identityRolesPatchRequestBody: IdentityRolesPatchRequestBody,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    {
      url: `/identities/${id}/roles`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: identityRolesPatchRequestBody,
    },
    options,
  );
};

export const getPatchIdentitiesItemRolesMutationOptions = <
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchIdentitiesItemRoles>>,
    TError,
    { id: string; data: IdentityRolesPatchRequestBody },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof patchIdentitiesItemRoles>>,
  TError,
  { id: string; data: IdentityRolesPatchRequestBody },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof patchIdentitiesItemRoles>>,
    { id: string; data: IdentityRolesPatchRequestBody }
  > = (props) => {
    const { id, data } = props ?? {};

    return patchIdentitiesItemRoles(id, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PatchIdentitiesItemRolesMutationResult = NonNullable<
  Awaited<ReturnType<typeof patchIdentitiesItemRoles>>
>;
export type PatchIdentitiesItemRolesMutationBody =
  IdentityRolesPatchRequestBody;
export type PatchIdentitiesItemRolesMutationError = ErrorType<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary Add or remove the identity to/from roles.
 */
export const usePatchIdentitiesItemRoles = <
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchIdentitiesItemRoles>>,
    TError,
    { id: string; data: IdentityRolesPatchRequestBody },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof patchIdentitiesItemRoles>>,
  TError,
  { id: string; data: IdentityRolesPatchRequestBody },
  TContext
> => {
  const mutationOptions = getPatchIdentitiesItemRolesMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * List entitlements the identity has.
 * @summary List entitlements the identity has.
 */
export const getIdentitiesItemEntitlements = (
  id: string,
  params?: GetIdentitiesItemEntitlementsParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<GetIdentityEntitlementsResponse>(
    { url: `/identities/${id}/entitlements`, method: "GET", params, signal },
    options,
  );
};

export const getGetIdentitiesItemEntitlementsQueryKey = (
  id: string,
  params?: GetIdentitiesItemEntitlementsParams,
) => {
  return [
    `/identities/${id}/entitlements`,
    ...(params ? [params] : []),
  ] as const;
};

export const getGetIdentitiesItemEntitlementsQueryOptions = <
  TData = Awaited<ReturnType<typeof getIdentitiesItemEntitlements>>,
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  id: string,
  params?: GetIdentitiesItemEntitlementsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getIdentitiesItemEntitlements>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getGetIdentitiesItemEntitlementsQueryKey(id, params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getIdentitiesItemEntitlements>>
  > = ({ signal }) =>
    getIdentitiesItemEntitlements(id, params, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getIdentitiesItemEntitlements>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetIdentitiesItemEntitlementsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getIdentitiesItemEntitlements>>
>;
export type GetIdentitiesItemEntitlementsQueryError = ErrorType<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary List entitlements the identity has.
 */
export const useGetIdentitiesItemEntitlements = <
  TData = Awaited<ReturnType<typeof getIdentitiesItemEntitlements>>,
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  id: string,
  params?: GetIdentitiesItemEntitlementsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getIdentitiesItemEntitlements>>,
        TError,
        TData
      >
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetIdentitiesItemEntitlementsQueryOptions(
    id,
    params,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * Add or remove entitlement to/from an identity.
 * @summary Add or remove entitlement to/from an identity.
 */
export const patchIdentitiesItemEntitlements = (
  id: string,
  identityEntitlementsPatchRequestBody: IdentityEntitlementsPatchRequestBody,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<void>(
    {
      url: `/identities/${id}/entitlements`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: identityEntitlementsPatchRequestBody,
    },
    options,
  );
};

export const getPatchIdentitiesItemEntitlementsMutationOptions = <
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchIdentitiesItemEntitlements>>,
    TError,
    { id: string; data: IdentityEntitlementsPatchRequestBody },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof patchIdentitiesItemEntitlements>>,
  TError,
  { id: string; data: IdentityEntitlementsPatchRequestBody },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof patchIdentitiesItemEntitlements>>,
    { id: string; data: IdentityEntitlementsPatchRequestBody }
  > = (props) => {
    const { id, data } = props ?? {};

    return patchIdentitiesItemEntitlements(id, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PatchIdentitiesItemEntitlementsMutationResult = NonNullable<
  Awaited<ReturnType<typeof patchIdentitiesItemEntitlements>>
>;
export type PatchIdentitiesItemEntitlementsMutationBody =
  IdentityEntitlementsPatchRequestBody;
export type PatchIdentitiesItemEntitlementsMutationError = ErrorType<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary Add or remove entitlement to/from an identity.
 */
export const usePatchIdentitiesItemEntitlements = <
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchIdentitiesItemEntitlements>>,
    TError,
    { id: string; data: IdentityEntitlementsPatchRequestBody },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof patchIdentitiesItemEntitlements>>,
  TError,
  { id: string; data: IdentityEntitlementsPatchRequestBody },
  TContext
> => {
  const mutationOptions =
    getPatchIdentitiesItemEntitlementsMutationOptions(options);

  return useMutation(mutationOptions);
};
