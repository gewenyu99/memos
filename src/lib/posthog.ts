import posthog from "posthog-js";

const posthogKey = import.meta.env.VITE_POSTHOG_KEY as string | undefined;
const posthogHost = import.meta.env.VITE_POSTHOG_HOST as string | undefined;

if (posthogKey && posthogHost) {
  posthog.init(posthogKey, {
    api_host: posthogHost,
  });
} else if (import.meta.env.DEV) {
  throw new Error(
    "VITE_POSTHOG_KEY and VITE_POSTHOG_HOST variables required by PostHog are missing or un-configured, this causes events to be silently missed. This error stops appearing once both variables are configured",
  );
}

export default posthog;
