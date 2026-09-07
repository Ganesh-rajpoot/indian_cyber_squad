// app/disclaimer/page.tsx
export default function DisclaimerPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            <span className="text-[#00ffb4]">Disclaimer</span>
          </h1>
          <div className="h-1 w-20 bg-[#00ffb4] mt-3"></div>
        </div>
        
        <div className="glass-panel p-6 rounded-2xl border border-[#00ffb4]/10 space-y-6">
          <p className="text-gray-300">
            The information provided by Indian Cyber Squad on this website is for general informational 
            and educational purposes only. All information on the site is provided in good faith, 
            however we make no representation or warranty of any kind, express or implied, regarding 
            the accuracy, adequacy, validity, reliability, availability, or completeness of any 
            information on the site.
          </p>
          
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Professional Advice</h2>
            <p className="text-gray-300 text-sm">
              The educational content provided is for learning purposes and should not be considered 
              as professional advice. Always seek the advice of qualified professionals regarding 
              any career or educational decisions.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-white mb-2">External Links</h2>
            <p className="text-gray-300 text-sm">
              Our website may contain links to external websites that are not provided or maintained 
              by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any 
              information on these external websites.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Contact</h2>
            <p className="text-gray-300 text-sm">
              If you have any questions about this disclaimer, please contact us at{' '}
              <a href="mailto:info@indiancybersquad.com" className="text-[#00ffb4] hover:underline">
                info@indiancybersquad.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}