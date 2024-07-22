import {
  Button,
  Columns,
  Container,
  Muted,
  render,
  Text,
  TextboxNumeric,
  VerticalSpace,
} from "@create-figma-plugin/ui";
import { emit, on } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { useCallback, useState } from "preact/hooks";

import { CloseHandler, CreateRectanglesHandler } from "./types";

function Plugin() {
  const handlePush = function () {
    // emit("GET_DESCTIPTIONS");
  };

  const handlePull = function () {
    // emit<CloseHandler>("CLOSE");
  };

  const handleListComponents = function () {
    emit("LIST_COMPONENTS");
  };

  on("ELEMENTS", (elements) => {
    console.log(elements);
  });

  return (
    <Container space="medium">
      <VerticalSpace space="extraLarge" />
      <Button fullWidth onClick={handleListComponents}>
        List components
      </Button>
      <VerticalSpace space="medium" />
      <Button fullWidth onClick={handlePush}>
        Push
      </Button>
      <VerticalSpace space="medium" />
      <Button fullWidth onClick={handlePull} secondary>
        Pull
      </Button>
      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin);
