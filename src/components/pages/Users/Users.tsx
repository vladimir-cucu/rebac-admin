import {
  ModularTable,
  Spinner,
  Button,
  ButtonAppearance,
} from "@canonical/react-components";
import { useMemo, type JSX } from "react";

import { useGetIdentities } from "api/identities/identities";
import Content from "components/Content";
import ErrorNotification from "components/ErrorNotification";
import { usePanel } from "hooks";
import { Endpoint } from "types/api";

import AddUserPanel from "./AddUserPanel";
import { Label } from "./types";

const COLUMN_DATA = [
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
  const { data, isFetching, isError, error, refetch } = useGetIdentities();
  const { generatePanel, openPanel } = usePanel<{}>(
    (closePanel, _data, setPanelWidth) => (
      <AddUserPanel close={closePanel} setPanelWidth={setPanelWidth} />
    ),
  );

  const tableData = useMemo<Record<string, string>[]>(() => {
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

  const generateCreateUserButton = () => (
    <Button appearance={ButtonAppearance.POSITIVE} onClick={openPanel}>
      {Label.ADD}
    </Button>
  );

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
          className="audit-logs-table"
          columns={COLUMN_DATA}
          data={tableData}
          emptyMsg={Label.NO_USERS}
        />
      );
    }
  };

  return (
    <Content
      title="Users"
      endpoint={Endpoint.IDENTITIES}
      controls={<>{generateCreateUserButton()}</>}
    >
      {generateContent()}
      {generatePanel()}
    </Content>
  );
};

export default Users;
