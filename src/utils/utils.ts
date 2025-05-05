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

  static transformToTitleCase(input: string) {
    if (input === "bone--muscular-function-ortho-care") {
      return "Bone & Muscular Function (Ortho Care)";
    }

    return input
      .split("-") // Split by hyphens
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join with spaces
  }
}
