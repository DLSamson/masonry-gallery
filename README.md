# Masonry Gallery

This is my simple masonry gallery made with TypeScript, React, Motion and Vite.

You can click on image to zoom it or to get some more information

I tried to recreate an example from
motion [documentation](https://motion.dev/docs/react-layout-animations#how-to-animate-layout-changes) `IOS App Store`

## Image Providers

Here are some services I used to get images

[PonyApi](https://ponyapi.net')

[Nekosia](https://api.nekosia.cat)

## How to add your own providers?

Create a new class in `src/providers` that implements `src/interfaces/ItemsProvider` interface.

Register a new provider in `src/stores/RootStore`.

Add button to new `src/componenets/Header`

## How to add new info card?

Create a new info card in `src/components/Modal/InfoCard`

Add a new type guard function in `src/utils/typeGuards`

Add a new render to `src/components/Modal/RenderInfoCard`

## Conclusion

Until you follow existing types and interfaces you can easily add new image providers.

If you liked this and added a new image provider, I would like to see it, please create a merge request.