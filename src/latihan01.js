// Latihan Membuat dan Komposisi React Komponen
const React = require('react');
const ReactDOMClient = require('react-dom/client');

function Button() {
  // TODO: selesaikan component-nya
}
 
function CardHeader() {
  // TODO: selesaikan component-nya
}
 
function CardBody() {
  // TODO: selesaikan component-nya
}
 
function Card() {
  // TODO: selesaikan component-nya
}
 
function Header() {
  // TODO: selesaikan component-nya
}
 
function News() {
  // data news
  const someNews = [
    {
      title: 'CNN Acuire BEME',
      date: 'March 20 2022',
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'React and the WP-API',
      date: 'March 19 2022',
      content: 'The first ever decoupled starter theme for React & the WP-API.',
      image: 'https://source.unsplash.com/user/ilyapavlov/600x400',
      category: 'News',
      link: '#'
    },
    {
      title: 'Nomad Lifestyle',
      date: 'March 19 2022',
      content: 'Learn our tips and tricks on living a nomadic lifestyle.',
      image: 'https://source.unsplash.com/user/erondu/600x400',
      category: 'Travel',
      link: '#'
    }
  ];
 
  // TODO: selesaikan component-nya
  return <div>Selesaikan componentnya</div>;
}
 
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<News />);