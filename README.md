# Platform Helper #

Do you hate it to write this all the time?

```javascript
if (Platform.OS === 'android') { /* do something */ }
```

Well then use this awesome helper

### How do I get set up? ###

```javascript
import { isIos, isAndroid, either, invokeEither } from 'platform-helper';

if (isIos) { }
if (isAndroid) { }

const myAvatar = either('coolAppleDogs.png', 'happyAndroidRobots.png');

function somethingOnIos() { console.log('hey i am an ios device') };
function somethingOnAndroid () { console.log('hey i am an android device') };

const result = invokeEither( somethingOnIos, somethingOnAndroid );

// or with parameters

function somethingOnIos(x) { 
    return function inner() {
        return x*2;
    }
};

function somethingOnAndroid(x) {}
    return function inner() {
        return x*3;
    }
};

```

### Contribution guidelines ###

* Writing tests (Running the tests: ```npm start``` in the root directory of the project)
* Create PRs
* Do not just change the code style

### Who do I talk to? ###

* michael.malura@socialbit.de
