/**
 * Generated by orval v6.28.2 🍺
 * Do not edit manually.
 * Canonical OpenFGA Administration Product Compatibility API
 * The following specification outlines the API required for the FGA administration frontend to interact with an OpenFGA instance through a products API. This is an evolving specification as reflected in the version number.

 * OpenAPI spec version: 0.0.10
 */
import { useQuery } from "@tanstack/react-query";
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { customInstance } from "../../api-utils/mutator/custom-instance";
import type { ErrorType } from "../../api-utils/mutator/custom-instance";
import type {
  BadRequestResponse,
  DefaultResponse,
  GetResourcesParams,
  GetResourcesResponse,
  NotFoundResponse,
  UnauthorizedResponse,
} from "../api.schemas";

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * Get the list of available resources.
 * @summary Get the list of available resources.
 */
export const getResources = (
  params?: GetResourcesParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<GetResourcesResponse>(
    { url: `/resources`, method: "GET", params, signal },
    options,
  );
};

export const getGetResourcesQueryKey = (params?: GetResourcesParams) => {
  return [`/resources`, ...(params ? [params] : [])] as const;
};

export const getGetResourcesQueryOptions = <
  TData = Awaited<ReturnType<typeof getResources>>,
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  params?: GetResourcesParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getResources>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetResourcesQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getResources>>> = ({
    signal,
  }) => getResources(params, requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getResources>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetResourcesQueryResult = NonNullable<
  Awaited<ReturnType<typeof getResources>>
>;
export type GetResourcesQueryError = ErrorType<
  BadRequestResponse | UnauthorizedResponse | NotFoundResponse | DefaultResponse
>;

/**
 * @summary Get the list of available resources.
 */
export const useGetResources = <
  TData = Awaited<ReturnType<typeof getResources>>,
  TError = ErrorType<
    | BadRequestResponse
    | UnauthorizedResponse
    | NotFoundResponse
    | DefaultResponse
  >,
>(
  params?: GetResourcesParams,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getResources>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetResourcesQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};
