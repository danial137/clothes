import Container from "@/components/Container";
import React from "react";

const PrivacyPage = () => {
  return (
    <Container className="max-w-3xl sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">
            1. Information Collection
          </h2>
          <p>
            We collect information you provide directly to us when using our
            services, as well as information about your use of our services.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Use of Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve
            our services, as well as to communicate with you.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">3. Information Sharing</h2>
          <p>
            We do not share your personal information with third parties except
            as described in this Privacy Policy or with your consent.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
          <p>
            We take reasonable measures to help protect your personal
            information from loss, theft, misuse, and unauthorized access.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal
            information. Please contact us for assistance with these requests.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default PrivacyPage;