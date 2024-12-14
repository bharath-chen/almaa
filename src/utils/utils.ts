export class Utils {
  static urlFormatter(text: string) {
    return text.toLowerCase().trim().replace(/\s+/g, "-");
  }
}
