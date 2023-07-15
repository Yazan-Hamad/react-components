import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage(){
   const [showModal, setShowModal] = useState(false);
    return <div>
        <Button primary onClick={()=>{setShowModal(true)}}>Open Modal</Button>
        { showModal && <Modal/>}
    </div>
}

export default ModalPage;