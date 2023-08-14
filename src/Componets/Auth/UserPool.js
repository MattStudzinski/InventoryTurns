import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'us-west-2_WnvosEJwd',
    ClientId: '23lkp570r40cnu1tp5jpvppgof'
}

export default new CognitoUserPool(poolData)