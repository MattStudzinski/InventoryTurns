import React from "react";
import AccountContext from "./AccountContext";
import UserPool from "../Auth/UserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

const AccountState = (props) => {


    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = UserPool.getCurrentUser()
            if (user){
                user.getSession(async (err, session) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve (session)
                    }
                })
            } else {
                reject()}
        })
    }

    const authenticate = async (Username, Password) => {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({
                Username,
                Pool: UserPool
            })

            const authDetails = new AuthenticationDetails({
                Username,
                Password
            })

            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    console.log("Logged In Success", data)
                    resolve(data)
                },
                onFailure: (err) => {
                    console.log("Failure", err.message)
                    reject(err)
                },
                newPasswordRequired: (data) => {
                    console.log("new Password Required", data)
                    resolve(data)
                }
            })
        })
    }
    

    return (
        <AccountContext.Provider value={{authenticate, getSession}}>
            {props.children}
        </AccountContext.Provider>
    )
}

export default AccountState