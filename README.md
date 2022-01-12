# js-runner

Rendering html with [jsdom](https://github.com/jsdom/jsdom) as http API.

# Usage

## /render

Accepts POST request with the following JSON:

```
{
    "url": "", // URL of the site
    "html": "", // HTML of the site
    "cookies": "" // Cookies to be set in the browser TODO implement
    "user_agent": "" // User-Agent used by the browser
    "render_wait": "" // how much time to spend on rendering
}
```

# Commands

## Docker builds

```
sudo docker build . -t jsrunner:0.1
sudo docker run -p 3000:3000 -d --memory="512mb" jsrunner:0.1
```

## packages update:

```
npx npm-check-updates -u
npm install 
```

## Unfetch

New version must be downloaded from their [repo](https://github.com/developit/unfetch).
