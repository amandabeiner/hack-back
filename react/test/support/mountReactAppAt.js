import Root from 'Root';

import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

let mountReactAppAt = (url) => {
  store.dispatch(push(url));

  return mount(
    <Root />
  );
}

export default mountReactAppAt;
