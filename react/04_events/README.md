## Events in React

Create two components `CustomLink` and `App`. The `CustomLink` component should accept three props:

* `href` - a URL
* `text` - the text inside the link
* `handleClick` - a callback to run when the user clicks on the link.

The component should render a link tag with an appropriate `href` and `text` coming from the props. It should also open in a new window (set the `target` attribute to `"_blank"`).

The `App` component should show at least three `CustomLink` components, along with a button that, when clicked, disables all of the links. In other words, if you click on the button and then click on the link, nothing should happen. Clicking on the button again should re-enable the links.
