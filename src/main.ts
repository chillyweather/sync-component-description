import { on, emit, showUI } from "@create-figma-plugin/utilities";

const TOOLS_PAGE_NAME = "⚙️ Internal tools";

const isInvalid = (element: ComponentNode | ComponentSetNode) => {
  return (
    element.parent?.name === TOOLS_PAGE_NAME ||
    element.name.startsWith(".") ||
    element.name.toLocaleLowerCase() === "icons" ||
    element.parent?.type === "COMPONENT_SET"
  );
};
export default function () {
  const result: { name: string; id: string }[] = [];
  on("LIST_COMPONENTS", () => {
    const elements = figma.root
      .findAllWithCriteria({
        types: ["COMPONENT_SET", "COMPONENT"],
      })
      .filter((componentSet) => !isInvalid(componentSet));
    elements.forEach((componentSet) => {
      result.push({
        name: componentSet.name,
        id: componentSet.id,
      });
    });
    emit("ELEMENTS", result);
  });
  showUI({
    height: 186,
    width: 240,
  });
}
