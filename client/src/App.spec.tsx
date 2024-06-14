import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should render", () => {
    expect(screen.getByText("MFE Testing Tool")).toBeInTheDocument();
  });
});
