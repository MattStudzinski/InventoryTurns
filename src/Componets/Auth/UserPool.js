import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'us-west-2_GhMeDpgFv',
    ClientId: 'cr47scve8scdatdhjuchk4bbd'
}

export default new CognitoUserPool(poolData)