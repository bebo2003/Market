import React, { useEffect, useState } from 'react'
import './assets/css/style.css'
import img1 from '../../assets/images/watch.jpg'
import img2 from '../../assets/images/watch2.jpg'
import img3 from '../../assets/images/photo-1622434641406-a158123450f9.jpeg'
import img4 from '../../assets/images/7.jpeg'
import img5 from '../../assets/images/6.jpeg'
import img6 from '../../assets/images/5.jpeg'

export default function LandPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // نشوف هل النظام في وضع الداكن أو لا
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // نحدث الحالة بناءً على نتيجة الاستعلام
    setIsDarkMode(darkModeMediaQuery.matches);

    // نضيف مستمع لتغير الوضع اذا المستخدم غيره اثناء التصفح
    const handler = (e) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener("change", handler);

    // تنظيف المستمع عند خروج المكون
    return () => darkModeMediaQuery.removeEventListener("change", handler);
  }, []);
  return (
    <div  >
      <div>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/*  
    Document Title
    =============================================
    */}
  <title>Titan | Multipurpose HTML5 Template</title>
  {/*  
    Favicons
    =============================================
    */}
  <link rel="apple-touch-icon" sizes="57x57" href="assets/images/favicons/apple-icon-57x57.png" />
  <link rel="apple-touch-icon" sizes="60x60" href="assets/images/favicons/apple-icon-60x60.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="assets/images/favicons/apple-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="76x76" href="assets/images/favicons/apple-icon-76x76.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="assets/images/favicons/apple-icon-114x114.png" />
  <link rel="apple-touch-icon" sizes="120x120" href="assets/images/favicons/apple-icon-120x120.png" />
  <link rel="apple-touch-icon" sizes="144x144" href="assets/images/favicons/apple-icon-144x144.png" />
  <link rel="apple-touch-icon" sizes="152x152" href="assets/images/favicons/apple-icon-152x152.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicons/apple-icon-180x180.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="assets/images/favicons/android-icon-192x192.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="assets/images/favicons/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="assets/images/favicons/favicon-96x96.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="assets/images/favicons/favicon-16x16.png" />
  <link rel="manifest" href="/manifest.json" />
  <meta name="msapplication-TileColor" content="#ffffff" />
  <meta name="msapplication-TileImage" content="assets/images/favicons/ms-icon-144x144.png" />
  <meta name="theme-color" content="#ffffff" />
  {/*  
    Stylesheets
    =============================================
    
    */}
  {/* Default stylesheets*/}
  <link href="assets/lib/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
  {/* Template specific stylesheets*/}
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Volkhov:400i" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet" />
  <link href="assets/lib/animate.css/animate.css" rel="stylesheet" />
  <link href="assets/lib/components-font-awesome/css/font-awesome.min.css" rel="stylesheet" />
  <link href="assets/lib/et-line-font/et-line-font.css" rel="stylesheet" />
  <link href="assets/lib/flexslider/flexslider.css" rel="stylesheet" />
  <link href="assets/lib/owl.carousel/dist/assets/owl.carousel.min.css" rel="stylesheet" />
  <link href="assets/lib/owl.carousel/dist/assets/owl.theme.default.min.css" rel="stylesheet" />
  <link href="assets/lib/magnific-popup/dist/magnific-popup.css" rel="stylesheet" />
  <link href="assets/lib/simple-text-rotator/simpletextrotator.css" rel="stylesheet" />
  {/* Main stylesheet and color file*/}
  <link href="assets/css/style.css" rel="stylesheet" />
  <link id="color-scheme" href="assets/css/colors/default.css" rel="stylesheet" />
  <main>
   
 
 
    <div className="main">
     <section className="py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      <div className="text-center p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
        <div className="text-4xl text-yellow-500 mb-4">
          <span className="icon-lightbulb">💡</span> {/* يمكنك استبدالها بـ <FaLightbulb /> من react-icons */}
        </div>
        <h3 className="text-xl font-semibold mb-2">Ideas and concepts</h3>
        <p className="text-gray-600 text-sm">
          Careful attention to detail and clean, well structured code ensures a smooth user experience for all your visitors.
        </p>
      </div>

      <div className="text-center p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
        <div className="text-4xl text-blue-500 mb-4">
          <span className="icon-tools">🛠️</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Designs & interfaces</h3>
        <p className="text-gray-600 text-sm">
          Careful attention to detail and clean, well structured code ensures a smooth user experience for all your visitors.
        </p>
      </div>

      <div className="text-center p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
        <div className="text-4xl text-green-500 mb-4">
          <span className="icon-tools-2">💻</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Coding & development</h3>
        <p className="text-gray-600 text-sm">
          Careful attention to detail and clean, well structured code ensures a smooth user experience for all your visitors.
        </p>
      </div>

      <div className="text-center p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
        <div className="text-4xl text-red-500 mb-4">
          <span className="icon-lifesaver">🛟</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Dedicated support</h3>
        <p className="text-gray-600 text-sm">
          Careful attention to detail and clean, well structured code ensures a smooth user experience for all your visitors.
        </p>
      </div>

    </div>
  </div>
