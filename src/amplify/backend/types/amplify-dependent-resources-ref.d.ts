export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "src": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string"
        }
    },
    "analytics": {
        "srcKinesis": {
            "kinesisStreamArn": "string",
            "kinesisStreamId": "string",
            "kinesisStreamShardCount": "string"
        }
    }
}