import { ModularTable, Spinner } from "@canonical/react-components";
import { useMemo, type JSX } from "react";
import type { Column } from "react-table";

import { useGetUsers } from "api/users/users";
import Content from "components/Content";
import ErrorNotification from "components/ErrorNotification";

import { Label } from "./types";

const COLUMN_DATA: Column[] = [
  {
    Header: "first name",
    accessor: "firstName",
  },
  {
    Header: "last name",
    accessor: "lastName",
  },
  {
    Header: "added by",
    accessor: "addedBy",
  },
  {
    Header: "email",
    accessor: "email",
  },
  {
    Header: "source",
    accessor: "source",
  },
];

const Users = () => {
  const { data, isFetching, isError, error, refetch } = useGetUsers();

  const tableData = useMemo(() => {
    const users = data?.data.data;
    if (!users) {
      return [];
    }
    const tableData = users.map((user) => ({
      firstName: user?.firstName ?? "Unknown",
      lastName: user?.lastName ?? "Unknown",
      addedBy: user.addedBy,
      email: user.email,
      source: user.source,
    }));
    return tableData;
  }, [data]);

  const generateContent = (): JSX.Element => {
    if (isFetching) {
      return <Spinner text={Label.FETCHING_USERS} />;
    } else if (isError) {
      return (
        <ErrorNotification
          message={Label.FETCHING_USERS_ERROR}
          error={error?.message ?? ""}
          onRefetch={() => void refetch()}
        />
      );
    } else {
      return (
        <ModularTable
          columns={COLUMN_DATA}
          data={tableData}
          emptyMsg={Label.NO_USERS}
        />
      );
    }
  };

  return <Content title="Users">{generateContent()}</Content>;
};

export default Users;
