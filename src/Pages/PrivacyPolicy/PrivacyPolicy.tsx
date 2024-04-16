const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto w-11/12 py-8 text-left">
      {" "}
      {/* Align text to left */}
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4 border-b">Last updated: February 31, 2024</p>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Welcome to Colorverse</h2>
        <p className="mb-4">
          This Privacy Policy outlines our practices regarding the collection,
          use, and sharing of personal information through our digital products
          and services, including Preline (preline.co). By using our services,
          provided by Preline Labs Ltd, you agree to the collection and use of
          information as described in this policy.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-2">Information Collected</h2>
        <p className="mb-4">
          At Preline, your privacy is our priority. We do not share, sell, or
          rent your personal information to third parties. All data stored via
          our services is owned by you or your business and can be transferred
          or deleted upon request, though this may limit access to certain
          content.
        </p>

        <h3 className="text-lg font-bold mb-2">Account Information</h3>
        <p className="mb-4">
          Creating an account at Preline requires providing personal details
          such as your name, email address, and password, necessary for account
          setup and access.
        </p>

        <h3 className="text-lg font-bold mb-2">Payment Information</h3>
        <p className="mb-4">
          For payment processing, we use Paddle (paddle.com). During
          transactions, Paddle may ask for personal details like your name,
          address, email, and credit card information. Paddle's privacy policy,
          available at Paddle's Privacy Terms, governs their data handling.
          Preline is not responsible for Paddle's practices.
        </p>

        <h3 className="text-lg font-bold mb-2">Usage Information</h3>
        <p className="mb-4">
          We collect data on user interactions with Preline, including usage
          patterns and device information, to improve our platform.
        </p>

        <h3 className="text-lg font-bold mb-2">
          Legal Compliance and General Use
        </h3>
        <p className="mb-4">
          Preline may release personal information if required by law, such as
          in response to a court order or fraud investigation. We also use
          aggregated, non-identifiable user data for general analytical
          purposes.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
