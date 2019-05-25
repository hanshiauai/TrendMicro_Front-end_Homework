const fakeAuth = {
    isAuthenticated: false,
    authTimeout : null,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    },
    clearAuthTimeout() {
      if( this.authTimeout ) {
        clearTimeout( this.authTimeout );
      }
    }
  };

export {fakeAuth}