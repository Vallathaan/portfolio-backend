const nodemailer = require('nodemailer');
const { EMAIL, PASS } = require('../utils/config');



let config = {
  service:'gmail',
  auth : {
    user:EMAIL,
    pass:PASS
  }
}

 

  let transporter = nodemailer.createTransport(config)
  
  const signup =  (req,res) => {
    try{
      const {name,email,msg} = req.body;
      if( !name || !email || !msg) {
        return res.status(401).send({
          success:false,
          message:'please provide all fields',
        });
      }

      transporter.sendMail({
        to:'vallathan29@gmail.com',
        from:'vallathanadhi@gmail.com',
        subject:'Regarding mern portfolio app',
        html:`
        <h5>Detail Information</h5>
        <ul>
        <li><p>Name : ${name}</p><li>
        <li><p>Email : ${email}</p><li>
        <li><p>Message : ${msg}</p><li>
        `
      })


      return res.status(201).send({
        success:true,
        message:'your message send successfully',
      });
    } catch(error){
      console.log(error);
      return res.send(401).send({
        success:false,
        message:'email sending failed',
        error,
      });
    }
  };



module.exports = {signup};
