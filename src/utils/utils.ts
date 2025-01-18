export class Utils {
  static urlFormatter(text: string) {
    return text.toLowerCase().trim().replace(/\s+/g, "-");
  }

  static getIdAndNameFromUrl(text: string) {
    if (!text) return;

    const hypenIndex = text.indexOf("-");
    const code = text.slice(0, hypenIndex);
    const name = text.slice(hypenIndex + 1);

    return {
      code: code,
      name: name
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase()),
    };
  }
}
