var AppSdk = require('../lib/sdk.js');
var keys = require('./keys/keys');

var option = {
    appId: 9,
    key: {
        private: keys.private,
        public: keys.key,
        passphrase: keys.passphrase,
    },

    appBaseUri: 'http://app.test.byte.mn/v1',
    userBaseUri: 'http://userly.test.byte.mn/v1'
};

var sdk = new AppSdk.ByteSdk(option);

sdk.getJAT();


function test(name, action) {
    console.log('test ', name);

    action
        .then(function(r) { console.log('    success->', r); })
        .catch(function(r) { console.log('    error->', r); });
}

//test("getJAT", sdk.getJAT());
var at = "EAANdc3yG4kUBADXH6wlhSZACltsCWyiSxPLZB1DmDtzIRSihHxzaigPCZBrK1DKChMeL6CpgLfrTshc6ZAKM9iZCWnEzM1tCDWEHZB4uKE3XnpOhEXdeDiranfzlIxrZBlKOZC7vLS7CWUqtzJ5HHxVrfycZAsBmlgxHE5Sfo3ZAtWAzQY7Oo1KlqretSbJnYmKEcZD";
test("userLoginFb", sdk.userLoginFb(at));

// function appService(done) {
//     console.log('app service ---------------------------------------');
//     console.log("jct=", app.genJCT());
//     app.getJAT(function(err, jat) {
//         console.log("jat=", jat);
//         done();
//     });
// }

// function userService(done) {
//     console.log('user service ---------------------------------------');

//     var UserSdk = require('../user service');

//     var user = new UserSdk({
//         app: app,
//         uri: 'http://userly.test.byte.mn/v1'
//     });




//     user.loginFb(at, function(err, userinfo) {
//         console.log("loginFb", err);
//         console.log("loginFb", userinfo);
//         done();
//     });
// }

// appService(function() {
//     console.log('--- done userService');
//     userService(function() {

//     });
// });