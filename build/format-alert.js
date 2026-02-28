export const formatAlert = (stateCode, feature) => {
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
};
