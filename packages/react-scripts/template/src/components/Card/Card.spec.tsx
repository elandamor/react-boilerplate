// Card.spec.tsx
import * as React from "react";
import { render } from "react-testing-library";

import Card from "./index";
import { ThemeProvider } from "styled-components";
import theme from '../../theme';

describe("Card", () => {
  it("should render without crashing", () => {
    render(
      <ThemeProvider theme={theme}>
        <Card />
      </ThemeProvider>
    );
  });

  it("should render with an image", () => {
    const props = {
      image: "image.png"
    };

    render(
      <ThemeProvider theme={theme}>
        <Card {...props} />
      </ThemeProvider>
    );
  });

  it("should render with an image and a title", () => {
    const props = {
      image: "image.png",
      title: "Title"
    };

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card {...props} />
      </ThemeProvider>
    );

    const titleNode = getByText(props.title);

    expect(titleNode).toBeDefined();
  });

  it("should render with an image, title and description", () => {
    const props = {
      image: "image.png",
      title: "Title",
      description: "This is a test description"
    };

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card {...props} />
      </ThemeProvider>
    );

    const titleNode = getByText(props.title);
    const descriptionNode = getByText(props.description);

    expect(titleNode).toBeDefined();
    expect(descriptionNode).toBeDefined();
  });
});
