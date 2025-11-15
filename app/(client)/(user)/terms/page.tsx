import Container from "@/components/Container";
import React from "react";

const TermsPage = () => {
  return (
    <Container className="max-w-3xl sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Tulos&apos;s services, you agree to be bound
            by these Terms and Conditions.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Use of Services</h2>
          <p>
            You agree to use Tulos&apos;s services only for lawful purposes and
            in accordance with these Terms and Conditions.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">
            3. Intellectual Property
          </h2>
          <p>
            All content and materials available on Tulos&apos;s services are the
            property of Tulos and are protected by applicable intellectual
            property laws.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">
            4. Limitation of Liability
          </h2>
          <p>
            Tulos shall not be liable for any indirect, incidental, special,
            consequential or punitive damages resulting from your use of our
            services.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of the jurisdiction in which Tulos
            operates.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default TermsPage;