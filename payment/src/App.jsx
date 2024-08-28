
import useRazorpay from "react-razorpay"; 
function App() {
  const [Razorpay]= useRazorpay()
  const payNow=async()=>{
    const response=await fetch('http://localhost:3000/order')
   const data= await response.json()
   const options={
    key: "rzp_test_jjUXc8oij8CaLy", 
    amount: data.amount,
    currency: "INR",
    name: "Pcrebirth",
    description: "Test Transaction",
    order_id: data.orderId,
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: "IJaz Anwar",
      email: "youremail@example.com",
      contact: "7012932630",
    }
   }
  const razor=new Razorpay(options)

  razor.on("payment.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });
  razor.open()
  }
  return (
    <div>
      <h1>Razorpay Gateway example</h1>
      <button onClick={payNow}>Pay Now</button>
    </div>
  ) 
}

export default App