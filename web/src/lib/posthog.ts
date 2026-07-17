import posthog from "posthog-js";

const apiKey = import.meta.env.VITE_POSTHOG_KEY;
const apiHost = import.meta.env.VITE_POSTHOG_HOST;

if (!apiKey || !apiHost) {
  throw new Error("VITE_POSTHOG_KEY and VITE_POSTHOG_HOST must be configured");
}

posthog.init(apiKey, {
  api_host: apiHost,
  capture_pageview: "history_change",
  capture_exceptions: {
    capture_unhandled_errors: true,
    capture_unhandled_rejections: true,
    capture_console_errors: false,
  },
  defaults: "2026-05-30",
});

export default posthog;
