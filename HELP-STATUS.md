# Human Help Status

## ✅ Completed (2026-05-08)

### Analytics — Use GA4 instead of PostHog
PostHog not provided. Use Google Analytics 4 instead. Measurement ID: G-0CEP7S9Y3J

Add this to your HTML <head>:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0CEP7S9Y3J"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-0CEP7S9Y3J');
</script>
```

You can send custom events via `gtag('event', 'calculator_used', { ... })` — same event names you already have wired up.

### Note
Human help time is fully spent for this week.
