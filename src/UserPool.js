import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_HmDEQy5vC",
    ClientId: "72qlv8uguga8rpaolte57k5kts"
}

export default new CognitoUserPool(poolData);