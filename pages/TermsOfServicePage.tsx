import React from 'react';
import PageHeader from '../components/PageHeader';
import { Reveal } from '../components/Reveal';

const TermsOfServicePage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Terms of Service" 
        subtitle="Legal"
        image="https://images.unsplash.com/photo-1507208773393-40d9fc670acf?q=80&w=2800&auto=format&fit=crop"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-gray-700 leading-relaxed">
            <Reveal>
                <p className="mb-6 font-bold">Last Updated: October 26, 2023</p>
                
                <h2 className="text-2xl font-serif font-bold text-iron-900 mb-4">1. Agreement to Terms</h2>
                <p className="mb-6">
                    These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Ironcrest Developers ("we," "us" or "our"), concerning your access to and use of our website. By accessing the site, you agree that you have read, understood, and agree to be bound by all of these Terms of Service.
                </p>

                <h2 className="text-2xl font-serif font-bold text-iron-900 mb-4">2. Intellectual Property Rights</h2>
                <p className="mb-6">
                    Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                </p>

                <h2 className="text-2xl font-serif font-bold text-iron-900 mb-4">3. User Representations</h2>
                <p className="mb-4">By using the Site, you represent and warrant that:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                    <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                    <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                </ul>

                <h2 className="text-2xl font-serif font-bold text-iron-900 mb-4">4. Limitation of Liability</h2>
                <p className="mb-6">
                    In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                </p>

                <h2 className="text-2xl font-serif font-bold text-iron-900 mb-4">5. Governing Law</h2>
                <p className="mb-6">
                    These Terms shall be governed by and defined following the laws of the State of New York. Ironcrest Developers and yourself irrevocably consent that the courts of New York shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                </p>
            </Reveal>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;