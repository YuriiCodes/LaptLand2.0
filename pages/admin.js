import {Amplify} from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

import {Auth} from 'aws-amplify';
import {UsersContacts} from "../components/admin/UsersContacts";
import awsExports from "../src/aws-exports";

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

function Home() {
    return (
        <>
            <div style={{
                marginTop: '10vh',
                height: '90vh',
            }}>
                <UsersContacts signOut={signOut}/>
            </div>
        </>
    )
}

export default withAuthenticator(Home);