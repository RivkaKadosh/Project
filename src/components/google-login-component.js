import React from 'react'
import GoogleLogin from 'react-google-login';

function MyGoogleLogin({googleHandler}) {

    const responseGoogle = (response) => {
        console.log(response);
        googleHandler(response);
    }

    return (
        <div>
            <GoogleLogin
                clientId="89997278194-42ehb6uemaccsnrfct6s4l33mct869l1.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default MyGoogleLogin






