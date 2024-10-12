# Components

## [Server component]()

React Server Components allow you to write UI that can be rendered and optionally cached on the server. In Next.js, the rendering work is further split by route segments to enable streaming and partial rendering, and there are three different server rendering strategies:

* [Static Rendering](https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default)
* [Dynamic Rendering](https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering)
* [Streaming
  ](https://nextjs.org/docs/app/building-your-application/rendering/server-components#streaming)

#### Benefits of Server Rendering

* **Data Fetching**
* **Security:**
* **Caching:**
* **Performance:**
* **Initial Page Load and [First Contentful Paint (FCP)](https://web.dev/fcp/):**
* **Search Engine Optimization and Social Network Shareability:**
* **Streaming:**


## [Client component]()

Client Components allow you to write interactive UI that is [prerendered on the server](https://github.com/reactwg/server-components/discussions/4) and can use client JavaScript to run in the browser. Client components can handle browser event like **click, hover, change, input**...

#### Client Rendering

* **Interactivity** : Client Components can use state, effects, and event listeners, meaning they can provide immediate feedback to the user and update the UI.
* **Browser APIs** : Client Components have access to browser APIs, like [geolocation](https://developer.mozilla.org/docs/Web/API/Geolocation_API) or [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage).

#### Using Client Component

To use Client Components, you can add the React [`"use client"` directive](https://react.dev/reference/react/use-client) at the top of a file, above your imports.

`"use client"` is used to declare a [boundary](https://nextjs.org/docs/app/building-your-application/rendering#network-boundary) between a Server and Client Component modules. This means that by defining a `"use client"` in a file, all other modules imported into it, including child components, are considered part of the client bundle.

    ![1728631044341](image/README/1728631044341.png)
