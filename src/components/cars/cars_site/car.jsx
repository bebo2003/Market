import React from 'react'
import './carcss.css'
export default function CarCategory() {
  return (
    <div>
      <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
  <title>CARS</title>
 
  <div className="background-blur" />
 
  <div className="divider" />
 
  <section className="cars-section">
    <div className="car-card">
      <img src="image/Hyundai.jpg" alt="Car 1" />
      <div className="car-info">
        <strong>Hyundai Elantra</strong> <br />
        <strong>Daily Rate: 500 EGP</strong>
      </div>
      <a href="#car1" className="quick-view-btn">Quick View</a>
    </div>
    <div className="car-card">
      <img src="image/2010_Toyota_Corolla.jpg" alt="Toyota Corolla" />
      <div className="car-info">
        <strong>Toyota Corolla</strong> <br />
        <strong>Daily Rate: 500 EGP</strong>
      </div>
      <a href="#car-toyota" className="quick-view-btn">Quick View</a>
    </div>
    <div className="car-card">
      <img src="image/honda_civic.jpg" alt="Honda Civic" />
      <div className="car-info">
        <strong>Honda Civic</strong><br />
        <strong>Daily Rate: 600 EGP</strong>
      </div>
      <a href="#car-honda" className="quick-view-btn">Quick View</a>
    </div>
    <div className="car-card">
      <img src="image/kia s 2020.jpg" alt="Kia Sportage" />
      <div className="car-info">
        <strong>Kia Sportage</strong><br />
        <strong>Daily Rate: 750 EGP</strong>
      </div>
      <a href="#car-kia" className="quick-view-btn">Quick View</a>
    </div>
    <div className="car-card">
      <img src="image/nissan_sunny.jpg" alt="Nissan Sunny" />
      <div className="car-info">
        <strong>Nissan Sunny</strong><br />
        <strong>Daily Rate: 450 EGP</strong>
      </div>
      <a href="#car-nissan" className="quick-view-btn">Quick View</a>
    </div>
    <div className="car-card">
      <img src="image/bmw-x6.jpg" alt="BMW X6" />
      <div className="car-info">
        <strong>BMW X6</strong><br />
        <strong>Daily Rate: 1200 EGP</strong>
      </div>
      <a href="#car-bmw" className="quick-view-btn">Quick View</a>
    </div>
    <div className="car-card">
      <img src="image/chevrolet_optra.jpg" alt="Chevrolet Optra" />
      <div className="car-info">
        <strong>Chevrolet Optra</strong><br />
        <strong>Daily Rate: 480 EGP</strong>
      </div>
      <a href="#car-chevrolet" className="quick-view-btn">Quick View</a>
    </div>
    <div className="car-card">
      <img src="image/jeep_cherokee.jpg" alt="Jeep Cherokee" />
      <div className="car-info">
        <strong>Jeep Cherokee</strong><br />
        <strong>Daily Rate: 950 EGP</strong>
      </div>
      <a href="#car-jeep" className="quick-view-btn">Quick View</a>
    </div>
    <div className="car-card">
      <img src="image/renault_logan.jpg" alt="Renault Logan" />
      <div className="car-info">
        <strong>Renault Logan</strong><br />
        <strong>Daily Rate: 430 EGP</strong>
      </div>
      <a href="#car-renault" className="quick-view-btn">Quick View</a>
    </div>
    <div className="car-card">
      <img src="image/kia_sportage.jpg" alt="Kia Sportage" />
      <div className="car-info">
        <strong>Kia Sportage</strong><br />
        <strong>Daily Rate: 850 EGP</strong>
      </div>
      <a href="#car6" className="quick-view-btn">Quick View</a>
    </div>
    <div className="car-card">
      <img src="image/mercedes_c200.jpg" alt="Mercedes C200" />
      <div className="car-info">
        <strong>Mercedes-Benz C200</strong><br />
        <strong>Daily Rate: 1200 EGP</strong>
      </div>
      <a href="#car8" className="quick-view-btn">Quick View</a>
    </div>
  </section>
  <div id="car1" className="modal-overlay">
    <div className="modal-box">
      <a href="#" className="close-modal">×</a>
      <div className="modal-content">
        <div className="modal-image">
          <img src="image/Hyundai.jpg" alt="Hyundai Elantra" />
        </div>
        <div className="modal-info">
          <h2>Hyundai Elantra</h2>
          <p>Model: 2014</p>
          <p>Color: Gray</p>
          <p>Transmission: Automatic</p>
          <p>Air Conditioning: Yes</p>
          <p>Daily Rate: 500 EGP</p>
          <button className="rent-now-btn">Rent Now</button>
        </div>
      </div>
    </div>
  </div>
  <div id="car-toyota" className="modal-overlay">
    <div className="modal-box">
      <a href="#" className="close-modal">×</a>
      <div className="modal-content">
        <div className="modal-image">
          <img src="image/2010_Toyota_Corolla.jpg" alt="Toyota Corolla" />
        </div>
        <div className="modal-info">
          <h2>Toyota Corolla</h2>
          <p>Model: 2010</p>
          <p>Color: Silver</p>
          <p>Transmission: Automatic</p>
          <p>Air Conditioning: Yes</p>
          <p>Daily Rate: 500 EGP</p>
          <button className="rent-now-btn">Rent Now</button>
        </div>
      </div>
    </div>
  </div>
  <div id="car-honda" className="modal-overlay">
    <div className="modal-box">
      <a href="#" className="close-modal">×</a>
      <div className="modal-content">
        <div className="modal-image">
          <img src="image/honda_civic.jpg" alt="Honda Civic" />
        </div>
        <div className="modal-info">
          <h2>Honda Civic</h2>
          <p>Model: 2016</p>
          <p>Color: white</p>
          <p>Transmission: Manual</p>
          <p>Air Conditioning: Yes</p>
          <p>Daily Rate: 600 EGP</p>
          <button className="rent-now-btn">Rent Now</button>
        </div>
      </div>
    </div>
  </div>
  <div id="car-kia" className="modal-overlay">
    <div className="modal-box">
      <a href="#" className="close-modal">×</a>
      <div className="modal-content">
        <div className="modal-image">
          <img src="image/kia s 2020.jpg" alt="Kia Sportage" />
        </div>
        <div className="modal-info">
          <h2>Kia Sportage</h2>
          <p>Model: 2020</p>
          <p>Color: Red</p>
          <p>Transmission: Automatic</p>
          <p>Air Conditioning: Yes</p>
          <p>Daily Rate: 750 EGP</p>
          <button className="rent-now-btn">Rent Now</button>
        </div>
      </div>
    </div>
  </div>
  <div id="car-nissan" className="modal-overlay">
    <div className="modal-box">
      <a href="#" className="close-modal">×</a>
      <div className="modal-content">
        <div className="modal-image">
          <img src="image/nissan_sunny.jpg" alt="Nissan Sunny" />
        </div>
        <div className="modal-info">
          <h2>Nissan Sunny</h2>
          <p>Model: 2015</p>
          <p>Color: Black</p>
          <p>Transmission: Manual</p>
          <p>Air Conditioning: Yes</p>
          <p>Daily Rate: 450 EGP</p>
          <button className="rent-now-btn">Rent Now</button>
        </div>
      </div>
    </div>
  </div>
  <div id="car-bmw" className="modal-overlay">
    <div className="modal-box">
      <a href="#" className="close-modal">×</a>
      <div className="modal-content">
        <div className="modal-image">
          <img src="image/bmw-x6.jpg" alt="BMW X6" />
        </div>
        <div className="modal-info">
          <h2>BMW X6</h2>
          <p>Model: 2022</p>
          <p>Color: Blue</p>
          <p>Transmission: Automatic</p>
          <p>Air Conditioning: Yes</p>
          <p>Daily Rate: 1200 EGP</p>
          <button className="rent-now-btn">Rent Now</button>
        </div>
      </div>
    </div>
  </div>
  <div id="car-chevrolet" className="modal-overlay">
    <div className="modal-box">
      <a href="#" className="close-modal">×</a>
      <div className="modal-content">
        <div className="modal-image">
          <img src="image/chevrolet_optra.jpg" alt="Chevrolet Optra" />
        </div>
        <div className="modal-info">
          <h2>Chevrolet Optra</h2>
          <p>Model: 2018</p>
          <p>Color: Gray</p>
          <p>Transmission: Manual</p>
          <p>Air Conditioning: Yes</p>
          <p>Daily Rate: 480 EGP</p>
          <button className="rent-now-btn">Rent Now</button>
        </div>
      </div>
    </div>
  </div>
  <div id="car-jeep" className="modal-overlay">
    <div className="modal-box">
      <a href="#" className="close-modal">×</a>
      <div className="modal-content">
        <div className="modal-image">
          <img src="image/jeep_cherokee.jpg" alt="Jeep Cherokee" />
        </div>
        <div className="modal-info">
          <h2>Jeep Cherokee</h2>
          <p>Model: 2019</p>
          <p>Color: Dark Gray</p>
          <p>Transmission: Automatic</p>
          <p>Air Conditioning: Yes</p>
          <p>Daily Rate: 950 EGP</p>
          <button className="rent-now-btn">Rent Now</button>
        </div>
      </div>
    </div>
  </div>
  <div id="car-renault" className="modal-overlay">
    <div className="modal-box">
      <a href="#" className="close-modal">×</a>
      <div className="modal-content">
        <div className="modal-image">
          <img src="image/renault_logan.jpg" alt="Renault Logan" />
        </div>
        <div className="modal-info">
          <h2>Renault Logan</h2>
          <p>Model: 2017</p>
          <p>Color: Beige</p>
          <p>Transmission: Manual</p>
          <p>Air Conditioning: Yes</p>
          <p>Daily Rate: 430 EGP</p>
          <button className="rent-now-btn">Rent Now</button>
        </div>
      </div>
    </div>
  </div>
  <div id="car6" className="modal-overlay">
    <div className="modal-box">
      <a href="#" className="close-modal">×</a>
      <div className="modal-content">
        <div className="modal-image">
          <img src="image/kia_sportage.jpg" alt="Kia Sportage" />
        </div>
        <div className="modal-info">
          <h2>Kia Sportage</h2>
          <p>Model: 2022</p>
          <p>Color: Black</p>
          <p>Transmission: Automatic</p>
          <p>Air Conditioning: Yes</p>
          <p>Daily Rate: 850 EGP</p>
          <button className="rent-now-btn">Rent Now</button>
        </div>
      </div>
    </div>
  </div>
  <div id="car8" className="modal-overlay">
    <div className="modal-box">
      <a href="#" className="close-modal">×</a>
      <div className="modal-content">
        <div className="modal-image">
          <img src="image/mercedes_c200.jpg" alt="Mercedes-Benz C200" />
        </div>
        <div className="modal-info">
          <h2>Mercedes-Benz C200</h2>
          <p>Model: 2021</p>
          <p>Color: White</p>
          <p>Transmission: Automatic</p>
          <p>Air Conditioning: Yes</p>
          <p>Daily Rate: 1200 EGP</p>
          <button className="rent-now-btn">Rent Now</button>
        </div>
      </div>
    </div>
  </div>
  
</div>

    </div>
  )
}
