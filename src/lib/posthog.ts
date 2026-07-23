import "posthog-js/dist/exception-autocapture";
import posthog from "posthog-js";

const token = import.meta.env.VITE_POSTHOG_TOKEN as string | undefined;
const apiHost = import.meta.env.VITE_POSTHOG_HOST as string | undefined;
const isConfigured = Boolean(token && apiHost);

if (token && apiHost) {
  posthog.init(token, {
    api_host: apiHost,
    capture_pageview: "history_change",
  });
  posthog.startExceptionAutocapture({
    capture_unhandled_errors: true,
    capture_unhandled_rejections: true,
    capture_console_errors: false,
  });
} else if (import.meta.env.DEV) {
  const missing = !token ? "VITE_POSTHOG_TOKEN" : "VITE_POSTHOG_HOST";
  throw new Error(
    `${missing} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missing} is configured`,
  );
}

export { isConfigured };
export default posthog;
