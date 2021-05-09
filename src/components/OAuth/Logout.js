import React from "react";
import { GoogleLogout } from 'react-google-login';

const responseGoogle = (response) => {
    alert('Logout from google !!!');
}

const Logout = () => {
    return (
        <div>
            <GoogleLogout
                clientId="73310373158-m6jc90t4b1dn3de6jeitktatqmtbpi8p.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={responseGoogle}
            />
        </div>
    )
}

export default Logout;