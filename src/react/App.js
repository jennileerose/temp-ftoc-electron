import React from 'react';
import './css/style.css';
import { channels } from '../shared/constants';
import FileInput from './components/fileInput';

const { ipcRenderer } = window;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: '',
      appVersion: '',
    };
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, arg) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      const { appName, appVersion } = arg;
      this.setState({ appName, appVersion });
    });
  }
  render() {
    const { appName, appVersion } = this.state;

    return (
      <div>
        <header>
          <h1>Temperature Conversion (F&#176; to C&#176;)</h1>
        </header>
        <main>
          <h3>Upload a temprature .csv file</h3>
          <FileInput />
        </main>
        <footer>
          <p>{appName} version {appVersion}</p>
        </footer>
      </div>
    );
  }
}

export default App;
