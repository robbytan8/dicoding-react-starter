const React = require('react');
const ReactDOMClient = require('react-dom/client');

const element = (
  <div>
    <h1>Biodata Perusahaan</h1>
    <ul>
      <li>Nama: Dicoding Indonesia</li>
      <li>Bidang: Education</li>
      <li>Tagline: Decode Ideas, Discover Potential.</li>
    </ul>
    <img src="dicoding-logo.png" alt="Dicoding Logo" />
  </div>
);

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(element);
