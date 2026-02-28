import { AlertFeature } from "./types.js";

export const formatAlert = (stateCode: string, feature: AlertFeature): string => {
  const props = feature.properties;
  return [
    `Active alerts for state: ${stateCode}`,
    `Event: ${props.event || "Unknown"}`,
    `Area: ${props.areaDesc || "Unknown"}`,
    `Severity: ${props.severity || "Unknown"}`,
    `Status: ${props.status || "Unknown"}`,
    `Headline: ${props.headline || "No headline"}`,
    "---",
  ].join("\n");
}
