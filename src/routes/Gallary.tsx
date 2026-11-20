import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/Gallary")({
  beforeLoad: () => {
    throw redirect({
      to: "/gallery",
      statusCode: 301,
    });
  },
  component: () => null,
});
