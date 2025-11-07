import React, { useState } from 'react';
type EmailSignupFormProps = {
  onSubmit?: (email: string) => void;
};

// @component: EmailSignupForm
export const EmailSignupForm = ({
  onSubmit
}: EmailSignupFormProps = {}) => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit && email) {
      onSubmit(email);
    }
  };

  // @return
  return <section id="signupform" data-testid="get-started-section-wrapper" className="w-full max-w-[1440px] mx-auto px-[100px] py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.67fr_1fr] gap-5 lg:gap-[100px] bg-[#FFDEE2] rounded-[20px] p-10 lg:p-20">
        <div>
          <div className="grid gap-2.5 mb-10">
            <h3 className="text-[64px] leading-[1.1] font-normal m-0 text-black" style={{
            fontFamily: '"Neue Haas Grotesk Display", system-ui, "Helvetica Neue", Arial, sans-serif'
          }}>
              Get started with Pleo
            </h3>
            <p className="text-[23px] leading-[1.6] font-normal m-0 text-black" style={{
            fontFamily: '"Neue Haas Grotesk Display", system-ui, "Helvetica Neue", Arial, sans-serif'
          }}>
              Join 40,000+ customers already using Pleo to stay on top of company spending. Start your free trial.
            </p>
          </div>
          <div className="grid gap-5">
            <div className="grid gap-3 w-full">
              <form noValidate onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-0 w-full">
                <input placeholder="Your company email" type="email" aria-label="email" required data-testid="simple-signup-form-email-input-get-started" value={email} onChange={e => setEmail(e.target.value)} className="w-full text-black text-left bg-white border border-transparent rounded-l-[159984px] sm:rounded-r-none rounded-r-[159984px] py-[18px] px-6 outline-none text-base leading-4 m-0" style={{
                fontFamily: '"Neue Haas Grotesk Text", system-ui, "Helvetica Neue", Arial, sans-serif'
              }} />
                <button type="submit" data-testid="simple-signup-form-submit-button-get-started" className="text-white cursor-pointer bg-[#222222] border border-transparent rounded-r-[159984px] sm:rounded-l-none rounded-l-[159984px] py-[18px] px-6 outline-none text-base leading-4 m-0 hover:bg-[#333333] transition-colors" style={{
                fontFamily: '"Spezia Monospace SemiMono", monospace, "Helvetica Neue", Arial, sans-serif'
              }}>
                  Get started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};