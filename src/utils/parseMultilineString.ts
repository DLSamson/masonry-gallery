export default function parseMultilineString(text: string | undefined): string[] {
    if (!text) return [];

    return text
        .split('\n')
        .map(s => s.trim())
        .filter(Boolean);
}