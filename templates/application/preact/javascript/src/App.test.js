import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import { App } from "./App";


describe("App tests", () => {
  it("render the app", () => {
    render(<App />);
    expect(screen.getByText("hello fresh")).toBeDefined();
  });
});
