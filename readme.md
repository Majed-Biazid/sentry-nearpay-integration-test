This repository was created to validate the integration between NearPay and Sentry. It appears there is a compatibility issue between the two.

This repository is a minimal React Native project using Expo. It includes both Sentry and NearPay configured with basic setup to test their compatibility.

### Steps to Test the Scenario:

1. Update the Sentry credentials in the app's initialization:

```javascript
Sentry.init({
  dsn: "your_testing_dsn",
  sendDefaultPii: true, // Enables sending additional context data like IP address, cookies, and user information.
});
```

2. Modify the `app.json` file to include the Sentry plugin configuration:

```json
"plugins": [
  [
    "@sentry/react-native/expo",
    {
      "url": "https://sentry.io/",
      "project": "your_project_name",
      "organization": "your_organization_name"
    }
  ]
]
```

3. Test the app without importing NearPay:

- You will observe that Sentry functions without any issues.

4. Uncomment the NearPay import and setup in `app.jsx`:

```javascript
// import nearpay from "./nearpay";
```

- After uncommenting, the app initializes with the NearPay setup and conditions check.
- However, Sentry initialization will throw an error indicating that the native module for Sentry is not linked.

This behavior demonstrates the compatibility issue between NearPay and Sentry in this setup.
