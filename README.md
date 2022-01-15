A simple web application that allows users to view images from NASA's public API.

<img src="nasa-image-search.gif" width="600" />

Uses:

- Create React App - Typescript for scaffold
- React Router 5 for routing
- Material UI for (some) styling
- RTK (Redux Toolkit) Query for data fetching and caching
- React Testing Library for tests
- MSW (Mock Service Worker) to mock network requests
- Netlify for deployment - see https://wonderful-mcnulty-1a42b6.netlify.app/

### Instructions

From the project directory:

1. Use `node v16.13.2`, or run:

   ```
   nvm use
   ```

2. Install dependencies

   ```
   npm install
   ```

3. To run locally

   ```
   npm start
   ```

   This runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You'll also see any lint errors in the console.

4. To run the tests

   ```
   npm test
   ```

   Launches the test runner in interactive watch mode. There's only one set of tests sadly!

5. To create a production build

   ```
   npm run build
   ```

   Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## My Learnings

### Things that went well

- Enjoyable little project - good opportunity to showcase skills
- Appreciated the wireframes and instructions in the brief - nice and clear
- Appreciated that you didn't require a full set of tests (for my only tests - which are integration-style as recommended by the great Kent C Dodds haha, see search-page.test.tsx)
- Create react app generates a scaffold easily, with most things you need
- Material UI sped things up a bit initially
- RTK (Redux Toolkit) Query seems amazing - look at the network requests in the dev tools - if you re-visit a search you've recently made, it'll use the cache instead of re-sending the request
- It's somewhat responsive
- The subtle CSS animations on hover on the search results are quite pleasing
- I've handled unrecognised routes
- I deployed it to netlify so I could test it on my mobile - that was a surprisingly seamless experience
- All pages score 100% for accessibility in Lighthouse
- The architecture is okay, I think - should be easy enough to see how it's composed

### Things that didn't go so well

