import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  AlertCircle,
  CheckCircle,
  Send,
  Shield,
} from 'lucide-react';

import ModalShell from './ModalShell';

const initialForm = {
  fullName: '',
  contactMethod: 'both',
  email: '',
  phone: '',
  service: '',
  date: '',
  time: '',
  message: '',
};

export default function ConsultationFormSheet({
  isOpen,
  onClose,
  activeProblem,
}) {
  const [form, setForm] = useState(initialForm);

  const [formError, setFormError] = useState('');

  const [submitting, setSubmitting] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    if (!form.fullName.trim()) {
      return setFormError(
        'Please enter your full name.'
      );
    }

    if (
      (form.contactMethod === 'email' ||
        form.contactMethod === 'both') &&
      !form.email.trim()
    ) {
      return setFormError(
        'Please enter your email address.'
      );
    }

    if (
      (form.contactMethod === 'whatsapp' ||
        form.contactMethod === 'both') &&
      !form.phone.trim()
    ) {
      return setFormError(
        'Please enter your phone number.'
      );
    }

    setFormError('');

    setSubmitting(true);

    try {
      const params = new URLSearchParams();

      params.append('name', form.fullName);

      params.append(
        'contactMethod',
        form.contactMethod
      );

      params.append('email', form.email);

      params.append('phone', form.phone);

      params.append('service', form.service);

      params.append('date', form.date);

      params.append('time', form.time);

      params.append('message', form.message);

      await fetch(
        'https://script.google.com/macros/s/AKfycbz3ctYI9uedyQ1Mkb3zfd6-tdxemW3jXANoyGI38qmmv5a23_YVKl-eEk4YZ7EF8_V9/exec',
        {
          method: 'POST',
          body: params,
          mode: 'no-cors',
          headers: {
            'Content-Type':
              'application/x-www-form-urlencoded',
          },
        }
      );

      setSubmitting(false);

      setSubmitted(true);
    } catch (error) {
      console.log(error);

      setSubmitting(false);

      setFormError('Submission failed.');
    }
  };

  const reset = () => {
    setForm(initialForm);

    setFormError('');

    setSubmitted(false);

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalShell
          onClose={onClose}
          title={
            submitted
              ? 'Request Submitted!'
              : activeProblem
              ? `Private Talk: ${activeProblem}`
              : 'Private Discussion Request'
          }
          subtitle={
            submitted
              ? 'Successfully Submitted'
              : 'Always Secret & Confidential'
          }
        >
          {!submitted ? (
            <form
              onSubmit={submit}
              className="space-y-4 flex-1 overflow-y-auto pr-0.5 scrollbar-none pb-4"
            >
              {/* Info Box */}
              <div className="p-3 bg-[#F5F3EF] rounded-lg flex items-start gap-2 border border-[#D9D6D1]/30">
                <Shield
                  size={16}
                  className="text-[#016970] shrink-0 mt-0.5"
                />

                <p className="text-[11px] text-[#6E6B67] leading-relaxed">
                  Your details remain fully secure and
                  confidential.
                </p>
              </div>

              {/* Name */}
              <Field label="Full Name *">
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      fullName: e.target.value,
                    })
                  }
                  placeholder="Enter your full name"
                  className="input"
                />
              </Field>

              {/* Contact Method */}
              <Field label="How should we contact you?">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    ['both', 'Email & WhatsApp'],
                    ['email', 'Email only'],
                    ['whatsapp', 'WhatsApp only'],
                  ].map(([key, label]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => {
                        setForm({
                          ...form,
                          contactMethod: key,
                        });

                        setFormError('');
                      }}
                      className={`py-2 text-[10.5px] font-bold rounded-lg border uppercase tracking-wider transition-all duration-200 ${
                        form.contactMethod === key
                          ? 'bg-[#016970] text-white border-[#016970]'
                          : 'bg-[#F5F3EF] text-[#6E6B67] border-[#D9D6D1]/50'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </Field>

              {/* Email */}
              {(form.contactMethod === 'email' ||
                form.contactMethod === 'both') && (
                <Field label="Email Address *">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    placeholder="Enter your email"
                    className="input"
                  />
                </Field>
              )}

              {/* Phone */}
              {(form.contactMethod === 'whatsapp' ||
                form.contactMethod === 'both') && (
                <Field label="Phone Number *">
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                    placeholder="+91 98765 43210"
                    className="input"
                  />
                </Field>
              )}

              {/* Service */}
              <Field label="Select Service *">
                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      service: e.target.value,
                    })
                  }
                  className="input"
                >
                  <option value="">
                    Choose Service
                  </option>

                  <option>
                    Before marriage concerns
                  </option>

                  <option>
                    Separation or divorce confusion
                  </option>

                  <option>
                    Abuse, family or legal trouble
                  </option>

                  <option>
                    Maintenance, alimony or property
                    issues
                  </option>

                  <option>
                    Child custody or future planning
                  </option>
                </select>
              </Field>

              {/* Date */}
              <Field label="Schedule Date *">
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      date: e.target.value,
                    })
                  }
                  className="input"
                />
              </Field>

              {/* Time */}
              <Field label="Schedule Time *">
                <input
                  type="time"
                  value={form.time}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      time: e.target.value,
                    })
                  }
                  className="input"
                />
              </Field>

              {/* Message */}
              <Field label="Message">
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  className="input h-auto p-3 resize-none"
                  placeholder="Write your message..."
                />
              </Field>

              {/* Error */}
              {formError && (
                <div className="flex gap-1.5 items-center text-xs text-red-700 bg-red-50 p-2.5 rounded-lg border border-red-200">
                  <AlertCircle size={14} />
                  {formError}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full h-[48px] bg-[#016970] hover:bg-[#0C4E54] text-white text-[14px] font-bold rounded-lg flex items-center justify-center gap-2"
              >
                {submitting ? (
                  'Submitting securely...'
                ) : (
                  <>
                    <Send size={15} />
                    Submit Request
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="py-6 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center border border-green-200">
                <CheckCircle
                  size={36}
                  className="text-[#016970]"
                />
              </div>

              <h4 className="font-serif text-[18px] text-[#1A1815] font-semibold">
                Request Submitted!
              </h4>

              <p className="text-[12.5px] text-[#6E6B67] max-w-[285px] leading-relaxed">
                Your consultation request has been
                received successfully.
              </p>

              <button
                onClick={reset}
                className="w-full max-w-[285px] py-3 bg-[#016970] text-white text-[13px] font-bold rounded-lg uppercase"
              >
                Return to Homepage
              </button>
            </div>
          )}
        </ModalShell>
      )}
    </AnimatePresence>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-[11px] font-bold text-[#1A1815] mb-1.5 uppercase tracking-wide">
        {label}
      </label>

      {children}
    </div>
  );
}