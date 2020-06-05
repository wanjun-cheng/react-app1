import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
  onError(e) {
    console.log(e);
  }
});

// 2. Plugins
// app.use({});

// Model
function importAll(r) {
  r.keys().forEach(key => app.model(r(key).default));
}

// 3. Model
importAll(require.context('./layouts', true, /model\.js$/));
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
