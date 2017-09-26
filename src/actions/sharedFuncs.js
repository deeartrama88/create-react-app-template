
// get user data via facebook sdk
export const fetchUserData = () => {
    const promise = new Promise((resolve, reject) => {

            window.FB.getLoginStatus(function(response) {

                if (response.status === 'connected') {
                    const userData = response;
                    window.FB.api(
                        '/me',
                        'GET',
                        {"fields":"id,first_name,last_name,email,gender,picture"},
                        function(response) {
                            const userDataFull = Object.assign({}, userData, response);
                            resolve(saveUserDataObj(userDataFull));
                        }
                    );
                } else if (response.status === 'not_authorized') {
                    console.log('not authorized');
                    resolve(false);
                } else {

                    console.log('not logged in to facebook');
                    resolve(false);
                }
            });
        });
    return promise;
};

// FB login
export const callFBLogin = () => {

    const promise = new Promise((resolve, reject) => {

        window.FB.login(function(response) {
            if (response.authResponse) {
                let userData = {...response};
                console.log('Welcome!  Fetching your information.... ');
                window.FB.api(
                    '/me',
                    'GET',
                    {"fields":"id,first_name,last_name,email,gender,picture"},
                    function(response) {
                        const userDataFull = Object.assign({}, userData, response);
                        resolve(saveUserDataObj(userDataFull));
                    }
                );
            } else {
                console.log('User cancelled login or did not fully authorize.');
                resolve(false);
            }
        });
    });
    return promise;
};

// help func to save user data in obj
const saveUserDataObj = (userInfo) => {

    let userData = {};

    const userDataString = '<img src="'+ userInfo.picture.data.url +'" /><br/>' +
        '<span class="green">Status:</span> ' + userInfo.status + '<br /><hr/>' +
        '<span class="green">First name:</span> ' + userInfo.first_name + '<br /><hr/>' +
        '<span class="green">Last name:</span> ' + userInfo.last_name + '<br /><hr/>' +
        '<span class="green">Gender:</span> ' + userInfo.gender + '<br /><hr/>' +
        '<span class="green">access token:</span> ' +
        userInfo.authResponse.accessToken.substring(0, 30) + '...<br /><hr/>' +
        '<span class="green">expiresIN:</span> ' + userInfo.authResponse.expiresIn + '<br /><hr/>' +
        '<span class="green">signedRequest:</span> ' +
        userInfo.authResponse.signedRequest.substring(0, 30) + '...<br /><hr/>' +
        '<span class="green">userID:</span> ' + userInfo.authResponse.userID + '<br />';

    userData.userHtmlString = userDataString;

    userData.userInfo = {
        status: userInfo.status,
        accessToken: userInfo.authResponse.accessToken,
        expiresIN: userInfo.authResponse.expiresIn,
        signedRequest: userInfo.authResponse.signedRequest,
        userID: '1:' + userInfo.authResponse.userID,
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        email: userInfo.email,
        gender: userInfo.gender,
        picture: userInfo.picture.data.url

    };

    return userData;
};