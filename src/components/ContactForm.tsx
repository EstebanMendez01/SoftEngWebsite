import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 font-mono">
          <span className="text-success">function</span> <span className="text-highlight">sendMessage</span><span className="text-accent">()</span>
        </h2>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary font-mono">
                name: String
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full rounded-md bg-code-bg border-accent/20 shadow-code focus:border-accent focus:ring-accent text-code-text font-mono"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary font-mono">
                email: String
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md bg-code-bg border-accent/20 shadow-code focus:border-accent focus:ring-accent text-code-text font-mono"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary font-mono">
                message: String
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="mt-1 block w-full rounded-md bg-code-bg border-accent/20 shadow-code focus:border-accent focus:ring-accent text-code-text font-mono"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-code-text bg-accent hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent font-mono"
            >
              {status === 'loading' ? 'sending...' : 'message.send()'}
            </button>
            {status === 'success' && (
              <p className="text-success text-center font-mono">return "Message sent successfully!";</p>
            )}
            {status === 'error' && (
              <p className="text-warning text-center font-mono">throw new Error("Failed to send message");</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}