import React from 'react';
import PageHeader from '../components/PageHeader';
import { Reveal } from '../components/Reveal';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Privacy Policy" 
        subtitle="Legal"
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2800&auto=format&fit=crop"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-gray-700 leading-relaxed">
            <Reveal>
                <p className="mb-6 font-bold">Last Updated: October 26, 2023</p>
                
                <h2 className="text-2xl font-serif font-bold text-iron-900 mb-4">1. Introduction</h2>
                <p className="mb-6">
                    Ironcrest Developers ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>

                <h2 className="text-2xl font-serif font-bold text-iron-900 mb-4">2. Data We Collect</h2>
                <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                    <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                    <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                </ul>

                <h2 className="text-2xl font-serif font-bold text-iron-900 mb-4">3. How We Use Your Data</h2>
                <p className="mb-6">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    <li>Where we need to comply with a legal obligation.</li>
                </ul>

                <h2 className="text-2xl font-serif font-bold text-iron-900 mb-4">4. Data Security</h2>
                <p className="mb-6">
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>

                <h2 className="text-2xl font-serif font-bold text-iron-900 mb-4">5. Contact Us</h2>
                <p className="mb-6">
                    If you have any questions about this privacy policy or our privacy practices, please contact us at: <br/>
                    Email: privacy@ironcrest.com <br/>
                    Address: 1200 Steel Ave, Suite 500, Metropolis, NY 10012
                </p>
            </Reveal>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;