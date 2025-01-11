export class Utils {
  static urlFormatter(text: string) {
    return text.toLowerCase().trim().replace(/\s+/g, "-");
  }

  static getIdAndNameFromUrl(text: string) {
    if (!text) return;

    const parts = text.split("_");
    const code = parts[0];
    const name = parts[1];

    return {
      code: code,
      name: name
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()),
    };
  }
}
