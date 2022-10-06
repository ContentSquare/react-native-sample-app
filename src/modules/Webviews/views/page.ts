export const htmlPage = `
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>WebView Tracking Tag - Contentsquare Technical Documentation</title>
    <script type="text/javascript">
      function sendScreenView() {
        window.cs_wvt = window.cs_wvt || [];
        const result = window.cs_wvt.push(['trackPageview', 'My Custom Page Title']) // triggers a pageview event with "My Custom Page Title" as the page title
      }

      function sendTransaction() {
        window.cs_wvt = window.cs_wvt || [];
        const result = window.cs_wvt.push(['trackTransaction', { value: 1000, currency: 'EUR', id: 'my-transaction-id'}]) 
      }

      function optOut() {
        window.cs_wvt = window.cs_wvt || [];
        const result = window.cs_wvt.push(['optout']);
      }

      function optIn() {
        window.cs_wvt = window.cs_wvt || [];
        const result = window.cs_wvt.push(['optin']);
      }
    </script>

  </head>
  <body>
    <div class="container">
      <section class="content">
        <div>
          <h1 style="font-size:26pt">WebView Tracking Tag Doc</h1>
          <p style="font-size:18pt">Use this document to enable WebView tracking in your mobile app.<br />
          You'll need to implement the Contentsquare WebView JavaScript Tracking Tag<br />
          in the web pages called in your mobile app to build a JavaScript Bridge<br />
          between your WebView content and the native SDK.</p>
          <h2 style="font-size:22pt">Sending webview events</h2>
          <div>
            <button onclick="optIn()">
              <h3 style="font-size:20pt">Opt-in</h3>
            </button>
            <button onclick="optOut()">
              <h3 style="font-size:20pt">Opt-out</h3>
            </button>
          </div>

          <h2 style="font-size:22pt">Sending webview events</h2>
          <div>
            <button onclick="sendScreenView()">
              <h3 style="font-size:20pt">Send event</h3>
            </button>
            <button onclick="sendTransaction()">
              <h3 style="font-size:20pt">Send 10$ transaction</h3>
            </button>
          </div>
        </div>
      </section>
    </div>

    <script type="text/javascript">
    (function() {
      var mt = document.createElement("script"); mt.type = "text/javascript"; mt.async = true;
      mt.src = "https://t.contentsquare.net/wvt/web-view.js";
      document.getElementsByTagName("head")[0].appendChild(mt);
    })();
    </script>

  </body>
</html>
`;