- My submission is all right but I don't consider it great. There are subtleties to this app that make it harder to implement than it initially seems - I've tried to explain what I would have liked to have done below. Ordinarily, I wouldn't submit anything that didn't have at least the MUST DOs completed, but I've run out of time! Unfortunately this meant I couldn't make it as beautiful or as responsive as I hoped.
- In hindsight, it might have been nicer to showcase my own CSS skills and use something like styled-components instead of Material UI - would also avoid global scope issues
- It took me a long time to render the search results in a way I was somewhat happy with. I tried Flexbox, CSS Grid, Material UI's Masonry ImageList, but in the end I had the best results (or least bad) using CSS columns (new discovery for me!)
- I experimented with using redux to store more state, e.g. the searchInput value, but it was actually a worse solution due to the intricacies around the user interaction, and not wanting to trigger requests every time the user typed a letter (although this could be useful later for more sophisticated features like autosuggest)
- I was very puzzled when testing for accessibility in Firefox why my tab navigation wasn't working - this stumped me for quite some time until I realised that it was a known Firefox issue which could be resolved via my Mac system settings
- I tried to create a metadata-table which sort of works but some images have more metadata than others and I wasn't sure how to (easily) resolve the TypeScript issues this caused unless I did a lot of manual typing! I've left the code for the table in but I commented out the render in the end. This is the only reason the asset page does the data fetching rather than the asset component, because I was feeding the data down to both. I guess if I rendered the metadata table conditionally, it could then do its own data fetching so that's a probable re-factor for later.
- Trying out new, unfamiliar tech, e.g. RTK Query (for data fetching and caching) and react-router-6 (which offers composable routes via a single config tree - it's so nice). Although this was fascinating and seemed to work seamlessly in the browser (giving me false confidence), when it came to writing tests, I spent probably 15+ hours (no exaggeration) trying to make it work (but I could not for the life of me render the path and show the correct component), before resorting to downgrading react-router to v5. LEARNINGS: Don't leave tests till last - definitely not (I've been bitten by this before tbh). And also - maybe wait a while before using brand new tech otherwise when you google errors or look for examples (react testing library, in particular), there won't be any/many.
- I made some mistakes around the data fetching before I properly introduced routes, which caused a mismatch in the experience when you hit 'back' from the asset page, i.e. it didn't re-display your search results, and the search bar was blank. Realised I needed to fetch the data based on the presence of the query param. Combined with my issues with react-router and the amount of re-factoring this required, this ended up taking a lot of time to get right
- It's lonely coding on your own. Normally if I've been stuck on something for more than 30-60 mins, I'd reach out to another engineer to rubber duck it or canvas their experience, but in this case I wasn't able to - sad times :(

### Things to be improved

Oh there is SO MUCH I would like to improve about this.

#### MUST DO

- Do some research to understand user needs and goals - what type of person would use a site like this and to what end? How would that inform how the site works? For example, if it's for students doing a project, maybe they'd like to include the materials in their work - so we'd need to include content if / how that's permitted. If it's for researchers, how does it help them? What more could we do to help?
- Finish tests - gives confidence when re-factoring and helps others understand what the app does
- Handle no results being returned
- Handle errors better
- Handle failed images (can put in a fallback using something like react-image)
- Handle missing metadata on asset page, e.g. sometimes the XMP:Title and XMP:Description aren't there
- Handle large responses in search results, e.g. add in pagination or infinite scroll
- Handle whitespace in search input appropriately, i.e. it may need to be trimmed on edges
- Sanitise search input for security reasons to avoid code injections
- Check how semantic the elements are
- Do full manual accessibility audit including using a screen reader

#### SHOULD DO

- Either make better use of Material UI's theming and responsive design or remove it entirely. Either way, use CSS-in-JS.
- Better responsive design - it's passable but not great, e.g. the search bar doesn't work well on mobile - it's too small, and the image on the asset page on mobile needs to be bigger
- Research best practice on whether or not the search should submit when you press enter, e.g. on a mobile - it feels weird that it doesn't
- Better background - it's nice to have a space-themed background (I just put that there temporarily at the start), but it's distracting to see that behind the search results and it's getting distorted / stretched - it would be better to make that part pure black
- Related to this - visually differentiate the homepage and the search page - the reason I have a separate component for the homepage is because I wanted to do a Google style search page where the bar is in the middle (with a nice background image), and you see a different looking page (with a black background) when you go to results
- Fix the small bug in the CSS transform when you hover over a result in the top row
- I care a LOT about design and would not make this live to users in its current format. But I couldn't justify spending more time on that aspect when I had no working tests, and that part de-railed me

#### NICE TO DO

- Fix TypeScript issue with asset metadata being variable
- Make the metadata visible on-demand, perhaps via a button, and render nicely in a modal or other - then make it (and the asset component) do their own data fetching so the asset page doesn't have this responsibility
- Handle different types of media, e.g. video and audio, and allow user to search for these
- Make use of the keywords to keep the user engaged / exploring related images
- Add related images to the asset page so the user can have a look at those
- Consider adding in autosuggest once the user has typed more than 3 characters in the input box
- Add in opengraph metadata for social sharing
- Put in an easter egg, e.g. play the x-files soundtrack if you search for 'aliens' :)

### Accessibility Checklist

All pages score 100% for accessibility using Lighthouse's automated checks, which is a good start. However automated testing can only detect so much as it doesn't have human context, so it's advisable to supplement with manual tests.

- [x] Design – Use accessible colours (contrast & colour blindness), font size, layout, motion & interactions

- [x] Content – Copy is written using plain language with clear and unique links & CTAs, ALT text & hidden labels

  (within reason - I'm sure NASA uses an amount of jargon that I'm not responsible for :)

- [x] Keyboard only – Using only a keyboard (no mouse or touch), navigation is in the correct order and all interactive elements are reachable

- [ ] Screen reader – Works with a screen reader with meaningful focus order, heading tags, image descriptions & hidden labels

  (I didn't have time to test with a screen reader. Much of this comes from semantic mark-up however.)

- [x] Magnification – Can zoom up to 400% (or down to mobile size 320px) without losing content or functionality

  (actually looks better haha)
