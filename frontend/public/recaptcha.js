// Google reCAPTCHA v2 invisible integration helper
// Usage: window.executeRecaptcha(action) returns a Promise that resolves to the token
window.executeRecaptcha = function(action = 'submit') {
  return new Promise((resolve, reject) => {
    if (!window.grecaptcha) {
      reject('reCAPTCHA not loaded');
      return;
    }
    window.grecaptcha.ready(function() {
      window.grecaptcha.execute('YOUR_RECAPTCHA_SITE_KEY', {action}).then(resolve).catch(reject);
    });
  });
};
