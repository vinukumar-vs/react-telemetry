import React from 'react';
import './App.css';
import { jQuery, $ }  from '../node_modules/jquery'
import $t from '../node_modules/@project-sunbird/telemetry-sdk/index.js'

class App extends React.Component {

  render() {
    return <div><button onClick={this.init}>Start Telemetry</button>
          <button onClick={this.interact}>Interact</button></div>;
  }

  init() {
    $t.initialize({
      "pdata": {
        "id": "dev.anuvad",
        "ver": "1.0",
        "pid": "anuvad-web"
      },
      "env": "home",
      "channel": "XXXX",
      "did": "20d63257084c2dca33f31a8f14d8e94c0d939de4",
      "uid": "anonymous",
      "sid": "85e8a2c8-bb8e-4666-a21b-c29ec590d740",
      "batchsize": 5,
      "mode": "play",
      "endpoint": "/v3/telemetry", 
      "dispatcher": { dispatch: function(data) {
          console.log(data);
        } 
      }
    });

    console.log("is telemetry initialized: ", $t.isInitialized());
    $t.start(null, "xyz", "1.0", {mode:"session", duration:2});
  }

  interact() {
    $t.interact({type:"CLICK", id:"btn_interact", pageid: "home"}, {context: {cdata: [{type: "Doc", id: "123"}]}});
  }
}

export default App;
