/**
 * @param {string} message
 * @param {any} context
 */
const log = (message, context) => context
    ? console.log(message, context)
    : console.log(message);

/**
 * @param array
 */
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


/**
 * @param {Function[]} modules
 */
const init_modules = (modules) => {
    document.addEventListener('alpine:init', () => {
        log('Start initializing alpine modules');
        modules.forEach(module => {
            try {
                log(`Start: ${module.name}`);
                module();
                log(`Complete: ${module.name}`);
            }
            catch (e) {
                log(`Failed initializing: ${module.name}`, e);
            }
        });
        log('Complete initializing alpine modules');
    });
}

const masonry = () => Alpine.data('masonry', () => ({
    init() {
        this.loadImages();
    },

    loadImages() {
        const providers = {
            ponyImages: async () => new Promise((resolve, reject) => {
                axios.get('https://ponyapi.net/v1/character/all', {
                    params: {offset: this.offset, limit: this.limit}
                })
                    .then(({ data }) => {
                        const images = data.data.reduce((accum, character) => {
                            const images = character.image.map((src, i) => ({
                                src: src,
                                alt: `${character.name} image ${i + 1}`
                            }));

                            return [...accum, ...images];
                        }, []);

                        resolve(images);
                    })
                    .catch(reject);
            }),
        }

        this.isLoading = true;
        providers.ponyImages()
            .then((images) => {
                shuffle(images)
                this.items = [...this.items ?? [], ...images];
                this.offset = this.offset + this.limit;
                setTimeout(() => this.$dispatch('reload:masonry'), 500);
            })
            .finally(() => {
                this.isLoading = false;
            });
    },

    offset: 0,
    limit: 10,

    items: null,
    isLoading: false,
}));

init_modules([
    masonry
]);