import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_LelR6SlDU",
    ClientId: "5s8rm9i0prudr8fskcs6jd6ipb"
}

export default new CognitoUserPool(poolData);