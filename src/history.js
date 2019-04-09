import createHistory from 'history/createBrowserHistory';

/**
 * Usually we can use history from the BrowserRouter but in order to have more
 * control, we create our own history. To use this in the App.js, we import and use Router
 * in the place of BrowserRouter
 */

export default createHistory();
