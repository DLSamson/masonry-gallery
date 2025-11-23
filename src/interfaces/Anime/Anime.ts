export default interface Anime {
    id: number;
    image: {
        original: { url: string },
        compressed: { url: string }
    };
}