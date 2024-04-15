/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * Canonical OpenFGA Administration Product Compatibility API
 * The following specification outlines the API required for the FGA administration frontend to interact with an OpenFGA instance through a products API. This is an evolving specification as reflected in the version number.

#### Changelog
| Version | Notes |
|---|---|
| **0.0.8** | Implement response type as defined in [IAM Platform Admin UI HTTP Spec](https://docs.google.com/document/d/1ElV22e3mePGFPq8CaM3F3IkuyuOLNpjG7yYgtjvygf4/edit). |
| **0.0.7** | Added `/entitlements/raw` endpoint to split `/entitlements` responses. |
| **0.0.6** | Ensured compatibility with Orval Restful Client Generator. |
| **0.0.5** | Add filter parameter to top level collection `GET` requests. |
| **0.0.4** | Added pagination parameters to appropriate `GET` requests.<br />Changed a couple of `PUT`'s to `PATCH`'s to account for the possible subset returned from the paginated `GET`'s. |
| **0.0.3** | Added skeleton error responses for `400`, `401`, `404`, and `5XX` (`default`) |
| **0.0.2** | Added `GET /users/{id}/groups`<br />Added `GET /users/{id}roles`<br />Added `GET /users/{id}/entitlements`<br />Added `GET,PUT /groups/{id}/users`<br>Added `DELETE /groups/{id}/users/{userId}`<br />Added `GET /roles/{id}/entitlements`<br />Added `DELETE /roles/{id}/entitlements/{entitlementId}` |
| **0.0.1** | Initial dump |

 * OpenAPI spec version: 0.0.8
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
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import type {
  BadRequestResponse,
  DefaultResponse,
  GetUsersId200,
  GetUsersIdEntitlements200,
  GetUsersIdEntitlementsParams,
  GetUsersIdGroups200,
  GetUsersIdGroupsParams,
  GetUsersIdRoles200,
  GetUsersIdRolesParams,
  NotFoundResponse,
  UnauthorizedResponse,
  User,
} from "../api.schemas";

/**
 * @summary Get a single user.
 */
export const getUsersId = (
  id: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<GetUsersId200>> => {
  return axios.get(`/users/${id}`, options);
};

export const getGetUsersIdQueryKey = (id: string) => {
  return [`/users/${id}`] as const;
};

export const getGetUsersIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getUsersId>>,
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getUsersId>>, TError, TData>
    >;
    axios?: AxiosRequestConfig;
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetUsersIdQueryKey(id);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersId>>> = ({
    signal,
  }) => getUsersId(id, { signal, ...axiosOptions });

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getUsersId>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetUsersIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getUsersId>>
>;
export type GetUsersIdQueryError = AxiosError<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary Get a single user.
 */
export const useGetUsersId = <
  TData = Awaited<ReturnType<typeof getUsersId>>,
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  id: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getUsersId>>, TError, TData>
    >;
    axios?: AxiosRequestConfig;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetUsersIdQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Update a local user.
 */
export const patchUsersId = (
  id: string,
  user: User,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.patch(`/users/${id}`, user, options);
};

export const getPatchUsersIdMutationOptions = <
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchUsersId>>,
    TError,
    { id: string; data: User },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<
  Awaited<ReturnType<typeof patchUsersId>>,
  TError,
  { id: string; data: User },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof patchUsersId>>,
    { id: string; data: User }
  > = (props) => {
    const { id, data } = props ?? {};

    return patchUsersId(id, data, axiosOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PatchUsersIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof patchUsersId>>
>;
export type PatchUsersIdMutationBody = User;
export type PatchUsersIdMutationError = AxiosError<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary Update a local user.
 */
export const usePatchUsersId = <
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchUsersId>>,
    TError,
    { id: string; data: User },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationResult<
  Awaited<ReturnType<typeof patchUsersId>>,
  TError,
  { id: string; data: User },
  TContext
> => {
  const mutationOptions = getPatchUsersIdMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Remove a local user.
 */
export const deleteUsersId = (
  id: string,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<void>> => {
  return axios.delete(`/users/${id}`, options);
};

export const getDeleteUsersIdMutationOptions = <
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteUsersId>>,
    TError,
    { id: string },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteUsersId>>,
  TError,
  { id: string },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteUsersId>>,
    { id: string }
  > = (props) => {
    const { id } = props ?? {};

    return deleteUsersId(id, axiosOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type DeleteUsersIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteUsersId>>
>;

export type DeleteUsersIdMutationError = AxiosError<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary Remove a local user.
 */
export const useDeleteUsersId = <
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteUsersId>>,
    TError,
    { id: string },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteUsersId>>,
  TError,
  { id: string },
  TContext
> => {
  const mutationOptions = getDeleteUsersIdMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary List groups the user is a member of.
 */
export const getUsersIdGroups = (
  id: string,
  params?: GetUsersIdGroupsParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<GetUsersIdGroups200>> => {
  return axios.get(`/users/${id}/groups`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getGetUsersIdGroupsQueryKey = (
  id: string,
  params?: GetUsersIdGroupsParams,
) => {
  return [`/users/${id}/groups`, ...(params ? [params] : [])] as const;
};

export const getGetUsersIdGroupsQueryOptions = <
  TData = Awaited<ReturnType<typeof getUsersIdGroups>>,
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  id: string,
  params?: GetUsersIdGroupsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getUsersIdGroups>>,
        TError,
        TData
      >
    >;
    axios?: AxiosRequestConfig;
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetUsersIdGroupsQueryKey(id, params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getUsersIdGroups>>
  > = ({ signal }) => getUsersIdGroups(id, params, { signal, ...axiosOptions });

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getUsersIdGroups>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetUsersIdGroupsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getUsersIdGroups>>
>;
export type GetUsersIdGroupsQueryError = AxiosError<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary List groups the user is a member of.
 */
export const useGetUsersIdGroups = <
  TData = Awaited<ReturnType<typeof getUsersIdGroups>>,
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  id: string,
  params?: GetUsersIdGroupsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getUsersIdGroups>>,
        TError,
        TData
      >
    >;
    axios?: AxiosRequestConfig;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetUsersIdGroupsQueryOptions(id, params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary List roles the user is a member of.
 */
export const getUsersIdRoles = (
  id: string,
  params?: GetUsersIdRolesParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<GetUsersIdRoles200>> => {
  return axios.get(`/users/${id}/roles`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getGetUsersIdRolesQueryKey = (
  id: string,
  params?: GetUsersIdRolesParams,
) => {
  return [`/users/${id}/roles`, ...(params ? [params] : [])] as const;
};

export const getGetUsersIdRolesQueryOptions = <
  TData = Awaited<ReturnType<typeof getUsersIdRoles>>,
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  id: string,
  params?: GetUsersIdRolesParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getUsersIdRoles>>,
        TError,
        TData
      >
    >;
    axios?: AxiosRequestConfig;
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetUsersIdRolesQueryKey(id, params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersIdRoles>>> = ({
    signal,
  }) => getUsersIdRoles(id, params, { signal, ...axiosOptions });

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getUsersIdRoles>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetUsersIdRolesQueryResult = NonNullable<
  Awaited<ReturnType<typeof getUsersIdRoles>>
>;
export type GetUsersIdRolesQueryError = AxiosError<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary List roles the user is a member of.
 */
export const useGetUsersIdRoles = <
  TData = Awaited<ReturnType<typeof getUsersIdRoles>>,
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  id: string,
  params?: GetUsersIdRolesParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getUsersIdRoles>>,
        TError,
        TData
      >
    >;
    axios?: AxiosRequestConfig;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetUsersIdRolesQueryOptions(id, params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary List entitlements the user is a member of.
 */
export const getUsersIdEntitlements = (
  id: string,
  params?: GetUsersIdEntitlementsParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<GetUsersIdEntitlements200>> => {
  return axios.get(`/users/${id}/entitlements`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getGetUsersIdEntitlementsQueryKey = (
  id: string,
  params?: GetUsersIdEntitlementsParams,
) => {
  return [`/users/${id}/entitlements`, ...(params ? [params] : [])] as const;
};

export const getGetUsersIdEntitlementsQueryOptions = <
  TData = Awaited<ReturnType<typeof getUsersIdEntitlements>>,
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  id: string,
  params?: GetUsersIdEntitlementsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getUsersIdEntitlements>>,
        TError,
        TData
      >
    >;
    axios?: AxiosRequestConfig;
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetUsersIdEntitlementsQueryKey(id, params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getUsersIdEntitlements>>
  > = ({ signal }) =>
    getUsersIdEntitlements(id, params, { signal, ...axiosOptions });

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getUsersIdEntitlements>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetUsersIdEntitlementsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getUsersIdEntitlements>>
>;
export type GetUsersIdEntitlementsQueryError = AxiosError<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary List entitlements the user is a member of.
 */
export const useGetUsersIdEntitlements = <
  TData = Awaited<ReturnType<typeof getUsersIdEntitlements>>,
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  id: string,
  params?: GetUsersIdEntitlementsParams,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<typeof getUsersIdEntitlements>>,
        TError,
        TData
      >
    >;
    axios?: AxiosRequestConfig;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetUsersIdEntitlementsQueryOptions(
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
