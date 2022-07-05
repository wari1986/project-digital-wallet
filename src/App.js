import { AutoForm } from 'uniforms-mui';

import { bridge as schema } from './schemas/basic';

function App() {
  return (
    <AutoForm schema={schema} onSubmit={console.log} />
  );
}

export default App;
