import React from 'react'
import './footer.css'
function footer() {
  return (
    <div className='framgment'>
      {/* footer start */}
      <div className="fconatiner">
        <div className='mainFooter'>

          <div className='f1'>
            <div className="ff22">
              <h1>AirWeat</h1>
              <p>
                Aliquam volutpat sapien a augue vulputate <br />
                vestibulum. Quisque sodales lectus ac <br />
                sollicitudin pretium. Duis malesuada erat a nisl <br />
                congue luctus.
              </p>
            </div>
          </div>

          <div className='f1'>


            <div className='ful'>
              <div>

                <h1>Find us</h1>

                <p>
                  India <br />
                  395004  KatarGam Rd. Surat,  <br />
                  Gujarat India 0000
                </p>

                <div className='ficon'>

                  <p>
                    <i class="fa-brands fa-youtube" style={{ color: "#e92b5a" }}></i>
                  </p>
                  <p>
                    <i class="fa-brands fa-instagram" style={{ color: "#a30f5e" }}></i>
                  </p>
                  <p>
                    <i class="fa-brands fa-facebook" style={{ color: " #74C0FC" }}></i>
                  </p>
                  <p>
                    <i class="fa-brands fa-twitter" style={{ color: " #4471c1" }}></i>
                  </p>
                </div>

              </div>

              <div>
                <h1>
                  Contacts
                </h1>
                <p>
                  General: <br />
                  +91 9510190352
                  <br />
                  namecompany@example.com


                  <br />
                  <p>
                    New business: <br />
                    +1(808) 555-0111
                    <br />
                    namecompany@example.com
                  </p>

                </p>
              </div>
            </div>


          </div>





        </div>
      </div>
      <hr />
      <p>
        Created By The suraj Rajpu....
      </p>


    </div>
  )
}

export default footer
