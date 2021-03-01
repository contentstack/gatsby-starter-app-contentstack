/* eslint-disable import/prefer-default-export */

import { createDefaultTracker } from "@uniformdev/optimize-tracker-browser"
import intentManifest from "./intentManifest.json"

export const localTracker = createDefaultTracker({
  intentManifest,
  logLevelThreshold: process.env.NODE_ENV === "production" ? "error" : "info",
})
