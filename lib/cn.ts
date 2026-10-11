/** Tiny className joiner — skips falsy values. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Converts a px value measured on a Figma reference box into container-query units. */
export function cq(px: number, ref: number, axis: "w" | "h" = "w"): string {
  return `${+((px / ref) * 100).toFixed(4)}cq${axis}`;
}
