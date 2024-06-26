import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { http, delay } from "msw";
import { setupServer } from "msw/node";

import {
  getGetRolesMockHandler,
  getGetRolesMockHandler404,
  getGetRolesResponseMock,
} from "api/roles/roles.msw";
import { TestId as NoEntityCardTestId } from "components/NoEntityCard";
import { getGetActualCapabilitiesMock } from "mocks/capabilities";
import { renderComponent } from "test/utils";
import { Endpoint } from "types/api";

import Roles from "./Roles";
import { Label as RolesLabel } from "./types";

const mockRolesData = getGetRolesResponseMock({
  data: [{ name: "global" }, { name: "administrator" }, { name: "viewer" }],
});
const mockApiServer = setupServer(
  getGetRolesMockHandler(mockRolesData),
  ...getGetActualCapabilitiesMock(),
);

beforeAll(() => {
  mockApiServer.listen();
});

afterEach(() => {
  mockApiServer.resetHandlers();
});

afterAll(() => {
  mockApiServer.close();
});

test("should display spinner on mount", async () => {
  mockApiServer.use(
    http.get(Endpoint.ROLES, async () => {
      await delay(100);
    }),
  );
  renderComponent(<Roles />);
  expect(
    await screen.findByText(RolesLabel.FETCHING_ROLES),
  ).toBeInTheDocument();
});

test("should display correct role data after fetching roles", async () => {
  renderComponent(<Roles />);
  const rows = await screen.findAllByRole("row");
  // The first row contains the column header and the next 3 rows contain
  // role data.
  expect(rows).toHaveLength(4);
  expect(within(rows[1]).getAllByRole("cell")[1]).toHaveTextContent("global");
  expect(within(rows[2]).getAllByRole("cell")[1]).toHaveTextContent(
    "administrator",
  );
  expect(within(rows[3]).getAllByRole("cell")[1]).toHaveTextContent("viewer");
});

test("should display no roles data when no roles are available", async () => {
  mockApiServer.use(
    getGetRolesMockHandler(getGetRolesResponseMock({ data: [] })),
  );
  renderComponent(<Roles />);
  const noRolesCard = await screen.findByTestId(
    NoEntityCardTestId.NO_ENTITY_CARD,
  );
  expect(
    within(noRolesCard).getByText(RolesLabel.NO_ROLES),
  ).toBeInTheDocument();
});

test("should display error notification and refetch data", async () => {
  mockApiServer.use(getGetRolesMockHandler404());
  renderComponent(<Roles />);
  const rolesErrorNotification = await screen.findByText(
    RolesLabel.FETCHING_ROLES_ERROR,
    { exact: false },
  );
  expect(rolesErrorNotification.childElementCount).toBe(1);
  const refetchButton = rolesErrorNotification.children[0];
  mockApiServer.use(getGetRolesMockHandler(mockRolesData));
  expect(refetchButton).toHaveTextContent("refetch");
  await userEvent.click(refetchButton);
  expect(
    await screen.findByText(RolesLabel.FETCHING_ROLES),
  ).toBeInTheDocument();
  const rows = await screen.findAllByRole("row");
  expect(rows).toHaveLength(4);
});
