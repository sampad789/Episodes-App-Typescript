import React, { useState, useContext } from "react";
import { Store } from "./Store";
import { Link } from "@reach/router";
import { fetchRandomEpisode } from "./Actions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function App(props: any): JSX.Element {
  const { state, dispatch } = useContext(Store);
  const { className } = props;
  const [modal, setModal] = useState(false);

  const fetchdata = () => {
    fetchRandomEpisode(state, dispatch);
    toggle();
  };

  const toggle = () => setModal(!modal);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>South-Park</h1>
          <p>Select Your Favourite Episode </p>
          <button type="button" className="button" onClick={fetchdata}>
            Watch a random Episode
          </button>
        </div>
        <div>
          <Link className="header-links" to="/">
            Home
          </Link>
          <Link className="header-links" to="/favourites">
            {" "}
            Favourite(s):{state.favourites.length}
          </Link>
          {state.random.map((episodes: any, index: any) => (
            <div key={episodes.id}>
              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{episodes.name}</ModalHeader>
                <ModalBody>
                  <img
                    className="image"
                    src={
                      episodes.image ? episodes.image.original : episodes.image
                    }
                    alt={`Brooklyn Nine Nine ${episodes.name}`}
                  />
                  <p>{""}</p>
                  {episodes.summary.replace(/(<([^>]+)>)/gi, "")}
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={toggle}>
                    Close
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          ))}
        </div>
      </header>
      {props.children}
    </React.Fragment>
  );
}
