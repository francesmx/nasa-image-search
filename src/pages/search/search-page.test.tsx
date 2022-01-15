import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { SearchPage } from './search-page';
import { render, screen, within } from '../../shared/test-utils/custom-rtl-render';
import { NASA_BASE_URL } from '../../api/NasaApiSlice';

describe('SearchPage', () => {
  const mockNasaResponseEarth = {
    collection: {
      version: '1.0',
      href: 'http://images-api.nasa.gov/search?&media_type=image&q=earth',
      items: [
        {
          href: 'https://images-assets.nasa.gov/image/PIA00342/collection.json',
          data: [
            {
              center: 'JPL',
              title: 'The Earth & Moon',
              nasa_id: 'PIA00342',
              media_type: 'image',
              keywords: ['Earth', 'Galileo'],
              date_created: '1998-06-04T18:10:28Z',
              description_508:
                'During its flight, NASA’s Galileo spacecraft returned images of the Earth and Moon. Separate images of the Earth and Moon were combined to generate this view. ',
              secondary_creator: 'NASA/JPL/USGS',
              description:
                'During its flight, NASA’s Galileo spacecraft returned images of the Earth and Moon. Separate images of the Earth and Moon were combined to generate this view.  http://photojournal.jpl.nasa.gov/catalog/PIA00342',
            },
          ],
          links: [
            {
              href: 'https://images-assets.nasa.gov/image/PIA00342/PIA00342~thumb.jpg',
              rel: 'preview',
              render: 'image',
            },
          ],
        },
        {
          href: 'https://images-assets.nasa.gov/image/PIA00122/collection.json',
          data: [
            {
              center: 'JPL',
              title: 'Earth - India and Australia',
              nasa_id: 'PIA00122',
              media_type: 'image',
              keywords: ['Earth', 'Galileo'],
              date_created: '1996-02-08T10:48:12Z',
              description_508:
                'This color image of the Earth was obtained by NASA’s Galileo spacecraft on Dec. 11, 1990, when the spacecraft was about 1.5 million miles from the Earth. ',
              secondary_creator: 'NASA/JPL',
              description:
                'This color image of the Earth was obtained by NASA’s Galileo spacecraft on Dec. 11, 1990, when the spacecraft was about 1.5 million miles from the Earth.  http://photojournal.jpl.nasa.gov/catalog/PIA00122',
            },
          ],
          links: [
            {
              href: 'https://images-assets.nasa.gov/image/PIA00122/PIA00122~thumb.jpg',
              rel: 'preview',
              render: 'image',
            },
          ],
        },
      ],
      metadata: { total_hits: 2 },
      links: [
        {
          rel: 'next',
          prompt: 'Next',
          href: 'http://images-api.nasa.gov/search?media_type=image&q=earth&page=2',
        },
      ],
    },
  };

  // uses MSW to intercept network request and return mocked response
  const handlers = [
    rest.get(`${NASA_BASE_URL}/search`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockNasaResponseEarth), ctx.delay(150));
    }),
  ];

  const server = setupServer(...handlers);

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('renders the header and search bar initially', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <SearchPage />
      </Router>
    );

    // renders header
    await screen.findByAltText('NASA logo');
    const headerElement = screen.getByRole('heading', { level: 1 });
    expect(headerElement.textContent).toBe('NASA Image, Video & Audio Library');

    // renders search bar
    const searchBar = screen.getByLabelText(/What would you like to see/);
    expect(searchBar).toHaveValue('');
    screen.getByRole('button', { name: 'search' });
  });

  it('updates the URL when you hit search with a query', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <SearchPage />
      </Router>
    );

    const searchBar = await screen.findByLabelText(/What would you like to see/);
    expect(searchBar).toHaveValue('');

    expect(history.location.search).toMatchInlineSnapshot(`""`);
    userEvent.type(searchBar, 'earth');
    expect(searchBar).toHaveValue('earth');

    const searchButton = screen.getByRole('button', { name: 'search' });
    userEvent.click(searchButton);

    await screen.findByText('Loading...');
    expect(history.location.search).toMatchInlineSnapshot(`"?q=earth"`);
  });

  it('renders results when you hit search with a query', async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <SearchPage />
      </Router>
    );

    const searchBar = await screen.findByLabelText(/What would you like to see/);
    userEvent.type(searchBar, 'earth');
    userEvent.click(screen.getByRole('button', { name: 'search' }));

    // Two items should be returned
    const results = await screen.findAllByRole('listitem');
    expect(results.length).toBe(2);

    // Each result should have some title text, and an image
    within(results[0]).getByText(/The Earth & Moon/);
    within(results[0]).getByRole('img');
    within(results[0]).getByAltText(/The Earth & Moon/);

    within(results[1]).getByText(/Earth - India and Australia/);
    within(results[1]).getByRole('img');
    within(results[1]).getByAltText(/Earth - India and Australia/);
  });
});
