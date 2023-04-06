import Modal from "./Modal";
const OrderSuccessModal = ({onCLose}) => {
    return (
        <> 
        <Modal>
           <div className="order-container">
            <div className="order-container--success">
                <img src="/Images/order_success.svg" alt="success" className="img-fluid"/>
                <div className="message">
                    <h1>Order Successfully Placed!</h1>
                    <span>OrderID #{Math.random().toString(32).slice(2)}</span>
                </div>
            </div>
           </div>
        </Modal>
     
        </>
    )
}

export default OrderSuccessModal;