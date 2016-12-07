var mock = require('mock-require');

mock('react-native', {
    Platform : {
        OS : 'ios'
    }
});
