
import React from 'react';
import { Brain, Code, ChevronRight, Check, Server } from 'lucide-react';

const About = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 py-12">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About AutismAid</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our mission is to make autism screening more accessible through advanced technology, 
              helping to identify signs earlier when intervention can be most effective.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  AutismAid was developed by a team of data scientists, medical professionals, and advocates 
                  who believe in the power of technology to make healthcare more accessible.
                </p>
                <p>
                  Our neural network model has been trained on diverse datasets to recognize patterns 
                  associated with autism spectrum characteristics, achieving high accuracy rates in preliminary screenings.
                </p>
                <p>
                  We believe in the importance of early detection and intervention, which is why we've made our 
                  tool freely accessible without requiring registration - though optional accounts are available 
                  for those who wish to save their screening history.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-autism-purple">90%+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Screening Accuracy</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-autism-blue">5,000+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Screenings Processed</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AutismAid technology"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg">
                <Brain className="h-8 w-8 text-autism-purple" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Technology</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              AutismAid leverages cutting-edge artificial intelligence to provide accessible autism screening.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-autism-purple/20 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-autism-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Neural Network Model</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our deep learning model was trained on thousands of samples to identify patterns associated with autism spectrum characteristics.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-autism-blue/20 rounded-full flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-autism-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Algorithms</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We utilize sophisticated algorithms for data processing, feature extraction, and pattern recognition.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-autism-lightPurple/30 rounded-full flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-autism-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Processing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All data is processed securely with state-of-the-art encryption and is not stored beyond the analysis session without consent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn more about our autism screening tool and how it can help you.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
            {[
              {
                question: "How accurate is the screening tool?",
                answer: "Our neural network model achieves over 90% accuracy in preliminary screenings when compared to clinical diagnoses. However, it is designed to be a first step and not a replacement for professional medical assessment."
              },
              {
                question: "What types of files can I upload?",
                answer: "The system accepts various file types including images (JPEG, PNG), documents (PDF), data files (CSV), and .1D files containing behavioral or developmental information."
              },
              {
                question: "Is my data secure?",
                answer: "Yes, we take data security very seriously. All uploads are processed securely, and we do not store your data beyond the analysis session unless you explicitly opt in to save your results."
              },
              {
                question: "Do I need to create an account?",
                answer: "No, account creation is optional. You can use our screening tool without registration, though creating an account allows you to save your screening history for future reference."
              },
              {
                question: "What should I do after receiving my screening results?",
                answer: "If the screening indicates potential autism spectrum characteristics, we recommend consulting with a healthcare professional for a comprehensive evaluation. Our resources page provides information on finding appropriate specialists."
              }
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-semibold text-gray-800 dark:text-white">{faq.question}</span>
                    <ChevronRight className="h-5 w-5 text-autism-purple transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="text-gray-600 dark:text-gray-400 mt-4 pl-4">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
