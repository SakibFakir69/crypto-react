import React from "react";
import Accordion from "react-bootstrap/Accordion";
function Faq() {
  return (
    <div className=" text-white "   style={{ margin: " auto", padding: "2em" }}>

      <section className="container d-flex border bg-black  rounded " style={{marginLeft:"3%"}}>

        <div className="row text-center justify-content-center align-content-center p-4">

          <div className="col col-lg-6 col-12 text-start ">
            <h3 className="text-start ">Case Studies</h3>
            <p className="text-left fw-1  " style={{padding:
                "2em",
                marginLeft:"-20px"
            }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quam obcaecati dolore quis minima! Excepturi
              repellendus delectus culpa voluptatum nobis quam esse cumque
              eligendi reprehenderit quaerat?
            </p>
          </div>


          <div className="col col-lg-6 col-12">

            <Accordion defaultActiveKey="0" style={{backgroundColor:"black"}}>

              <Accordion.Item eventKey="0" className="bg-black" style={{backgroundColor:"black",color:"white"}}
              
              >

                <Accordion.Header style={{ backgroundColor: "black", color: "white" }}>
                    Digital Identity Management


                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>

              <div className="mt-md-3 mt-0">

              </div>


              <Accordion.Item eventKey="1" style={{backgroundColor:"black",color:"white"}}>
                <Accordion.Header>
                    Supply Chain Tracebility 

                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
               <div className="mt-md-3 mt-0">

              </div>
              <Accordion.Item eventKey="2" style={{backgroundColor:"black",color:"white"}}>
                <Accordion.Header>
                    Real Estate Tokenization

                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
               <div className="mt-md-3 mt-0 border">

              </div>
              <Accordion.Item eventKey="3" style={{backgroundColor:"black",color:"white"}}>
                <Accordion.Header>Healthcare Record Managements</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Faq;
