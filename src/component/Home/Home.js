import React from 'react';
import { Carousel } from 'react-bootstrap';

import './Home.css';

const Home = () => {

    return (
        <div>
            <Carousel className=" carousel  my-4">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/4491951/pexels-photo-4491951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Dubai</h3>
                        <p>Discover Hotel Management Dubai At Tour package! - Easily Found! Many Products.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/3520548/pexels-photo-3520548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Singapur</h3>
                        <p>Discover Hotel Management Singapur At Tour package! - Easily Found! Many Products.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/327394/pexels-photo-327394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Nayagra Waterfall</h3>
                        <p>Part of the Niagara River, which drains Lake Erie into Lake Ontario, the combined falls have the highest flow rate of any waterfall.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div>
                <h1 className="package text-center">Our Package</h1>
            </div>
            <div className='container my-4'>
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg" class="card-img-top" alt="..."/>
      <div className="card-body text-start">
                                <h2 className="card-title text-primary">Statue Of Liberty</h2>
                               
                                <p className="card-text">The 3 day holiday packages are designed in a way so that our clients can get a better joy in such lesser period of time.</p>
                                <h3 className="text-primary">package : 5000$</h3>

                                <button type="button" class="btn btn-primary">Book Now</button>

                            </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.pexels.com/photos/2887633/pexels-photo-2887633.jpeg" class="card-img-top" alt="..."/>
      <div className="card-body text-start">
                                <h2 className="card-title text-primary">London</h2>
                               
                                <p className="card-text">The 3 day holiday packages are designed in a way so that our clients can get a better joy in such lesser period of time.</p>
                                <h3 className="text-primary">package : 4500$</h3>

                                <button type="button" class="btn btn-primary">Book Now</button>

                            </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.pexels.com/photos/5848766/pexels-photo-5848766.jpeg" class="card-img-top" alt="..."/>
      <div className="card-body text-start">
                                <h2 className="card-title text-primary">Tajmahal</h2>
                              
                                <p className="card-text"> We have mentioned the details of our 2 nights 3 days package on our official website and all you need to do is the selection of the desired one.</p>
                                <h3 className="text-primary">package : 1500$</h3>

                                <button type="button" class="btn btn-primary">Book Now</button>

                            </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.pexels.com/photos/358229/pexels-photo-358229.jpeg" class="card-img-top" alt="..."/>
      <div className="card-body text-start">
                                <h2 className="card-title text-primary">Thailand</h2>
                               
                                <p className="card-text">The 3 day holiday packages are designed in a way so that our clients can get a better joy in such lesser period of time. </p>
                                <h3 className="text-primary">package : 3000$</h3>

                                <button type="button" class="btn btn-primary">Book Now</button>

                            </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.pexels.com/photos/356966/pexels-photo-356966.jpeg" class="card-img-top" alt="..."/>
      <div className="card-body text-start">
                                <h2 className="card-title text-primary">Colosseum</h2>
                           
                                <p className="card-text"> We have mentioned the details of our 2 nights 3 days package you need to do is the selection of the desired one.</p>
                                <h3 className="text-primary">package : 4000$</h3>

                                <button type="button" class="btn btn-primary">Book Now</button>

                            </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.pexels.com/photos/9801136/pexels-photo-9801136.jpeg" class="card-img-top" alt="..."/>
      <div className="card-body text-start">
                                <h2 className="card-title text-primary">Avarest</h2>
                                
                                <p className="card-text">The 3 day holiday packages are designed in a way so that our clients can get a better joy in such lesser period of time.</p>
                                <h3 className="text-primary">package : 2000$</h3>

                                <button type="button" class="btn btn-primary">Book Now</button>

                            </div>
    </div>
  </div>
</div>
            </div>

            

            
            <div>
            <div>
                <h1 className='text-primary text-center my-4'>Clients Review</h1>
                <div className='b-top container mt-4 my-4'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img className='actor' src="https://static.wikia.nocookie.net/bengali/images/9/98/Afran-Nisho-1.jpg"  alt="..."/>
      <div className="card-body text-center">
        <h3 className="card-title text-primary">Arfan Nisho</h3>
        <h5>Review</h5>
        <div className='star d-flex'>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star-half-alt"></i></p>
        </div>
        <p className="card-text">I purchased a used vehicle from here yesterday and the entire experience was very pleasant ! I was in and out , in around 4 hours which I felt was very nice start to finish . They offered me a very fair value on my trade without having to haggle back and forth which was also nice. My salesman Chase was great , very friendly and not pushy at all.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img className='actor' src="https://2.bp.blogspot.com/-jJLBR6cHwzw/XM3_5A00l9I/AAAAAAAAAbU/0vjMMsBmxbswl7FWnDv3docHg3ClrXV8gCLcBGAs/s1600/nowshin-nahrin-bangladeshi-model-actress-photos-hot-sexy7.jpg"  alt="..."/>
      <div className="card-body text-center">
        <h3 className="card-title text-primary">Noushin</h3>
        <h5>Review</h5>
        <div className='star d-flex'>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star-half-alt"></i></p>
        </div>
        <p className="card-text">I purchased a Nissan lease this past Sunday. David Zachary was our sales person and he was excellent. He took the time to answer whatever questions I had and showed me how to use all the features on the new vehicle. Everyone at the dealership was extremely nice and helpful. I got the deal that I wanted and I am very satisfied with my 2021 Rogue. </p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img className='actor' src="https://thedailynewnation.com/library/1596122330_1.jpg"  alt="..."/>
      <div className="card-body text-center">
        <h3 className="card-title text-primary">Apurbo</h3>
        <h5>Review</h5>
        <div className='star d-flex'>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star-half-alt"></i></p>
        </div>
        <p class="card-text">We purchased a 2020 Nissan Rogue It was our first visit to this dealership and we were pleasantly surprised that it was entirely no pressure We got a great deal and Steve Maag and Clayton Fields gave us great customer service We also enjoyed meeting Will Barnes the general manager We are totally satisfied with our purchase Great dealership and definitely .</p>
      </div>
    </div>
  </div>
  
</div>
                </div>
            </div>
            </div>
        </div>

    );
};

export default Home;