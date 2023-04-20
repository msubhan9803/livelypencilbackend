// Initialize the Amazon Cognito credentials provider
CognitoCachingCredentialsProvider credentialsProvider = new CognitoCachingCredentialsProvider(
    getApplicationContext(),
    "us-east-1:91aadf69-74f5-4ee3-b251-c16defccb70b", // Identity pool ID
    Regions.US_EAST_1 // Region
);