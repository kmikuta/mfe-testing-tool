import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Appbar } from "./Appbar";

describe("Appbar", () => {
  beforeEach(() => {
    render(<Appbar />);
  });

  it("should render title", () => {
    expect(screen.getByText("MFE Testing Tool")).toBeInTheDocument();
  });
});
