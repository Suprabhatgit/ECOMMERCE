// import React, { useState } from "react";

// const ContactInfo = () => {
//   const [userData, setUserData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     address: "",
//     message: "",
//   });

//   let name, value;
//   const postUserData = (event) => {
//     name = event.target.name;
//     value = event.target.value;

//     setUserData({ ...userData, [name]: value });
//   };

//   // connect with firebase
//   const submitData = async (event) => {
//     event.preventDefault();
//     const { firstName, lastName, phone, email, address, message } = userData;

//     if (firstName && lastName && phone && email && address && message) {
//       const res = await fetch(
//         "https://ecommerce-8f933-default-rtdb.firebaseio.com/userDataRecords.json",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             firstName,
//             lastName,
//             phone,
//             email,
//             address,
//             message,
//           }),
//         }
//       );

//       if (res) {
//         setUserData({
//           firstName: "",
//           lastName: "",
//           phone: "",
//           email: "",
//           address: "",
//           message: "",
//         });
//         alert("Data Stored");
//       } else {
//         alert("plz fill the data");
//       }
//     } else {
//       alert("plz fill the data");
//     }
//   };

//   return (
//     <>
//       <section className="my-5">
//         <div className="container">
//           <div className="row-auto">
//             <div className="col-12 col-lg-10 mx-auto">
//               <div className="row-auto">
//                 <div className="contact-leftside col-12 col-lg-5">
//                   <h1 className="main-heading fw-bold">
//                     Connect With Our <br /> Sales Team.
//                   </h1>
//                   <p className="main-hero-para">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Deserunt eaque alias similique.
//                   </p>
//                   <figure>
//                     <img
//                       src="./images/hero1.jpg"
//                       alt="contatUsImg"
//                       className="img-fluid"
//                     />
//                   </figure>
//                 </div>

//                 {/* right side contact form  */}
//                 <div className="contact-rightside col-12 col-lg-7">
//                   <form method="POST">
//                     <div className="row">
//                       <div className="col-12 col-lg-6 contact-input-feild">
//                         <input
//                           type="text"
//                           name="firstName"
//                           id=""
//                           className="form-control"
//                           placeholder="First Name"
//                           value={userData.firstName}
//                           onChange={postUserData}
//                         />
//                       </div>
//                       <div className="col-12 col-lg-6 contact-input-feild">
//                         <input
//                           type="text"
//                           name="lastName"
//                           id=""
//                           className="form-control"
//                           placeholder="Last Name"
//                           value={userData.lastName}
//                           onChange={postUserData}
//                         />
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-12 col-lg-6 contact-input-feild">
//                         <input
//                           type="text"
//                           name="phone"
//                           id=""
//                           className="form-control"
//                           placeholder="Phone Number "
//                           value={userData.phone}
//                           onChange={postUserData}
//                         />
//                       </div>
//                       <div className="col-12 col-lg-6 contact-input-feild">
//                         <input
//                           type="text"
//                           name="email"
//                           id=""
//                           className="form-control"
//                           placeholder="Email ID"
//                           value={userData.email}
//                           onChange={postUserData}
//                         />
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-12 contact-input-feild">
//                         <input
//                           type="text"
//                           name="address"
//                           id=""
//                           className="form-control"
//                           placeholder="Add Address"
//                           value={userData.address}
//                           onChange={postUserData}
//                         />
//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="col-12 ">
//                         <input
//                           type="text"
//                           name="message"
//                           id=""
//                           className="form-control"
//                           placeholder="Enter Your Message"
//                           value={userData.message}
//                           onChange={postUserData}
//                         />
//                       </div>
//                     </div>
//                     <div class="form-check form-checkbox-style">
//                       <input
//                         class="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="flexCheckChecked"
//                       />
//                       <label
//                         class="form-check-label"
//                         className="main-hero-para">
//                         I agree that the thapatechnicalpay may contact me at the
//                         email address or phone number above
//                       </label>
//                     </div>

//                     <button
//                       type="submit"
//                       className="button"
//                       onClick={submitData}>
//                       Submit
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ContactInfo;
import React, { useState } from "react";

const ContactInfo = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
  
    const { firstName,phone, email, address, message } = userData;

    if (firstName && phone && email && address && message) {
      const res = await fetch(
        "https://ecommerce-8f933-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Thank You for Reaching out to us. Our Team will get back to you shortly");
      } else {
        alert("Please fill in the data");
      }
    } else {
      alert("Please fill in the data");
    }
  };

  return (
    <div>
     <form onSubmit={submitData} className="py-4 mt-4 border-t flex flex-col gap-5">
      <div>
        <label htmlFor="firstName">Full Name</label>
        <input
         type="text" name="firstName" id="" placeholder="John Doe"
         value={userData.firstName}
         onChange={postUserData} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="" placeholder="john@gmail.com"
        value={userData.email}
         onChange={postUserData}
        />
      </div>
      <div>
        <label htmlFor="phone">Mobile No</label>
        <input type="text" name="phone" id="" placeholder="Your phone number"
        value={userData.phone}
        onChange={postUserData}
        />
      </div>
      <div>
      <label htmlFor="address">Address</label>
        <input type="text" name="address" id="" placeholder="Type your current address"
        value={userData.address}
        onChange={postUserData}
        />
      </div>
      <div>
        <label htmlFor="message">Your Message</label>
        <textarea className="h-32" name="message" id="" placeholder="Type you message here"
         value={userData.message}
         onChange={postUserData}
        ></textarea>
      </div>
      <button className="button p-3 font-bold" type="submit">Submit</button>
     </form>
     <div className=" bg-gray-50 flex flex-col">
      <div>Error message</div>
     </div>
     </div>   
  );
};

export default ContactInfo;
