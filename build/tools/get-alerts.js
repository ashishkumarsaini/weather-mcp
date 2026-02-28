import z from "zod";
import { NWS_API_BASE } from "../constants.js";
import { makeNSWRequest } from "../weather-nsw-request.js";
import { formatAlert } from "../format-alert.js";
export const getAlertOptions = {
    description: "Get weather alert for a state",
    inputSchema: {
        state: z.string().length(2).describe("Two letters state code")
    }
};
export const getAlert = async ({ state }) => {
    const stateCode = state.toUpperCase();
    const alertsUrl = `${NWS_API_BASE}/alerts?area=${stateCode}`;
    const alertsData = await makeNSWRequest(alertsUrl);
    if (!alertsData) {
        return {
            content: [
                {
                    type: "text",
                    text: "Failed to retrieve alerts data",
                },
            ],
        };
    }
    const features = alertsData.features || [];
    if (features.length === 0) {
        return {
            content: [
                {
                    type: "text",
                    text: `No active alerts for ${stateCode}`,
                },
            ],
        };
    }
    const formattedAlerts = features.map(formatAlert);
    const alertsText = `Active alerts for ${stateCode}:\n\n${formattedAlerts.join("\n")}`;
    return {
        content: [
            {
                type: "text",
                text: alertsText,
            },
        ],
    };
};
