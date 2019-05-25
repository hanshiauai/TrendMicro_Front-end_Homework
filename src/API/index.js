import { fakeAuth } from "../store";

function fetchAPI({username, password}) {
    return checkAuthPromise({username, password})
    .then((data)=> {
        return data;
    }).catch((err)=> {

    });
}

const validAccount = [{username: 'guest', password: 'guest'}];

function checkAuthPromise ( {username, password} )  {
    return new Promise((resolve, reject) => {
      if ( validAccount.some( account => account.username === username && account.password === password ) ) {
        fakeAuth.authTimeout = setTimeout(function() {
          // console.log(`checkAuthPromise - succ`);
          resolve( {username: username, token: 'asdadasflasfaasda'} );
        }, 4000);
      }
      else {
        // console.log(`checkAuthPromise - fail`);
        resolve( `Incorrect username or password.` );
      }
    });
}

export function loginAPI({username, password}) {
    return fetchAPI({username, password});
}
