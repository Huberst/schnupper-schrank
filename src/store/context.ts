import React from "react";
import { AppStore } from "./app-store";

export const AppCtx = React.createContext(AppStore.getState())
