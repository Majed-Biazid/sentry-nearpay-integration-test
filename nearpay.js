import {
  EmbededNearpay,
  AuthenticationType,
  Environments,
  Locale,
} from "@nearpaydev/react-native-nearpay-sdk";

// Replace with your actual authentication details and environment
const nearpay = new EmbededNearpay({
  authtype: AuthenticationType.login, // Or other authentication type like JWT, mobile, email
  authvalue: "", // Your authentication value (e.g., JWT, mobile number, email - leave empty for login type)
  environment: Environments.sandbox, // Or Environments.production when you go live
  locale: Locale.default, // Optional: Set the language (e.g., Locale.arabic)
  arabicPaymentText: "يرجى تمرير البطاقة", // Optional: Custom text for Arabic payment screen
  englishPaymentText: "please tap your card", // Optional: Custom text for English payment screen
});

async function setupNearPay() {
  try {
    await nearpay.setup();
    console.log("NearPay setup successful!");
    // You can now use other NearPay functions like purchase, refund, etc.
  } catch (error) {
    console.error("NearPay setup failed:", error);
    // Handle setup errors (e.g., plugin not installed, authentication failure)
  }
}

// Call the setup function when your application starts or when needed
setupNearPay();
