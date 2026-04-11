/**
 * Replaces {key} placeholders in a template string with values from a vars object.
 * e.g. interpolate("Hello {city}!", { city: "Pomona" }) => "Hello Pomona!"
 */
export function interpolate(
  template: string,
  vars: Record<string, string>
): string {
  return template.replace(/\{([^}]+)\}/g, (_, key) => vars[key] ?? `{${key}}`);
}