</section>



     <section className="py-16 " id="team">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">Popluar Watches</h2>
    <p className="text-gray-500 max-w-2xl mx-auto mb-12">
      A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
    </p>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Card 1 */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md group relative">
        <img src={img1} alt="Rolex" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
          <h5 className="text-lg font-semibold">Rolex</h5>
          <p className="text-sm px-4 mt-2 text-center">orignal watch</p>
         
        </div>
        <div className="p-4 text-center">
          <h3 className="font-bold">Rolex</h3>
          <p className="text-sm text-gray-500">Water Prove</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md group relative">
        <img src={img2} alt="Andy River" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
          <h5 className="text-lg font-semibold">Casio</h5>
          <p className="text-sm px-4 mt-2 text-center">orignal Casio</p>
         
        </div>
        <div className="p-4 text-center">
          <h3 className="font-bold">Casio</h3>
          <p className="text-sm text-gray-500">Creative Watch</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md group relative">
        <img src={img3} alt="Dylan Woods" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
          <h5 className="text-lg font-semibold">Fossil </h5>
          <p className="text-sm px-4 mt-2 text-center"> the best watch eveer </p>
         
        </div>
        <div className="p-4 text-center">
          <h3 className="font-bold">Fossil</h3>
          <p className="text-sm text-gray-500">Old School</p>
        </div>
      </div>

      
    </div>
  </div>
</section>


     <section className="py-16 " id="team">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4">Popular Cars </h2>
    <p className="text-gray-500 max-w-2xl mx-auto mb-12">
      A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
    </p>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Card 1 */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md group relative">
        <img src={img4} alt="Rolex" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
          <h5 className="text-lg font-semibold">Chevrolet Bel Air</h5>
          <p className="text-sm px-4 mt-2 text-center">Nomad</p>
         
        </div>
        <div className="p-4 text-center">
          <h3 className="font-bold">Chevrolet Bel Air</h3>
          <p className="text-sm text-gray-500">Nomad</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md group relative">
        <img src={img5} alt="Andy River" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
          <h5 className="text-lg font-semibold">Kia</h5>
          <p className="text-sm px-4 mt-2 text-center">concept art</p>
         
        </div>
        <div className="p-4 text-center">
          <h3 className="font-bold">Kia</h3>
          <p className="text-sm text-gray-500">concept art</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md group relative">
        <img src={img6} alt="Dylan Woods" className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
          <h5 className="text-lg font-semibold">BMW M4 </h5>
          <p className="text-sm px-4 mt-2 text-center">angel eyes </p>
         
        </div>
        <div className="p-4 text-center">
          <h3 className="font-bold">BMW M4</h3>
          <p className="text-sm text-gray-500">angel eyes</p>
        </div>
      </div>

      
    </div>
  </div>
</section>


      <hr className="divider-w" />
    <section className="py-12  ">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap -mx-4">
      {/* الأسئلة المتكررة */}
      
        
      {/* قسم الخبرات */}
 
    </div>
  </div>
</section>




   

   

      <hr className="divider-d" />
     
    </div>
    <div className="scroll-up"><a href="#totop"><i className="fa fa-angle-double-up" /></a></div>
  </main>
  {/*  
    JavaScripts
    =============================================
    */}
</div>

    </div>
  )
}
