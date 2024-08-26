### 🗺️ Architecture

The entire website is server rendered (using next app router) with one static route i.e. the **root** and a **dynamic route** which renders the country details page. API call to [restcountries](https://restcountries.com/) is made on the server, we only use `/all` endpoint and ruse the **cached response** (using `next/cache`) to get the country details.

Search is a client side function the search term is shared via react context.

> Components are co-located with the routes, other helper code is in the lib directory.

### ✍🏻 Considerations

- Data is used as is so operations of finding countries and bordering countries are O(n), can be improved with a map
- Even while we're using `next/cache` on the API it seems to not work perfectly since its an unstable api (app router itself seems a little bleeding edge right now), a custom endpoint with self implemented caching would perform better at this point
- While the list of countries is still fairly small using a **virtual list** will be more performant for mobile
- Using a store instead of context although with the current feature-set it is not required.
- Client side rendering for details page will be faster with the same amount of effort, I opted for server render for better SEO
- Accessibility is not perfect

### Libraries used
- Next.js 15 (React 18)
- TailwindCSS