import { type RenderOptions, render } from "@testing-library/react";
import React, { type ReactElement } from "react";

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
): ReturnType<typeof render> {
  return render(ui, {
    wrapper: (props) => <div {...props} />,
    ...options,
  });
}

export * from "@testing-library/react";
export { customRender as render };
