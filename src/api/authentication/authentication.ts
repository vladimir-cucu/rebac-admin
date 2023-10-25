/**
 * Generated by orval v6.18.1 🍺
 * Do not edit manually.
 * Canonical OpenFGA Administration Product Compatibility API
 * The following specification outlines the API required for the FGA administration frontend to interact with an OpenFGA instance through a products API. This is an evolving specification as reflected in the version number.

#### Changelog
| Version | Notes |
|---|---|
| **0.0.6** | Ensured compatibility with Orval Restful Client Generator. |
| **0.0.5** | Add filter parameter to top level collection `GET` requests. |
| **0.0.4** | Added pagination parameters to appropriate `GET` requests.<br />Changed a couple of `PUT`'s to `PATCH`'s to account for the possible subset returned from the paginated `GET`'s. |
| **0.0.3** | Added skeleton error responses for `400`, `401`, `404`, and `5XX` (`default`) |
| **0.0.2** | Added `GET /users/{id}/groups`<br />Added `GET /users/{id}roles`<br />Added `GET /users/{id}/entitlements`<br />Added `GET,PUT /groups/{id}/users`<br>Added `DELETE /groups/{id}/users/{userId}`<br />Added `GET /roles/{id}/entitlements`<br />Added `DELETE /roles/{id}/entitlements/{entitlementId}` |
| **0.0.1** | Initial dump |

 * OpenAPI spec version: 0.0.6
 */
import { useQuery, useMutation } from "@tanstack/react-query";
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from "@tanstack/react-query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

import type {
  GetAuthenticationProviders200Item,
  BadRequestResponse,
  UnauthorizedResponse,
  NotFoundResponse,
  DefaultResponse,
  GetAuthenticationProvidersParams,
  IdentityProvider,
  GetAuthenticationParams,
} from "../api.schemas";

/**
 * @summary Returns the list of supported identity providers.
 */
export const getAuthenticationProviders = (
  params?: GetAuthenticationProvidersParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<GetAuthenticationProviders200Item[]>> => {
  return axios.get(`/authentication/providers`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getGetAuthenticationProvidersQueryKey = (
  params?: GetAuthenticationProvidersParams,
) => {
  return [`/authentication/providers`, ...(params ? [params] : [])] as const;
};

export const getGetAuthenticationProvidersQueryOptions = <
  TData = Awaited<ReturnType<typeof getAuthenticationProviders>>,
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  params?: GetAuthenticationProvidersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getAuthenticationProviders>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAuthenticationProvidersQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getAuthenticationProviders>>
  > = ({ signal }) =>
    getAuthenticationProviders(params, { signal, ...axiosOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getAuthenticationProviders>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetAuthenticationProvidersQueryResult = NonNullable<
  Awaited<ReturnType<typeof getAuthenticationProviders>>
>;
export type GetAuthenticationProvidersQueryError = AxiosError<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary Returns the list of supported identity providers.
 */
export const useGetAuthenticationProviders = <
  TData = Awaited<ReturnType<typeof getAuthenticationProviders>>,
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  params?: GetAuthenticationProvidersParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getAuthenticationProviders>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetAuthenticationProvidersQueryOptions(
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
 * @summary List authentication methods.
 */
export const getAuthentication = (
  params?: GetAuthenticationParams,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<IdentityProvider[]>> => {
  return axios.get(`/authentication`, {
    ...options,
    params: { ...params, ...options?.params },
  });
};

export const getGetAuthenticationQueryKey = (
  params?: GetAuthenticationParams,
) => {
  return [`/authentication`, ...(params ? [params] : [])] as const;
};

export const getGetAuthenticationQueryOptions = <
  TData = Awaited<ReturnType<typeof getAuthentication>>,
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  params?: GetAuthenticationParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getAuthentication>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  },
) => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getGetAuthenticationQueryKey(params);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getAuthentication>>
  > = ({ signal }) => getAuthentication(params, { signal, ...axiosOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getAuthentication>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetAuthenticationQueryResult = NonNullable<
  Awaited<ReturnType<typeof getAuthentication>>
>;
export type GetAuthenticationQueryError = AxiosError<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary List authentication methods.
 */
export const useGetAuthentication = <
  TData = Awaited<ReturnType<typeof getAuthentication>>,
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  params?: GetAuthenticationParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getAuthentication>>,
      TError,
      TData
    >;
    axios?: AxiosRequestConfig;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetAuthenticationQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Register a new authentication method.
 */
export const postAuthentication = (
  identityProvider: IdentityProvider,
  options?: AxiosRequestConfig,
): Promise<AxiosResponse<IdentityProvider>> => {
  return axios.post(`/authentication`, identityProvider, options);
};

export const getPostAuthenticationMutationOptions = <
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postAuthentication>>,
    TError,
    { data: IdentityProvider },
    TContext
  >;
  axios?: AxiosRequestConfig;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postAuthentication>>,
  TError,
  { data: IdentityProvider },
  TContext
> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postAuthentication>>,
    { data: IdentityProvider }
  > = (props) => {
    const { data } = props ?? {};

    return postAuthentication(data, axiosOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostAuthenticationMutationResult = NonNullable<
  Awaited<ReturnType<typeof postAuthentication>>
>;
export type PostAuthenticationMutationBody = IdentityProvider;
export type PostAuthenticationMutationError = AxiosError<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary Register a new authentication method.
 */
export const usePostAuthentication = <
  TError = AxiosError<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postAuthentication>>,
    TError,
    { data: IdentityProvider },
    TContext
  >;
  axios?: AxiosRequestConfig;
}) => {
  const mutationOptions = getPostAuthenticationMutationOptions(options);

  return useMutation(mutationOptions);
};
