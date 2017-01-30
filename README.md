# bytesdk-nodejs
byte system sdk in nodejs


##use application service

```javascript

    var byteSdk = require('byte-sdk');
    var keys = require('./keys...');
    
    var sdk = new byteSdk.ByteSdk({
        appId: 91, // application id
        key:{
            private: keys.private, 
            public: keys.key,
            passphrase: keys.passphrase,
        },
        appBaseUri: 'http://app.test.byte.mn/v1',
        userBaseUri: 'http://userly.test.byte.mn/v1'
    });
    console.log("jct=", sdk.genJCT());
    
    sdk.getJAT().then( ... );    
    
    
```
