import { lazy } from "react";

export const lazyComponent = (path: string) => lazy(() => import(`${path}`));
