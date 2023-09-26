import { useState } from "react";
import AccountContext from "./AccountContext";
import UserPool from "../Auth/UserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

const AccountState = (props) => {


    const [loggedin, setLoggedIn] = useState(false)

    const logout = async () => {
        return await new Promise((resolve, reject) => {
            const user = UserPool.getCurrentUser()
            if(user) {
                user.signOut()
                resolve(user)
            } else {
                reject()
            }
        })
        
    }

    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = UserPool.getCurrentUser()
            if(user) {
                user.getSession(async (err, session) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(session)
                        
                    }
                })
            } else {
                reject()
            }
        })
    }

    const signUp = async (username, password) => {
        return await new Promise ((resolve, reject) => {
            

            UserPool.signUp(username, password, [], null, (err,data) => {
                if(err){
                    console.log("failed to register", err.message)
                    reject()
                } else {
                    console.log("registered successfully", data)
                    resolve()
                }
            })
        })
    }

    const authenticate = async (Username,Password) => {
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
                    console.log("login successful", data)
                    resolve(data)
                    setLoggedIn(true)
                },
                onFailure: (err) => {
                    console.log("login fialed", err.message)
                    reject(err)
                },
                newPasswordRequired: (data) => {
                    console.log("new password required", data)
                    resolve(data)
                }
            })
        })
    }

    return (
        <AccountContext.Provider value={{signUp, authenticate, getSession, logout, loggedin}}>
            {props.children}
        </AccountContext.Provider>
    )
}

export default AccountState


// authenticate, getSession