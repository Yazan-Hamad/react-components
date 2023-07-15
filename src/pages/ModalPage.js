import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage(){
   const [showModal, setShowModal] = useState(false);
   const modalContent = <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   </p>;
   const modalButton = <Button 
   primary
   onClick={()=>{setShowModal(false)}}
   >
    Accept
    </Button>;
    const modal = <Modal 
    onClose={()=>{setShowModal(false)}}
    actionBar={modalButton}
    >
{modalContent}
    </Modal>
    return <div>
        <Button primary onClick={()=>{setShowModal(true)}}>Open Modal</Button>
        { showModal && modal}
    </div>;
}

export default ModalPage;